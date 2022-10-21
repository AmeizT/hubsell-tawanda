import styles from "../../../styles/app.module.css"
import Link from "next/link"

export default function Header(){
    const menu = [
        {name: "Page 1", link: "/page/1"},
        {name: "Page 2", link: "/page/2"},
    ]

    return (
        <header className={styles.appbar} role="menu">
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li>
                            <Link href="/" passHref>
                                <a className={styles.navLink}>
                                    HUB SELL
                                </a>
                            </Link>
                        </li>
                    </ul>

                    <ul className={styles.list}>
                        {menu.map((menu, i) => (
                            <li key={i} role="listitem">
                                <Link href={menu.link} passHref>
                                    <a className={styles.navLink}>{menu.name}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}