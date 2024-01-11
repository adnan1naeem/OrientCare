import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import logo from "./../Assets/care-logo.png";
import ArrowRight from '@mui/icons-material/ArrowRight';

function NavBar() {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClick(!click);
  };
  const handleDownloads = () => {
    setClick(!click);
    navigate("/downloads");
  };

  const productArray = [
    {
      productKey: "products",
      productNamme: "MINI SPLIT INVERTER HEAT PUMPS",
    },
    { productKey: "", productNamme: "MULTIZONE INVERTER HEAT PUMPS" },
    {
      productKey: "",
      productNamme: "AIR HANDLER UNIT INVERTER HEAT PUMPS",
    },
    { productKey: "spareParts", productNamme: "SPARE PARTS" },
  ];

  const partnerArray = [
    {
      partnerKey: "become-partner",
      partnerNamme: "Become A Partner",
    },
    {
      partnerKey: "partner-center",
      partnerNamme: "Partner Center",
    },
  ];

  const warrantyArray = [
    {
      warrantyKey: 'miniSplit',
      warrantyNamme: "Mini Split Inverter Heat Pumps",
      warrantyList: [
        { name: "Mini Split InDoor", key: "indoor" },
        { name: "Mini Split OutDoor", key: "outdoor" },
      ],
    },
    {
      warrantyKey: "warranty",
      warrantyNamme: "Multi-Zone Inverter Heat Pumps",
      warrantyList: [{ name: "Multi Zone OutDoor", key: "outdoor" }],
    },
    {
      warrantyKey: "warranty",
      warrantyNamme: "Air Handler Unit Inverter Heat Pumps",
      warrantyList: [
        { name: "Air Handler InDoor", key: "indoor" },
        { name: "Air Handler OutDoor", key: "outdoor" },
      ],
    },
    {
      warrantyKey: "warranty",
      warrantyNamme: "Warranty Registration",
      warrantyList: [],
    },
  ];

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
              <div className="nav-dropdown">
                <NavLink
                  exact
                  to="/products"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Products
                </NavLink>
                {productArray?.length > 0 && (
                  <div className="dropdown-content">
                    {productArray?.map((product) => (
                      <NavLink
                        key={product?.productKey}
                        exact
                        to={`${product.productKey}`}
                        activeClassName="active"
                        className="nav-links-dropDown"
                        onClick={handleClick}
                      >
                        {product?.productNamme}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-dropdown">
                <NavLink
                  exact
                  to="/partners"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Partners
                </NavLink>
                {partnerArray?.length > 0 && (
                  <div className="dropdown-content">
                    {partnerArray?.map((partner) => (
                      <NavLink
                        key={partner?.partnerKey}
                        exact
                        to={`/partners/${partner.partnerKey}`}
                        activeClassName="active"
                        className="nav-links-dropDown"
                        onClick={handleClick}
                      >
                        {partner?.partnerNamme}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-dropdown">
                <NavLink
                  exact
                  to="/warranty"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Warranty
                </NavLink>
                {warrantyArray?.length > 0 && (
                  <div className="dropdown-content">
                    {warrantyArray?.map((warranty) => (
                      <>
                        <NavLink
                          key={warranty?.warrantyKey}
                          exact
                          to={`/${warranty.warrantyKey}`}
                          activeClassName="active"
                          className="nav-links-dropDown"
                          onClick={handleClick}
                        >
                          <div className="warranty-arrow">
                            {warranty?.warrantyNamme}
                            {warranty?.warrantyList &&
                              warranty?.warrantyList.length > 0 && (
                                <ArrowRight />
                              )}
                          </div>
                        </NavLink>
                      </>
                    ))}
                  </div>
                )}
              </div>
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
                <HamburgetMenuOpen />
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
