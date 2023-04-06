import React from "react";
import Home from "./Pages/Home";




export default function App() {
    return (
        <div>
            <header>
                <h2 className="quote">Big things often have small beginnings ~</h2>
                <svg height="200" width="100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#D0BFD6" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,149.3C384,171,480,213,576,213.3C672,213,768,171,864,181.3C960,192,1056,256,1152,245.3C1248,235,1344,149,1392,106.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

            </header>
            <main>
                <Home />
            </main>

            <footer>Made by Najette Chouchane</footer>


        </div>

    )
}