import logo from "../../../assets/images/argomec/logo.png"; 

const Navbar = () => {
  return (
    <div className="kf-navbar">
      <div className="row">
        {/* Logo Section */}
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
          <div className="kf-logo">
            <a href="index.html">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </div>

        {/* Main Menu Section */}
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">
          <div className="kf-main-menu">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">Nosotros</a>
              </li>

              <li>
                <a href="services.html">Servicios</a>
              </li>

              <li>
                <a href="contacts.html">Contacto</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Menu Button Section */}
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
          <a href="#" className="kf-menu-btn">
            <span></span>
          </a>
          <a href="contacts.html" className="kf-btn h-btn">
            <span>Contacto</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
