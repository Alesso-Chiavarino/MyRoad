import { configCloudinary, uploadImage, deleteImage } from '@/utils/cloudinary'
import User from '@/models/User'
import { dbConnect } from '@/utils/mongoose'
import jwt from 'jsonwebtoken';

const uploadAvatar = async (req, res) => {

    dbConnect()
    configCloudinary()

    const cookie = req.cookies;

    const token = jwt.verify(cookie.token, 'secret')

    const { image } = req.body

    console.log(image)

    if (!image) {
        return res.status(400).send('No image found')
    }

    try {
        const updatedUser = await User.findOneAndUpdate({ email: token.email }, {
            avatar_url: {
                url: image.secure_url,
                public_id: image.public_id
            }
        })

        if (updatedUser?.avatar_url?.public_id !== 'default') {
            await deleteImage(updatedUser.avatar_url.public_id)
        }
    }
    catch (err) {
        console.log(err)
        return res.status(400).send('Error updating user avatar')
    }
    finally {
        return res.status(200).send({ message: 'Avatar updated successfully' })
    }



}

export default uploadAvatar