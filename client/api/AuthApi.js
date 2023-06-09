import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5000' });
const API = axios.create({ baseURL: 'https://cipher-b2m6.onrender.com/' });


export const logIn = (formData) => API.post('/auth/login', formData);
export const signUp = (formData) => API.post('/auth/register', formData);
export const updateUser = (formData) => API.post('/user/update', formData);
export const changePassword = (formData) => API.post('/auth/changePassword', formData);