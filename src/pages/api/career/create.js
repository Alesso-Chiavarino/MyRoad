import Career from '@/models/Career'
import { dbConnect } from '@/utils/mongoose'

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

        res.status(201).json(newCareer)

    } catch (err) {
        console.log(err)
    }
}

export default createCareer;