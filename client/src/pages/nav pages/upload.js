import axios from "axios";

export const uploadCloudinary = async (file) => {
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("upload_preset", "hostelpgwebsite");
    formdata.append("cloud_name", "djj6yah7c");
    
    try{
        const res = await axios.post("https://api.cloudinary.com/v1_1/djj6yah7c/image/upload", formdata)
        return {publicId: res.data.public_id, url: res.data.secure_url};
    }
    catch(err){
        console.log(err);
    }
}