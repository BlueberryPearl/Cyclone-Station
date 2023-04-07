import React from "react";
import './Landing.css';
import square from "./Squares1.png"
import pots from "./Glass-pots.png"


export default function LandingPage() {
    return (
        <main className="landing-main">
            <div className="landing-contents">
                <img className="squares" src={square}></img>
                <div className="landing-box">
                    <h1 className="landing-header">Big things often have small beginnings</h1>
                    <p className="landing-paragraph">The first step is the key to obtaining the experience you have longed for. So Take the first step! Go for it my friend.</p>
                    <button className="landing-button">Get started</button>
                </div>
                <img className="pots" src={pots}></img>
            </div>
        </main>
    )
}