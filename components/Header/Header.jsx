import Link from 'next/link';
import styles from './Header.module.css';

export const Header = () => {
    return(
        <header className={styles.headerr}>
            <div className={styles.container}>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/posts">Posts</Link>
                    <Link href="/users">Users</Link>
                </nav>
            </div>
        </header>
    );
}