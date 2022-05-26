import axios from "axios";

// backend url
const API_URL = axios.create({
    baseURL: "http://localhost:1003"
})

export default API_URL;