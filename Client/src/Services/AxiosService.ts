import Axios from "axios";

export const api = Axios.create({
    baseURL: "", // URL of your Express server
    timeout: 8000
})