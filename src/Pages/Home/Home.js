import React from "react";

import Time from "../../Components/Time"
import Place from "../../Components/Place";
import Colour from "../../Components/Colour/Colour";
import './Home.css'




export default function Home(props) {






    return (

        <main className="home-main">
            <div className="home-hero">
                <div className="colour-section">
                    <Colour addItem={props.addItem} />
                </div>
                <hr />
                <div className="time-place">
                    <Time />
                    <Place />
                </div>
            </div>
        </main>
    )
}