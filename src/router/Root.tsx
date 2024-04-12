import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

function Root() {
    return (
        <Routes>
            <Route index path="/" element={<Login />} />
            <Route index path="/home" element={<Home />} />
        </Routes>
    )
};

export default Root;