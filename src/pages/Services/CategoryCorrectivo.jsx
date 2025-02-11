

import serviceCorrectivo1 from "../../assets/images/argomec/servicios/Services_mantenimientoCorrectivo1.jpg"
import serviceCorrectivo2 from "../../assets/images/argomec/servicios/Services_mantenimientoCorrectivo2.jpg"
import serviceCorrectivo3 from "../../assets/images/argomec/servicios/Services_mantenimientoCorrectivo3.jpg"
import serviceCorrectivo4 from "../../assets/images/argomec/servicios/Services_mantenimientoPreventivo4.jpg"

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const categories = [
  { name: "Reparación de Circuitos", image: serviceCorrectivo1 },
  { name: "Cambio de Filtros", image:  serviceCorrectivo2},
  { name: "Sustitución de Piezas", image:  serviceCorrectivo3},
  { name: "Ajuste de Presión", image:  serviceCorrectivo4},
];

const CategoryCorrectivo = () => {
  return (
    <section
      className="section kf-category"
      style={{ backgroundImage: "url(images/category_bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
            <div className="kf-titles">
              <div className="kf-subtitle scroll-animate" data-animate="active">
                Mantenimiento Correctivo
              </div>
              <h3 className="kf-title scroll-animate" data-animate="active">
                Soluciones Rápidas y Eficientes <br /> para tu Máquina de Café
              </h3>
            </div>
            <div className="kf-text scroll-animate" data-animate="active">
              <p>
                Nuestro mantenimiento correctivo resuelve fallas y averías en tu máquina de café, asegurando su óptimo funcionamiento y evitando interrupciones en tu negocio.
              </p>
            </div>
            <a href="/contact" className="kf-btn scroll-animate" data-animate="active">
              <span>Descubre Nuestros Servicios</span>
              <ChevronRightIcon />

            </a>
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default CategoryCorrectivo;