import React from "react"
import { useData } from "../../data/cars"
import styles from "../../../styles/app.module.css"

export default function Cars(){
    let persisted = []
    const cars = useData()
    const [basket, setBasket] = React.useState([])
    
    function addToHome(id){
        let data = localStorage.store
        const barn = cars.find(car => car.id === id)
        const picked = basket && basket.length >= 1 && basket.find(car => car.id === id ? true : false)
        console.log(picked)
        persisted = picked ? basket && basket.length >= 1 && basket.map((car) => car.id === id ? {...barn} : car) : [...basket, {...barn}]
        localStorage.store = JSON.stringify(persisted)
        data && setBasket(JSON.parse(localStorage.store))
    }

    return (
        <div className={styles.container}>
            <div className={styles.feed} role="feed">
                {cars.map(car => (
                    <article 
                    key={car.id} 
                    className={styles.card}
                    style={{ background: car.color }}
                    onClick={() => addToHome(car.id)}>
                        <div className={styles.cardContainer}>
                            <div className={styles.topText}>
                                <h2>{car.qty}</h2>
                            </div>

                            <div className={styles.baseText}>
                                {car.name}
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