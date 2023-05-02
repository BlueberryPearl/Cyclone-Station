import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import Logo from './logo.png'
import { ReactComponent as Home } from "./house-solid.svg";
import { ReactComponent as Saved } from "./heart-solid.svg";


export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-pages">
                <li><NavLink to="/"><img className="logo" alt="Logo" src={Logo}></img></NavLink></li>
                <li className="li-home">
                    <NavLink className="NavLink NavLink-home" to="/Home"><p className="menu-text">Home</p><Home className="home-icon" /></NavLink>
                </li>
                <li className="li-savedThemes">
                    <NavLink className="NavLink" to="/SavedThemes"><p className="menu-text">Saved Themes</p><Saved className="saved-icon" /></NavLink>
                </li>
                <li className="menu">
                    <div className="menu-circle"></div>
                    <div className="menu-circle"></div>
                    <div className="menu-circle"></div>
                </li>
            </ul>
            <div className="nav-buttons">
                <button className="nav-button">Login</button>
                <button className="nav-button">Sign Up</button>
            </div>
        </nav>
    )
}