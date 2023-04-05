import React from "react";
import data from "./data";

export default function Time() {
    const allTimes = data.time
    const [time, setTime] = React.useState("")


    function timeGenerator() {
        const randomNumber = Math.floor(Math.random() * allTimes.length);
        const randomTime = allTimes[randomNumber];
        setTime(randomTime)
    }

    return (
        <div className="time-section">
            <div className="cards">
                {time}
            </div>
            <button className="buttons" onClick={timeGenerator}>Choose My Time</button>

        </div>
    )
}