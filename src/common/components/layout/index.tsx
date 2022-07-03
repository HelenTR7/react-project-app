import React from "react";
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import store from "@store/index";
import Header from "@components/header";
import Home from "@pages/home";
import About from "@pages/about";

import styles from "./style.module.scss";

const Layout = () => {
    const store = useSelector(store => store);

    console.log(store);

    return (
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
}

export default Layout;
