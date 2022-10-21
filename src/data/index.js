import { v4 as uuid } from "uuid"

let data = [
    {id: "1020809pm01", name: "bananas", color: "#e9c46a", qty: 1000},
    {id: "1020809pm02", name: "apples", color: "#2a9d8f", qty: 600},
    {id: "1020809pm03", name: "oranges", color: "#e76f51", qty: 800},
    {id: "1020809pm04", name: "strawberries", color: "#e63946", qty: 2000},
    {id: "1020809pm05", name: "guavas", color: "#ffafcc", qty: 500},
    {id: "1020809pm06", name: "berries", color: "#457b9d", qty: 200},
]

export function useData(){
    return data
}