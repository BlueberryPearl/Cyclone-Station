import React from "react";
import data from "./data";



export default function Place() {
    const allPlaces = data.place
    const [place, setPlace] = React.useState("")


    function placeGenerator() {
        const randomNumber = Math.floor(Math.random() * allPlaces.length);
        const randomPlace = allPlaces[randomNumber];
        setPlace(randomPlace)
    }

    return (
        <div className="place-section">
            <div className="cards">
                {place}
            </div>
            <button className="buttons" onClick={placeGenerator}>Choose My Place</button>

        </div>
    )
}