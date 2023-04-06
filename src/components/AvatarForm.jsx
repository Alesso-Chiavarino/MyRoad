import axios from 'axios'
import { useState } from 'react'

const AvatarForm = () => {

    const [file, setFile] = useState(null)

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('file', file);
        console.log('hola')
        // return await axios.post('/api/auth/postAvatar', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    console.log(file)

    return (
        <form action="" onSubmit={handleSubmit}>
            <input onChange={handleFile} type="file" name="avatar" />
            <button>Enviar</button>
        </form>
    )
}

export default AvatarForm