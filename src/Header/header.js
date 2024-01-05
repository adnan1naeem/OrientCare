import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import logo from './../Assets/care-logo.png';

function NavBar() {
    const [click, setClick] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {setClick(!click)};
    const handleDownloads = () => {
        setClick(!click)
        navigate("/downloads");
    };

    return (
        <div>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="main-logo" />
            </div>
            <nav className="navbar">
                <div className="nav-container">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/products"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/partners"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Partners
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/warranty"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Warranty
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/downloads"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleDownloads}
                            >
                                Downloads
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {!click ? (
                            <span className="icon">
                                <HamburgetMenuOpen />{" "}
                            </span>
                        ) : (
                            <span className="icon">
                                <HamburgetMenuClose />
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;