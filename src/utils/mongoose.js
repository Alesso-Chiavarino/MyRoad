import { connect, connection } from "mongoose";
import { MONGODB_URI } from "../config";

let isConnnected = 0

export const dbConnect = async () => {

    if (isConnnected === 1) {
        return
    }

    const db = await connect(MONGODB_URI)
    isConnnected = db.connections[0].readyState
    console.log(db?.connection?.db?.databaseName)
}

// connection.on('connected', () => {
//     console.log('connected')
// })

// connection.on('error', (err) => {
//     console.log(err)
// })
