import Career from '../../../models/Career';
import { dbConnect } from '@/utils/mongoose';

const updateCareer = async (req, res) => {

    dbConnect();

    const { id } = req.query;
    const { name, description, img, salary, semesters } = req.body;
    try {
        const career = await Career.findByIdAndUpdate(id, {
            name,
            description,
            img,
            salary,
            semesters,
        }, { new: true });
        res.status(200).json(career);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

export default updateCareer;