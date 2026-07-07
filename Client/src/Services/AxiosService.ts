import Axios from "axios";

export const api = Axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL, // URL of your Express server
    timeout: 8000
})