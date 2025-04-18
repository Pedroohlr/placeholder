'use client'

import styles from './ListPosts.module.css';
import { useEffect, useState } from 'react';
import { getPosts } from '@/services/posts';
import { Avatar } from '@chakra-ui/react';

const ListPost = () =>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts().then(data => setPosts(data))
    },[])

    return (
        <div className={styles.containerPost}>
            <div className={styles.postHead}>
                <Avatar.Root>
                    <Avatar.Fallback name="Pedro Hilário" />
                </Avatar.Root>
                <h3 className={styles.postName}>Leanne Graham</h3>
                <h4 className={styles.postUser}>@Bret</h4>
            </div>
            <div  className={styles.containerContent}>
                <h3 className={styles.contentTitle}>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h3>
                <p className={styles.contentBody}>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto</p>
            </div>
        </div>
    );
}

export default ListPost;