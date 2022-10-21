import React from "react"
import styles from "../../../styles/app.module.css"

export default function HomePage({ basket }){
    const [sorted, setSorted] = React.useState("reset")
    const basketAsc = basket && [...basket].sort((a, b) => a.name > b.name ? 1 : -1)
    const basketdesc = basket && [...basket].sort((a, b) => a.name > b.name ? -1 : 1)
    const data = sorted === "reset" && basket ? basket : sorted === "asc" ? basketAsc : sorted === "desc" && basketdesc

    return (
        <div className={styles.container}>
            <div className={styles.sortBar}>
                <button className={styles.sortButton} onClick={() => setSorted("asc")}>
                    a-b
                </button>

                <button className={styles.sortButton} onClick={() => setSorted("desc")}>
                    b-a
                </button>

                <button className={styles.sortButton} onClick={() => setSorted("reset")}>
                    reset
                </button>
            </div>

            <div className={styles.feed} role="feed">
                {data && data.map(fruit => (
                    <article 
                    key={fruit.id} 
                    className={styles.card}
                    style={{ background: fruit.color }}>
                        <div className={styles.cardContainer}>
                            <div className={styles.topText}>
                                <h2>{fruit.qty}</h2>
                            </div>

                            <div className={styles.baseText}>
                                {fruit.name}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}