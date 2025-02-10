import axios from 'axios';


const uploadimage = async(image) => {
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","frosh_ecommerce")
    const dataResponse = await axios.post(url,formData)
    return dataResponse
}

export default uploadimage
