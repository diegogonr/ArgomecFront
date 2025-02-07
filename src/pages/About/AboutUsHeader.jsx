import { useEffect } from "react";
import historyBg from "../../assets/images/argomec/PORTADA/portada1.jpg";
import Splitting from "splitting";

const AboutUsHeader = () => {
  useEffect(() => {
    Splitting();
  }, []);

  return (
    <section className="section kf-started-inner">
      {/* Fondo con efecto parallax */}
      <div
        className="kf-parallax-bg js-parallax"
        style={{ backgroundImage: `url(${historyBg})` }}
      ></div>

      <div className="container">
        {/* Título animado */}
        <h1
          className="kf-h-title"
          data-splitting="chars"
          data-animate="active"
        >
          About Us
        </h1>
      </div>
    </section>
  );
};

export default AboutUsHeader;
