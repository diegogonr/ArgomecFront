const ContactInfo = () => {
    return (
      <section className="section kf-contacts-info">
        <div className="container">
          <div className="kf-contacts-items row">
            
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div className="kf-contacts-item  scroll-animate" data-animate="active">
                <div className="image">
                  <i className="las la-map-marked-alt"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Dirección</h5>
                  <ul>
                    <li>Jr. León Velarde 630 - Lince, <br />Lima, Perú</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div className="kf-contacts-item  scroll-animate" data-animate="active">
                <div className="image">
                  <i className="las la-envelope-open-text"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Email</h5>
                  <ul>
                    <li>argomecservice@gmail.com <br />www.argomec.com</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div className="kf-contacts-item  scroll-animate" data-animate="active">
                <div className="image">
                  <i className="las la-headset"></i>
                </div>
                <div className="desc">
                  <h5 className="name">Número</h5>
                  <ul>
                    <li> (+51) 939320606</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactInfo;
  