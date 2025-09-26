import apiClient from "../api/axios";

export const registerUser = async(formData : {
    username : string;
    fullName:string;
    email:string;
    password:string;
    confirmPassword:string;
}) => {
    try {
        const response = await apiClient.post("/users/register", formData);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const loginUser = async(formData:{
    email:string;
    password:string;
}) => {
    try {
        const response = apiClient.post("/users/register",formData);
        return (await response).data;
    } catch (error) {
        console.log(error)
    }
}