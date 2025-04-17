import { api } from "@/api/api";

export function getPosts() {
    return api.get('/posts').then(res => res.data);
}

export function getPost(id) {
    return api.get(`/posts/${id}`).then(res => res.data);
}