import jwt from 'jsonwebtoken';

const getToken = (req, res) => {

    const cookie = req.cookies;
    console.log(cookie)

    if (!cookie.token === '') {
        return res.send({ message: 'Unauthorized' })
    }

    const token = jwt.verify(cookie.token, 'secret')
    return res.status(200).send(token)

}

export default getToken;