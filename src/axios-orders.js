import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-adb3b.firebaseio.com/'
});

export default instance;