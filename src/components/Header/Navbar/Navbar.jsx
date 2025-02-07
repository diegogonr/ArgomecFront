import { Link } from "react-router-dom";
import logo from "../../../assets/images/argomec/logo.png";

const Navbar = () => {
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
                <Link to="/contacts">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Menu Button Section */}
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
          <a href="#" className="kf-menu-btn">
            <span></span>
          </a>
          <Link to="/contacts" className="kf-btn h-btn">
            <span>Contacto</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
