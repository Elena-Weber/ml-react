import React from 'react';
import { NavLink } from 'react-router-dom';

const Navi = () => {

    // navigation links
    return (
        <div className="navi"><h1>Navi</h1>
            <NavLink to="/">All quotes </NavLink>|
            <NavLink to="/random">Random</NavLink>
        </div>
    )
}

export default Navi;