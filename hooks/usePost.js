'use client'

import { useState, useEffect, useCallback } from "react";
import { getPosts } from "@/services/posts";

export function usePost() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadPosts = useCallback(async () => {
        setLoading(true);
        setError(null);
        try{
            const data = await getPosts();
            setPosts(data);
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
        }
    }, [])
    
    useEffect(() => {
        loadPosts();
    }, [loadPosts])

    return {posts, loading, error, reload: loadPosts}
}