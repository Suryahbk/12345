import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";

function Root() {
    return (
        <Routes>
            <Route index path="/" element={<Login />} />
        </Routes>
    )
};

export default Root;