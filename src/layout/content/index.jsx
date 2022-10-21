import styles from "../../../styles/app.module.css"

export default function Content({children}){
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}