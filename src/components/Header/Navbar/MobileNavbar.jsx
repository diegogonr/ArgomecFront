import React from "react";

const MobileNavbar = () => {
  return (
    <div className="kf-navbar-mobile">
      {/* Mobile Menu */}
      <div className="kf-main-menu">
        <ul>
          <li className="has-children">
            <a href="index.html">Home</a>
            <i className="las la-angle-down"></i>
            <ul>
              <li>
                <a href="index.html">Coffee House</a>
              </li>
              <li>
                <a href="index-2.html">Restaurant</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li className="has-children">
            <a href="menu-coffee.html">Menu</a>
            <i className="las la-angle-down"></i>
            <ul>
              <li>
                <a href="menu-coffee.html">Menu Coffee</a>
              </li>
              <li>
                <a href="menu-restaurant.html">Menu Restaurant</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="#">Pages</a>
            <i className="las la-angle-down"></i>
            <ul>
              <li>
                <a href="services.html">Service</a>
              </li>
              <li>
                <a href="reservation.html">Reservation</a>
              </li>
              <li>
                <a href="history.html">History</a>
              </li>
              <li>
                <a href="team.html">Our Chefs</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="#">Blog</a>
            <i className="las la-angle-down"></i>
            <ul>
              <li>
                <a href="blog-grid.html">Blog Grid</a>
              </li>
              <li>
                <a href="blog.html">Blog Standard</a>
              </li>
              <li>
                <a href="blog-single.html">Blog Single</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="contacts.html">Contacts</a>
          </li>
        </ul>
      </div>

      {/* Mobile Topline */}
      <div className="kf-topline">
        <div className="row">
          {/* Book a Table Button */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a href="reservation.html" className="kf-btn h-btn">
              <span>Book a table</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>

          {/* Social Links */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="kf-h-social">
              <a href="facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="youtube.com" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="kf-h-group">
              <i className="far fa-clock"></i>
              <em>Opening hours:</em> 08:00 am - 09:00 pm
            </div>
          </div>

          {/* Location */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="kf-h-group">
              <i className="fas fa-map-marker-alt"></i>
              <em>Location:</em> 55 Main Street, New York
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
