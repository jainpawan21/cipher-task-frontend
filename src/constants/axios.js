import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://6e091d60.ngrok.io'
})

export default instance