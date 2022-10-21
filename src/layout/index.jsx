import React from "react"
import Header from "./header"
import Content from "./content"
import SideBar from "./sidebar"

export default function Layout({children}){
    return (
        <React.Fragment>
            <Header />
            <SideBar />
            <Content>{children}</Content>
        </React.Fragment>
    )
}