import axios, { AxiosInstance } from "axios";

const base = 'https://jsonplaceholder.typicode.com'
const http = axios.create({
    baseURL: base
})

export default http;