import { dbConnect } from '@/utils/mongoose';
import Career from '@/models/Career';

const deleteCareer = async (req, res) => {

    dbConnect()

    const { id } = req.query;

    await Career.findByIdAndDelete(id);

    res.json({ success: true, message: 'Career deleted' });
}


export default deleteCareer;