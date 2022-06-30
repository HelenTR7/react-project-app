import React, {FC} from "react";

import style from './style.module.scss';
import {Link} from "react-router-dom";

const Header:FC = () => (
    <header className={style.header}>
        <nav className={style.nav}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    </header>
)

export default Header;
