// import jwt from 'jsonwebtoken';

const getToken = (req, res) => {
    
    const cookie = req.cookies;

    // const token = jwt.verify(cookie.token, 'secret')

    res.send(cookie)
}

export default getToken;