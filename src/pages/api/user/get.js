import User from '@/models/User'
import { dbConnect } from '@/utils/mongoose'

const getUser = async (req, res) => {

    const { email } = req.query

    dbConnect()

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }

    res.status(200).json(user)

}

export default getUser;