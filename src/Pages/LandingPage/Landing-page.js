import React from "react";
import './Landing.css';
import square from "./Squares1.png"
import pots from "./Glass-pots.png"
import { NavLink } from "react-router-dom";

export default function LandingPage() {
    return (
        <main className="landing-main">
            <div className="landing-contents">
                <img className="squares" src={square}></img>
                <div className="landing-box">
                    <h1 className="landing-header">Big things often have small beginnings</h1>
                    <p className="landing-paragraph">The first step is the key to obtaining the experience you have longed for. So Take the first step! Go for it my friend.</p>
                    <NavLink to="/home" className="landing-button">Get started</NavLink>
                </div>
                <img className="pots" src={pots}></img>
            </div>
        </main>
    )
}