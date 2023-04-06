import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/SavedThemes">Saved Themes</Link>
                </li>
            </ul>
            <button>Login</button>
            <button>Sign Up</button>
        </nav>
    )
}