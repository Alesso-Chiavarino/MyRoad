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

    const updatedUser = await User.findOneAndUpdate({ email: token.email }, { avatar_url: image.secure_url }, { new: true })

    return res.status(200).send(updatedUser)


}

export default uploadAvatar