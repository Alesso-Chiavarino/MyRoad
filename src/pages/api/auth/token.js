import jwt from 'jsonwebtoken';

const getToken = (req, res) => {
    const cookie = req.cookies;

    if (cookie) {
        const token = jwt.verify(cookie.token, 'secret')

        return res.status(200).send(token)
    }

    return res.status(401).send('Unauthorized')
}

export default getToken;