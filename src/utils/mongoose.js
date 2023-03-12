import { connect, connection } from "mongoose";

const conn = {
    isConnnected: false
}

export const dbConnect = async () => {

    if (conn.isConnnected) {
        return
    }

    const db = await connect('mongodb+srv://alesso-chiavarino:TheAlexOMG14@cluster0.md2ra5z.mongodb.net/myRoadDB?retryWrites=true&w=majority')
    conn.isConnnected = db.connections[0].readyState
    console.log(db.connection.db.databaseName)
}

connection.on('connected', () => {
    console.log('connected')
})

connection.on('error', (err) => {
    console.log(err)
})
