
const ContactForm = () => {
  return (
    <section className="section kf-contacts-form">
      <div className="container">
        <div className="kf-reservation-form  scroll-animate" data-animate="active">
          <div className="kf-titles align-center">
            <div className="kf-subtitle">Contáctanos</div>
            <h3 className="kf-title">Enviar mensaje</h3>
          </div>

          <form id="cform" method="post">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-field">
                  <input type="text" name="name" placeholder="Nombre" />
                  <i className="far fa-user"></i>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-field">
                  <input type="email" name="email" placeholder="Email" />
                  <i className="fas fa-at"></i>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="kf-field">
                  <input type="tel" name="tel" placeholder="Número" />
                  <i className="fas fa-mobile-alt"></i>
                </div>
              </div>
              {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="kf-field">
                  <input type="text" name="subject" placeholder="Motivo" />
                </div>
              </div> */}
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="kf-field">
                  <textarea name="message" placeholder="Mensaje"></textarea>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="kf-bts">
                  <button type="submit" className="kf-btn">
                    <span>Enviar Mensaje</span>
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="alert-success" style={{ display: "none" }}>
            <p>Gracias, tu mensaje se ha enviado correctamente.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
