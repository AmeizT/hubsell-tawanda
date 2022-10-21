import React from "react"
import Head from "next/head"
import HomePage from "../src/features/home"

export default function Home(){
    const [basket, setBasket] = React.useState()

    React.useEffect(() => {
        let data = localStorage.store
        data && setBasket(JSON.parse(localStorage.store))
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>Hub Sell / Tawanda</title>
                <meta name="description" content="Made by Tawanda <seltadigitalstudio@gmail.com>" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HomePage basket={basket} />
        </React.Fragment>
    )
}