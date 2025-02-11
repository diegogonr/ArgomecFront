import servicePreventivo1 from "../../assets/images/argomec/servicios/Services_mantenimientoPreventivo1.jpg"
import servicePreventivo2 from "../../assets/images/argomec/servicios/Services_mantenimientoPreventivo2.jpg"
import servicePreventivo3 from "../../assets/images/argomec/servicios/Services_mantenimientoPreventivo3.jpg"
import servicePreventivo4 from "../../assets/images/argomec/servicios/Services_mantenimientoPreventivo4.jpg"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const categories = [
  { name: "Limpieza Profunda", image: servicePreventivo1 },
  { name: "Descalcificación", image: servicePreventivo2},
  { name: "Revisión de Componentes",image: servicePreventivo3},
  { name: "Optimización del Rendimiento", image: servicePreventivo4},
];

const CategoryPreventivo = () => {
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
                Mantenimiento Preventivo
              </div>
              <h3 className="kf-title scroll-animate" data-animate="active">
                Mantén tus Máquinas de Café <br /> en Óptimas Condiciones
              </h3>
            </div>
            <div className="kf-text scroll-animate" data-animate="active">
              <p>
                Nuestros servicios de mantenimiento preventivo aseguran que tu máquina de café funcione sin problemas, prolongando su vida útil y garantizando la mejor calidad en cada taza.
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

export default CategoryPreventivo;
