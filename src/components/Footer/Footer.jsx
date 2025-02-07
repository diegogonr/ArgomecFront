import logo from "../../assets/images/argomec/LOGO/logo.png"; 
import reparacion1 from '../../assets/images/argomec/REPARACIONES/1.jpg'
import reparacion2 from '../../assets/images/argomec/REPARACIONES/2.jpg'
import reparacion3 from '../../assets/images/argomec/REPARACIONES/3.jpg'
import reparacion4 from '../../assets/images/argomec/REPARACIONES/4.jpg'
import reparacion5 from '../../assets/images/argomec/REPARACIONES/5.jpg'
import reparacion6 from '../../assets/images/argomec/REPARACIONES/6.jpg'
import "lightbox2/dist/css/lightbox.css";
import "lightbox2";

const Footer = () => {
  return (
    <div className="kf-footer">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-logo element-anim-1 scroll-animate" data-animate="active">
              <a href="index.html">
                <img src={logo} alt="Logo" />
              </a>
            </div>
          </div>

          {/* Working Hours Section */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-f-hours element-anim-1 scroll-animate" data-animate="active">
              <h5>Horario de Atención</h5>
              <ul>
                <li>
                  Lunes - Sábado <em>08:00 am - 08:00 pm</em>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-f-contact element-anim-1 scroll-animate" data-animate="active">
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <i className="las la-map-marker"></i>
                  <em>Dirección :</em>
                  Jr. León Velarde 630 - Lince
                </li>
                <li>
                  <i className="las la-envelope-open-text"></i>
                  <em>E-mail:</em>
                  argomecservice@gmail.com
                </li>
                <li>
                  <i className="las la-phone"></i>
                  <em>Número:</em>
                  939320606
                </li>
              </ul>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-f-gallery element-anim-1 scroll-animate" data-animate="active">
              <h5>Gallery</h5>
              <ul>
                <li>
                  <a href={reparacion1} data-lightbox="gallery" className="kf-image-hover has-popup-image">
                    <img src={reparacion1} alt="Gallery Image 1" />
                  </a>
                </li>
                <li>
                  <a href={reparacion2} data-lightbox="gallery" className="kf-image-hover has-popup-image">
                    <img src={reparacion2} alt="Gallery Image 2" />
                  </a>
                </li>
                <li>
                  <a href={reparacion3} data-lightbox="gallery" className="kf-image-hover has-popup-image">
                    <img src={reparacion3} alt="Gallery Image 3" />
                  </a>
                </li>
                <li>
                  <a href={reparacion4} data-lightbox="gallery" className="kf-image-hover has-popup-image">
                    <img src={reparacion4} alt="Gallery Image 4" />
                  </a>
                </li>
                <li>
                  <a href={reparacion5} data-lightbox="gallery" className="kf-image-hover has-popup-image">
                    <img src={reparacion5} alt="Gallery Image 5" />
                  </a>
                </li>
                <li>
                  <a href={reparacion6} data-lightbox="gallery" className="kf-image-hover has-popup-image">
                    <img src={reparacion6} alt="Gallery Image 6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
            <div className="kf-copyright element-anim-1 scroll-animate" data-animate="active">
              Copyright © 2025 Argomec. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
