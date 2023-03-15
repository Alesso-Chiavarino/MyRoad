import axios from 'axios';
import { dbConnect } from '@/utils/mongoose';
import Career from '@/models/Career';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

const getCareer = async (req, res) => {

    dbConnect()

    const email = await jwt.verify(req.cookies.token, 'secret').email;

    const user = await User.findOne({ email });

    const career = await Career.find({
        _id: {
            $in: user.careers
        }
    });

    !career && res.status(404).json({ success: false, message: 'Career not found' });

    return res.send(career);

}

export default getCareer;