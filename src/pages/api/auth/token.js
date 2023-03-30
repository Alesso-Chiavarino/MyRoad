import jwt from 'jsonwebtoken';

const getToken = (req, res) => {

    const cookie = req.cookies;

    if (!cookie.length > 0) {
        return res.send({ message: 'Unauthorized' })
    }

    const token = jwt.verify(cookie.token, 'secret')
    return res.status(200).send(token)

}

export default getToken;