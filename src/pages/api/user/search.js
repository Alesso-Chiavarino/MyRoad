import User from '@/models/User'

const search = async (req, res) => {

    const { q } = req.query

    if (!q) return res.send({ message: 'No query' })

    const users = await User.find({
        username: { $regex: q, $options: 'i' }
    })

    return res.json(users)

}

export default search