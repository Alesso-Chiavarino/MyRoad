import Career from '@/models/Career'
import User from '@/models/User'
import { dbConnect } from '@/utils/mongoose'
import jwt from 'jsonwebtoken'

const createCareer = async (req, res) => {

    try {

        dbConnect()

        const { name, description, salary, image, semesters } = req.body

        const newCareer = await Career.create({
            name,
            description,
            salary,
            image,
            semesters
        })

        const email = await jwt.verify(req.cookies.token, 'secret').email

        // const user = await User.findOne({ email })

        const updatedUser = await User.findOneAndUpdate({ email }, {
            $push: {
                careers: newCareer._id
            }
        }, { new: true })

        console.log(updatedUser)

        res.status(201).json(updatedUser)

    } catch (err) {
        console.log(err)
    }
}

export default createCareer;