import React from "react"
import Icon from "./images/world-icon.png"

export default function Nav() {
    return(
    <nav>
        <img src={Icon} alt="" className="icon"/>
        <h1>my travel journal.</h1>
    </nav>
    )
}