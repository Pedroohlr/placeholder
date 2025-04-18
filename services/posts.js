import { api } from "@/api/api";

export async function getPosts() {
    const res = await api.get('/posts');
    return res.data;
}

export async function getPost(id) {
    const res = await api.get(`/posts/${id}`);
    return res.data;
}