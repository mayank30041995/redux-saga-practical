import axios from 'axios';

export const loadUsersApi = async () =>
    await axios.get('http://localhost:5000/users');

export const createUserApi = async (user) =>
    await axios.post('http://localhost:5000/users', user);

    export const loadPostApi = async () =>
    await axios.get('https://jsonplaceholder.typicode.com/posts');