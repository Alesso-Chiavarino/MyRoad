import { dbConnect } from '@/utils/mongoose';
import Career from '@/models/Career';

const getCareer = async (req, res) => {

    const { careerName } = req.query

    try {

        if (!careerName) return res.status(400).send('Missing fields')

        dbConnect()

        const career = await Career.findById(careerName)

        if (!career) return res.status(404).send('Career not found')

        res.send(career)

    } catch (err) {
        console.log(err)
        return res.status(500).send('Server error')
    }
}

export default getCareer;