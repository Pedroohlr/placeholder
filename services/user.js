import { api } from "@/api/api";

export async function getUsers() {
    const res = await api.get('/users');
    return res.data
}

export async function getUser(id){
    const res = await api.get(`/users/${id}`);
    return res.data
}