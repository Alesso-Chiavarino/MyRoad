import axios from 'axios';
import { dbConnect } from '@/utils/mongoose';
import Career from '@/models/Career';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

const getCareer = async (req, res) => {

    dbConnect()

    const { careerName } = req.query

    if (careerName) {

        try {

            const career = await Career.findById(careerName)

            if (!career) return res.status(404).send('Career not found')

            return res.send(career)

        } catch (err) {
            console.log(err)
            return res.status(500).send('Server error')
        }

    } else {

        try {

            const email = await jwt.verify(req.cookies.token, 'secret').email;

            const user = await User.findOne({ email });

            const career = await Career.find({
                _id: {
                    $in: user.careers
                }
            });

            !career && res.status(404).json({ success: false, message: 'Career not found' });

            return res.send(career);

        } catch (err) {
            console.log(err)
            return res.status(500).send('Server error')
        }

    }



}

export default getCareer;