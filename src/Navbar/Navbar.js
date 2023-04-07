import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import './Navbar.css';
export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-pages">
                <li className="nav-home">
                    <NavLink className="NavLink NavLink-home" to="/Home">Home</NavLink>
                </li>
                <li>
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