import React from "react";
import Home from "./Pages/Home";
import LandingPage from "./Pages/Landing-page";
import Layout from "./Pages/Layout";
import SavedThemes from "./Pages/SavedThemes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="Home" element={<Home />} />
                    <Route path="LandingPage" element={<LandingPage />} />
                    <Route path="SavedThemes" element={<SavedThemes />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}