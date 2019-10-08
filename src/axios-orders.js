import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-bb-cb2a1.firebaseio.com/'
});

export default instance;