import { api } from "@/api/api";

export function getUsers() {
    return api.get('/users').then(res => res.data);
}

export function getUser(id){
    return api.get(`/users/${id}`).then(res => res.data);
}