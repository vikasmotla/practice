import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouterOne from "./RouterOne";
import RouterTwo from "./RouterTwo";

const RouterConcept = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<RouterOne />} />
                <Route  path="/two" element={<RouterTwo />} />
            </Routes>
        </BrowserRouter>
    );
};

export default React.memo(RouterConcept);