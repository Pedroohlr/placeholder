"use client";

import styles from "./ListPosts.module.css";
import { Avatar, Button } from "@chakra-ui/react";
import { usePost } from "@/hooks/usePost";
import Loading from "../loading/Loading";

const ListPost = () => {
  
  const { posts, loading, error, reload } = usePost();
  
  if(loading) return <Loading />

  if(error) return (
    <div>
        <p>Erro ao carregar: {error.mensage}</p>
        <button onClick={reload}>Tentar novamente</button>
    </div>
  )  
  
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
            <Button 
              className={styles.comments}
            >
              Ver comentários
            </Button>
          </div>
        ))
      )}
    </div>
  );
};

export default ListPost;
