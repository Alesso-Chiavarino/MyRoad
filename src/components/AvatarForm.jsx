// import axios from 'axios'
// import { useState, useEffect } from 'react'

// const AvatarForm = () => {

//     const [file, setFile] = useState(null)
//     const [image, setImage] = useState({})
//     const [isLoading, setIsLoading] = useState(true)
//     const handleFile = (e) => {
//         setFile(e.target.files[0])
//     }

//     useEffect(() => {
//         const postImage = async () => {
//             if (image && isLoading === false) {
//                 console.log('ta')
//                 console.log(image)
//                 try {
//                     const res = await axios.post('/api/auth/postAvatar', { image })
//                     console.log(res)
//                 } catch (err) {
//                     console.log(err)
//                 }
//             }
//         }
//         postImage()
//     }, [image, isLoading])

//     const mandate = async (e) => {
//         e.preventDefault()
//         try {
//             setIsLoading(true)
//             const formData = new FormData()
//             formData.append('file', file)
//             formData.append('upload_preset', 'myroad')
//             const res = await axios.post('https://api.cloudinary.com/v1_1/dotaebdx8/image/upload', formData)
//             console.log(res.data)
//             setImage(res.data)
//         }
//         catch (err) {
//             console.log(err)
//         }
//         finally {
//             setIsLoading(false)
//         }

//     }

//     return (
//         <form onSubmit={updateImage}>
//             <input onChange={handleFile} type="file" name="file" />
//             <button>Submit</button>
//         </form>
//     )
// }

// export default AvatarForm