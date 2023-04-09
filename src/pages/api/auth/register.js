import User from '@/models/User'
import { dbConnect } from '@/utils/mongoose'

const register = async (req, res) => {

    dbConnect()

    const { email, password, name, username } = req.body
    console.log(req.body)

    try {

        const avatar_url = {
            url: `https://robohash.org/${email}`,
            public_id: 'default'
        }

        const bio = `Hi, I'm ${name}!`

        if (!email || !password || !name || !username || !avatar_url || !bio) {
            return res.status(400).send('Missing fields')
        }

        const user = await User.create({
            email,
            password,
            username,
            avatar_url,
            bio,
            name
        })

        const userSaved = await user.save();

        return res.send(userSaved)

    } catch (err) {
        console.log(err)
    }

}

export default register;