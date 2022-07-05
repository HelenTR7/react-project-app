import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Header from "@components/header";
import Home from "@pages/home";
import About from "@pages/about";

import styles from "./style.module.scss";

const Layout = () => {
    const store = useSelector(store => store);
    const dispatch = useDispatch();

    console.log(store);

    return (
        <>
            <button onClick={() => dispatch({type:'LOAD_DATA'})}>BUTTON</button>
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
