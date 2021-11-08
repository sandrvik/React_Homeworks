import React from "react";
import { Link } from "react-router-dom";

import "./Main.css";

export const Main = () => {
    return (
        <div className="main">
            <Link to="/signin">Sign In Form</Link>
            <Link to="/signup">Sign Up Form</Link>
            <Link to="/table">Table</Link>
        </div>
    )
}