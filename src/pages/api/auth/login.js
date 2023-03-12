import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'
import { dbConnect } from '@/utils/mongoose'
import User from '@/models/User'

dbConnect()

const login = async (req, res) => {

    const { email, password } = req.body

    const user = await User.find({
        email,
        password
    })

    if (user.length === 0) {
        return res.status(404).json({ message: 'User not found' })
    }

    const token = jwt.sign({
        email,
        password,
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30)
    }, 'secret'
    )

    const serialized = serialize('token', token, {
        httpOnly: true,
        email,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
    })

    res.setHeader('Set-Cookie', serialized)
    res.status(200).json({ message: 'ok' })
}

export default login;