import { v2 as cloudinary } from 'cloudinary'
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '../config'

// Configurations

export const configCloudinary = () => {
    cloudinary.config({
        cloud_name: CLOUDINARY_CLOUD_NAME,
        api_key: CLOUDINARY_API_KEY,
        api_secret: CLOUDINARY_API_SECRET
    });
}

export const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'MyRoad/avatars',
    })
}

export const deleteImage = async (image_id) => {
    return await cloudinary.uploader.destroy(image_id)
}












// Upload

// const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', { public_id: "olympic_flag" })

// res.then((data) => {
//     console.log(data);
//     console.log(data.secure_url);
// }).catch((err) => {
//     console.log(err);
// });


// // Generate 
// const url = cloudinary.url("olympic_flag", {
//     width: 100,
//     height: 150,
//     Crop: 'fill'
// });



// // The output url
// console.log(url);
// // https://res.cloudinary.com/dotaebdx8/image/upload/h_150,w_100/olympic_flag