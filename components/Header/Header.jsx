import Link from 'next/link';
import styles from './Header.module.css';

export const Header = () => {
    return(
        <header className={styles.headerr}>
            <div className={styles.container}>
                <nav>
                    <Link className={styles.itemNav} href="/">Home</Link>
                    <Link className={styles.itemNav} href="/posts">Posts</Link>
                    <Link className={styles.itemNav} href="/users">Users</Link>
                </nav>
            </div>
            <div className={styles.divisor}></div>
        </header>
    );
}