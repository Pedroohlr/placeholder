'use client'

import './ListPosts.module.css';
import { useEffect, useState } from 'react';
import { getPosts } from '@/services/posts';

const ListPost = () =>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts().then(data => setPosts(data))
    },[])

    console.log(posts)
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
    
}

export default ListPost;