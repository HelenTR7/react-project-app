import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import Layout from "@components/layout";
import store from "@store/index";

const container = document.getElementById("root");
const root = createRoot(container!);

//React.StrictMode - вызывает рендер два раза
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Layout />
        </Provider>
    </BrowserRouter>
);
