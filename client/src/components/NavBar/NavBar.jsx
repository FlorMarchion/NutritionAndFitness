import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navBar.css"

const NavBar = () => {
    const location = useLocation();

    return (
        <>
            {
                location.pathname.toString() !== "/" ? <nav>
                    <div className="navegation-container">
                        <ul className="navegation-items-list">
                            <li>
                                <Link className="nav-link" to="/plans">Planes</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/guides">Guías</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/challenges">Retos</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/home">Giuliana Marchiondelli</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/me">¿Quién soy?</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/vlog">Vlog</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/contact">Contáctame</Link>
                            </li>
                        </ul>
                    </div>
                </nav> : null
            }
        </>
    )
}
export default NavBar;