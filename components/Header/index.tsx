import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  const { navigation, list, item } = styles;

  return (
    <header>
      <nav className={navigation}>
        <ul className={list}>
          <li className={item}><Link href="/"><a>Home</a></Link></li>
          <li className={item}><Link href="/blog"><a>Blog</a></Link></li>
          <li className={item}><Link href="/users"><a>Users</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}
