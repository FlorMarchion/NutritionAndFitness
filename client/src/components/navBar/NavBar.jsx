import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navBar.css"
import { useTranslation } from "react-i18next";

const NavBar = () => {
    const { t, i18n } = useTranslation("navbar");
    const location = useLocation();

    return (
        <>
            {
                location.pathname.toString() !== "/" ? <nav>
                    <div className="navegation-container">
                        <ul className="navegation-items-list">
                            <li>
                                <Link className="nav-link" to="/plans">{t("navbar.plans")}</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/guides">{t("navbar.guides")}</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/challenges">{t("navbar.challenges")}</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/home">{t("navbar.home")}</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/me">{t("navbar.me")}</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/vlog">{t("navbar.vlog")}</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/contact">{t("navbar.contact")}</Link>
                            </li>
                            <button onClick={()=> i18n.changeLanguage("es")}>Español</button>
                            <button onClick={()=> i18n.changeLanguage("en")}>English</button>
                        </ul>
                    </div>
                </nav> : null
            }
        </>
    )
}
export default NavBar;