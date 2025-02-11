import services_inner from "../../assets/images/argomec/reparaciones/PortadaServicios.jpg";
import Splitting from "splitting";
import { useEffect } from "react";

const ServicesHeader = () => {
  useEffect(() => {
    Splitting();
  }, []);
  return (
    <section className="section kf-started-inner">
      <div
        className="kf-parallax-bg js-parallax"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${services_inner})`,
          backgroundBlendMode: "darken",
        }}
      ></div>
      <div className="container">
        <h1 className="kf-h-title" data-splitting="chars" data-animate="active">
          Servicios Argomec
        </h1>
      </div>
    </section>
  );
};

export default ServicesHeader;
