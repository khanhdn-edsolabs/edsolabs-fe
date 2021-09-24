import axios from 'axios';

export const getUsers = async() => {
    return await axios.get("http://localhost:3000/users");
}

export const getStudents = async() => {
    return await axios.get("http://localhost:3000/students");
}