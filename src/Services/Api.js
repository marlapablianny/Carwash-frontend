import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.1.10:3000/'
    //baseURL: 'http://192.168.0.104:3000/'
});



export default api;