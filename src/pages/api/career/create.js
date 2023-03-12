import Career from '@/models/Career'

const createCareer = async (req, res) => {
    try {

        const { name, description, salary, image, semester } = req.body
        
        const newCareer = await Career.create({
            name,
            description,
            salary,
            image,
            semester
        })

        const savedCareer = await newCareer.save()
        res.status(201).json(savedCareer)

    } catch (err) {
        console.log(err)
    }
}

export default createCareer;