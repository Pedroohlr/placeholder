import ListPost from "@/components/ListPosts/ListPosts";
import styles from './Post.module.css';

export default function Posts() {
    return(
        <div className={styles.container}>
            <h1>Feed de postagens</h1>
            <ListPost />
        </div>
    );
}