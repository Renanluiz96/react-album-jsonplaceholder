import axios, { AxiosInstance } from "axios";

const base = 'https://jsonplaceholder.typicode.com'
export const http = axios.create({
    baseURL: base
})