import { Link } from "react-router-dom";
import { IconMapPin, IconClockHour4, IconBrandFacebookFilled, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";

const MobileNavbar = ({ setMobileMenuOpen }) => {
  return (
    <div className="kf-navbar-mobile">
      {/* Mobile Menu */}
      <div className="kf-main-menu">
        <ul>
          <li>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          </li>
          <li className="has-children">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>Nosotros</Link>
          </li>
          <li className="has-children">
            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
          </li>
          <li className="has-children">
            <Link to="/contacts" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Topline */}
      <div className="kf-topline">
        <div className="row">
          {/* Book a Table Button */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Link to="/contacts" className="kf-btn h-btn" onClick={() => setMobileMenuOpen(false)}>
              <span>Contacto</span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="kf-h-social">
              <a href="https://www.facebook.com/profile.php?id=61559819350683" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <IconBrandFacebookFilled stroke={2} />
              </a>
              <a href="https://www.instagram.com/argomec.pe/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <IconBrandInstagram stroke={2} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <IconBrandWhatsapp stroke={2} />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="kf-h-group">
              <IconClockHour4 stroke={2} />
              <em>Horario de Atención :</em> 08:00 am - 08:00 pm
            </div>
          </div>

          {/* Location */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="kf-h-group">
              <IconMapPin className="las" stroke={2} />
              <em>Dirección:</em> Jr. León Velarde 630 - Lince
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
