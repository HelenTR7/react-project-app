import React from "react";
import {Route, Routes} from "react-router-dom";

import Header from "@components/header";
import Home from "@pages/home";
import About from "@pages/about";

import styles from "./style.module.scss";

const Layout = () => (
    <>
        <Header/>
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </main>
    </>
);

export default Layout;
