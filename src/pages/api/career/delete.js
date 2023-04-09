import { dbConnect } from '@/utils/mongoose';
import Career from '@/models/Career';
import User from '@/models/User';

const deleteCareer = async (req, res) => {

    dbConnect()

    const { id } = req.query;

    if (id) {
        try {
            const user = await User.find({ careers: id });
            if (user.length > 0) {
                const updatedUser = await User.findByIdAndUpdate(user[0]._id, { careers: [] });
            }
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error deleting career' });
        }
        finally {
            await Career.findByIdAndDelete(id);
            return res.json({ success: true, message: 'Career deleted' });
        }
    } else {
        return res.status(400).json({ message: 'No id provided' });
    }

}


export default deleteCareer;