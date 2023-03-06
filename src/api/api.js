import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://wpjwpqs74c.execute-api.ap-south-1.amazonaws.com/prod/projects'
})

export const baseImageUrl = 'https://s3-mern-demo.s3.ap-south-1.amazonaws.com'


export const getProjects = async() => {
    const response = await axiosInstance.get('https://wpjwpqs74c.execute-api.ap-south-1.amazonaws.com/prod/projects')
    return response.data
}

export const getProjectType = async(type) =>{
    const response = await axiosInstance.put('https://wpjwpqs74c.execute-api.ap-south-1.amazonaws.com/prod/projects',{type:type})
    return response.data
}