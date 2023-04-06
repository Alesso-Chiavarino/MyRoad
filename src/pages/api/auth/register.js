import User from '@/models/User'

const register = async (req, res) => {

    const { email, password, name } = req.body
    console.log(req.body)

    try {

        if (!email || !password || !name) {
            return res.status(400).send('Missing fields')
        }

        const avatar_url = `https://robohash.org/${email}`

        const bio = `Hi, I'm ${name}!`

        const user = await User.create({
            email,
            password,
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