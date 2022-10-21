import { v4 as uuid } from "uuid"

let data = [
    {id: "1021809am01", name: "mercedes", color: "#e9c46a", qty: 10},
    {id: "1021809am02", name: "ford", color: "#2a9d8f", qty: 6},
    {id: "1021809am03", name: "toyota", color: "#e76f51", qty: 8},
    {id: "1021809am04", name: "bmw", color: "#e63946", qty: 20},
]

export function useData(){
    return data
}