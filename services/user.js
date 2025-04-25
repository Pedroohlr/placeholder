import { isAxiosError } from "axios";
import { api } from "@/api/api";

export async function getUsers() {
    try{
        const res = await api.get('/users');
        return res.data;
    } catch (err) {
        if(isAxiosError(err) && err.response?.status === 404){
            return null
        }

        throw err
    }
}

export async function getUser(id){
    try{
        const res = await api.get(`/users/${id}`);
        return res.data;
    } catch (err) {
        if(isAxiosError(err) && err.response?.status === 404) return null
        throw err
    }
}