import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

    return (
        <>
            {
                location.pathname.toString() !== "/" ? <nav>
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
                </nav> : null
            }


        </>

    )

}
export default NavBar;