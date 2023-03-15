import axios from "axios";

const BASE = 'https://jsonplaceholder.typicode.com/'

export const api = {
    getAllPosts:async () => {
        let response = await axios.get(`${BASE}/albums`)
        return response.data
    }
}