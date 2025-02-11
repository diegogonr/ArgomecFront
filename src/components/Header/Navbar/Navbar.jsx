import { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../../../assets/images/argomec/logo/logo.png";
import MobileNavbar from "./MobileNavbar";
import { IconMenuDeep } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="kf-navbar">
      <div className="row">
        {/* Logo Section */}
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
          <div className="kf-logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
        </div>

        {/* Main Menu Section */}
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">
          <div className="kf-main-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Nosotros</Link>
              </li>
              <li>
                <Link to="/services">Servicios</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Menu Button Section */}
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
          <button 
            className="kf-menu-btn button-navbarMobile"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <IconX stroke={2} />
            ) : (
              <IconMenuDeep stroke={2} />
            )}
            <span></span>
          </button>

          <Link to="/contact" className="kf-btn h-btn">
            <span>Contacto</span>
          </Link>
        </div>
      </div>
      {mobileMenuOpen && (
        <MobileNavbar setMobileMenuOpen={setMobileMenuOpen}></MobileNavbar>
      )}
    </div>
  );
};

export default Navbar;
