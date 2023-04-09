import React from "react";
import Home from "./Pages/Home/Home";
import LandingPage from "./Pages/LandingPage/Landing-page"
import Layout from "./Pages/Layout";
import SavedThemes from "./Pages/SavedThemes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route path="Home" element={<Home />} />
                    <Route path="SavedThemes" element={<SavedThemes />} />
                    <Route path="/" element={<LandingPage />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}