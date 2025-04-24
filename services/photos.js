import { api } from "@/api/api";

export async function getComments(id) {
    const res = await api.get(`/posts/${id}/comments`);
    return res.data;
}