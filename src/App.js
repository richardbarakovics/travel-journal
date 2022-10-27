import React from "react";
import Nav from "./Nav";
import Card from "./Card"
import cardData from "./Data"
import "./style.css"

export default function App() {
    const dataset = cardData.map(data => <Card
        key={data.id}
        {...data}
    />)
    return (
        <div>
            <Nav />
            <container className="card-container">
                {dataset}
            </container>
        </div>
    )
}