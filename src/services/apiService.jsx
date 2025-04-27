import axios from 'axios';
// Create an Axios instance (good for centralized config)
const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
      'Content-Type': 'application/json',
    },
});

// Service method to get users
export const getUsers = async() => {
    const response = await apiClient.get('/users');
    return response.data;
};