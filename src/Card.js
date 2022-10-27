import React from "react";
import MapIcon from "./images/map-icon.png"

export default function Card(props) {
    return (
        <div>
            {props.id && <article className="card">
                <img src={props.imageUrl} alt="" />
                <div>
                    <p><img src={MapIcon} alt="" className="map-icon" /><span className="location">{props.location}</span><a className="googlemaps-link" href={props.googleMapsLink}>View on Google Maps</a></p>
                    <h1 className="title">{props.title}</h1>
                    <p className="dates"><span className="start-date">{props.startDate}</span> - <span className="end-date">{props.endDate}</span></p>
                    <p className="description">{props.description}</p>
                </div>
            </article>}
        </div>
    )
}