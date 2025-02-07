import logo from "../../assets/images/argomec/logo/logo.png"; 
import reparacion1 from '../../assets/images/argomec/reparaciones/1.jpg'
import reparacion2 from '../../assets/images/argomec/reparaciones/2.jpg'
import reparacion3 from '../../assets/images/argomec/reparaciones/3.jpg'
import reparacion4 from '../../assets/images/argomec/reparaciones/4.jpg'
import reparacion5 from '../../assets/images/argomec/reparaciones/5.jpg'
import reparacion6 from '../../assets/images/argomec/reparaciones/6.jpg'
import "lightbox2/dist/css/lightbox.css";
import "lightbox2";
import { IconMapPin } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconPhone } from '@tabler/icons-react';
const Footer = () => {
  return (
    <div className="kf-footer">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-logo">
              <a href="index.html">
                <img src={logo} alt="Logo" />
              </a>
            </div>
          </div>

          {/* Working Hours Section */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-f-hours">
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
            <div className="kf-f-contact">
              <h5>Contacto</h5>
              <ul>
                <li>
                  {/* <i className="las la-map-marker"></i> */}
                  <IconMapPin className="las" stroke={2} />
                  <div>
                  <em>Dirección :</em>
                  Jr. León Velarde 630 - Lince
                  </div>
                </li>
                <li>
                  {/* <i className="las la-envelope-open-text"></i> */}
                  <IconMail className="las la-envelope-open-text" stroke={2} />
                  <div>
                  <em>E-mail:</em>
                  argomecservice@gmail.com
                  </div>
                </li>
                <li>
                  {/* <i className="las la-phone"></i> */}
                  <IconPhone  className="las la-phone" stroke={2} />
                  <em>Número:</em>
                  939320606
                </li>
              </ul>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <div className="kf-f-gallery">
              <h5>Galería</h5>
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
            <div className="kf-copyright">
              Copyright © 2025 Argomec. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
