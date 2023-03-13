import axios from 'axios';
import { dbConnect } from '@/utils/mongoose';
import Career from '@/models/Career';

const getCareer = async (req, res) => {

    dbConnect()

    const career = await Career.find({});

    !career && res.status(404).json({ success: false, message: 'Career not found' });

    return res.send(career);

}

export default getCareer;