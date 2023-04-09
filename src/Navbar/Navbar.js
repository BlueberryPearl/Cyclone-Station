import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import './Navbar.css';
import Logo from './logo.png'


export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-pages">
                <li><NavLink to="/"><img className="logo" src={Logo}></img></NavLink></li>
                <li className="li-home">
                    <NavLink className="NavLink NavLink-home" to="/Home">Home</NavLink>
                </li>
                <li className="li-savedThemes">
                    <NavLink className="NavLink" to="/SavedThemes">Saved Themes</NavLink>
                </li>
            </ul>
            <div className="nav-buttons">
                <button className="nav-button">Login</button>
                <button className="nav-button">Sign Up</button>
            </div>
        </nav>
    )
}