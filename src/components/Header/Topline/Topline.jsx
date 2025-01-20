
const Topline = () => {
  return (
    <div className="kf-topline">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <div className="kf-h-group">
            <i className="far fa-clock iconMarginRigth"></i>
            <em>Horario de Atención :</em> 08:00 am - 08:00 pm
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center">
          <div className="kf-h-social">
            <a
              href="https://www.facebook.com/profile.php?id=61559819350683"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a> */}
            <a
              href="https://www.instagram.com/argomec.pe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">
          <div className="kf-h-group">
            <i className="fas fa-map-marker-alt iconMarginRigth"></i>
            <em>Dirección :</em>  Jr. León Velarde 630 - Lince
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topline;
