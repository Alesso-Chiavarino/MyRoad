import User from "@/models/User";
import { dbConnect } from "@/utils/mongoose";
import jwt from 'jsonwebtoken';

const updateAccount = async (req, res) => {

    dbConnect()

    const cookie = req.cookies;

    const { originalPassword, password, email } = req.body

    try {
        const token = jwt.verify(cookie.token, 'secret')

        if (email === token.email) {
            return res.send('email already exists')
        }

        if (email) {
            const updatedUser = await User.findOneAndUpdate({ email: token.email }, { email }, { new: true })
            return res.status(200).send(updatedUser)
        }

        if (password && originalPassword) {
            if (originalPassword !== token.password) {
                return res.send({ message: 'passwords do not match' })
            }
            const updatedUser = await User.findOneAndUpdate({ email: token.email }, { password }, { new: true })
            console.log(updatedUser)
            return res.status(200).send(updatedUser)
        }

        return res.send({ message: 'cannot update' })

    } catch (err) {
        console.log(err)
    }


}

export default updateAccount;