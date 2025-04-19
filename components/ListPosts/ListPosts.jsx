"use client";

import styles from "./ListPosts.module.css";
import { useEffect, useState } from "react";
import { getPosts } from "@/services/posts";
import { Avatar } from "@chakra-ui/react";

const ListPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div className={styles.containerList}>
      {posts == "" ? (
        <p>Nenhum post encontrado</p>
      ) : (
        posts.map((post) => (
          <div 
          className={styles.containerPost}
          key={post.id}
          >
            <div className={styles.postHead}>
              <Avatar.Root>
                <Avatar.Fallback name="Pedro Hilário" />
              </Avatar.Root>
              <h3 className={styles.postName}>Leanne Graham</h3>
              <h4 className={styles.postUser}>@Bret</h4>
            </div>
            <div className={styles.containerContent}>
              <h3 className={styles.contentTitle}>{post.title}</h3>
              <p className={styles.contentBody}>{post.body}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListPost;
