import { dbConnect } from "@/utils/mongoose"
import Career from "@/models/Career"
import User from "@/models/User"
import jwt from 'jsonwebtoken'

const createCalifaction = async (req, res) => {

    dbConnect()

    const email = await jwt.verify(req.cookies.token, 'secret').email

    const { calification } = req.body

    
    const user = await User.find({ email })

    // const career = await Career.findById()
    
    return res.send(user)

}

export default createCalifaction;