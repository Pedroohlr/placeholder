import axios from "axios";
import { API_BASE } from "@/config/urls";

export const api = axios.create({
    baseURL: API_BASE,
    timeout: 5000,
})