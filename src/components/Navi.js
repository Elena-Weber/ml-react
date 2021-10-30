import React from 'react';
import { NavLink } from 'react-router-dom';

const Navi = () => {

    // navigation links
    return (
        <div className="navi">
            <NavLink to="/">Main page</NavLink>
            <NavLink to="/all_quotes">All quotes</NavLink>
        </div>
    )
}

export default Navi;