import User from '@/models/User'

const register = async (req, res) => {

    const { email, password, name } = req.body
    console.log(req.body)

    try {

        const user = await User.create({
            email,
            password,
            name
        })

        const userSaved = await user.save();
    
        return res.send(userSaved)

    } catch(err) {
        console.log(err)
    }

}

export default register;