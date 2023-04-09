import User from '@/models/User'
import { dbConnect } from '@/utils/mongoose'

const getUser = async (req, res) => {

    const { email, username } = req.query

    dbConnect()

    try {
        if (email) {
            const user = await User.findOne({ email })

            if (!user) {
                return res.status(404).json({ message: 'User not found' })
            }

            res.status(200).json(user)
        }

        if (username) {
            const user = await User.findOne({ username })

            if (!user) {
                return res.status(404).json({ message: 'User not found' })
            }

            res.status(200).json(user)
        }
        
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' })
    }

}

export default getUser;