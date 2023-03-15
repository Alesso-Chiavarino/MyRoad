import { serialize } from 'cookie'
import { verify } from 'jsonwebtoken'

const logout = (req, res) => {

    const { token } = req.cookies

    if (!token) {
        return res.status(401).json({ message: 'Not Authorized' })
    }

    try {

        verify(token, 'secret')

        const serialized = serialize('token', null, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 0,
            path: '/'
        })

        res.setHeader('Set-Cookie', serialized)
        return res.status(200).json({ message: 'Success' })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}

export default logout;