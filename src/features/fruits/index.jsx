import React from "react"
import { useData } from "../../data"
import styles from "../../../styles/app.module.css"

export default function Fruits(){
    let persisted = []
    const fruits = useData()
    const [basket, setBasket] = React.useState([])
    
    function addToHome(id){
        let data = localStorage.store
        const barn = fruits.find(fruit => fruit.id === id)
        const picked = basket && basket.length >= 1 && basket.find(fruit => fruit.id === id ? true : false)
        console.log(picked)
        persisted = picked ? basket && basket.length >= 1 && basket.map((fruit) => fruit.id === id ? {...barn} : fruit) : [...basket, {...barn}]
        localStorage.store = JSON.stringify(persisted)
        data && setBasket(JSON.parse(localStorage.store))
    }

    return (
        <div className={styles.container}>
            <div className={styles.feed} role="feed">
                {fruits.map(fruit => (
                    <article 
                    key={fruit.id} 
                    className={styles.card}
                    style={{ background: fruit.color }}
                    onClick={() => addToHome(fruit.id)}>
                        <div className={styles.cardContainer}>
                            <div className={styles.topText}>
                                <h2>{fruit.qty}</h2>
                            </div>

                            <div className={styles.baseText}>
                                {fruit.name}
                            </div>

                            <div className={styles.buttonContainer}>
                                <button 
                                className={styles.cardButton}>
                                    add to home
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}