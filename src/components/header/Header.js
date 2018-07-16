import React from "react";
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <h1>
                <Link to="/">
                    React Redux Photo Grid
                </Link>
            </h1>
        </div>
    )
}

export default Header;
