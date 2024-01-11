import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/plans">Planes</Link>
                </li>
                <li>
                    <Link to="/guides">Guías</Link>
                </li>
                <li>
                    <Link to="/challenges">Retos</Link>
                </li>
                <li>
                    <Link to="/home">Giuliana Marchiondelli</Link>
                </li>
                <li>
                    <Link to="/me">¿Quién soy?</Link>
                </li>
                <li>
                    <Link to="/vlog">Vlog</Link>
                </li>
                <li>
                    <Link to="/contact">Contáctame</Link>
                </li>
            </ul>
        </nav>

    )

}
export default NavBar;