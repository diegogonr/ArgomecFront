import serviceIntegral1 from "../../assets/images/argomec/servicios/Services_mantenimientoPreventivo1.jpg"
import serviceIntegral2 from "../../assets/images/argomec/servicios/Services_mantenimientoIntegral2.jpg"
import serviceIntegral3 from "../../assets/images/argomec/servicios/Services_mantenimientoIntegral3.jpg"
import serviceIntegral4 from "../../assets/images/argomec/servicios/Services_mantenimientoIntegral4.jpg"

import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const categories = [
  { name: "Mantenimiento Completo", image:  serviceIntegral1},
  { name: "Limpieza y Descalcificación", image: serviceIntegral2},
  { name: "Revisión y Reparación", image:  serviceIntegral3},
  { name: "Optimización del Sistema", image:  serviceIntegral4},
];

const CategoryIntegral = () => {
  return (
    <section
      className="section kf-category"
      style={{ backgroundImage: "url(images/category_bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="kf-category-items scroll-animate" data-animate="active">
              {categories.map((category, index) => (
                <div key={index} className="kf-category-item">
                  <div className="image kf-image-hover">
                    <a>
                      <img src={category.image} alt={category.name} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{category.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
            <div className="kf-titles">
              <div className="kf-subtitle scroll-animate" data-animate="active">
                Mantenimiento Integral
              </div>
              <h3 className="kf-title scroll-animate" data-animate="active">
                Servicio Completo para <br /> Máquinas de Café
              </h3>
            </div>
            <div className="kf-text scroll-animate" data-animate="active">
              <p>
                Nuestro mantenimiento integral garantiza el máximo rendimiento de tu máquina de café, combinando limpieza, reparación y optimización en un solo servicio.
              </p>
            </div>
            <a href="/contact" className="kf-btn scroll-animate" data-animate="active">
              <span>Descubre Nuestros Servicios</span>
              <ChevronRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryIntegral;