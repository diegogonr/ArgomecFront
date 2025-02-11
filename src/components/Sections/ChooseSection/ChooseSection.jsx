import chooseImg from "../../../assets/images/argomec/reparaciones/reparacion1.jpg";
import parallaxIcon1 from "../../../assets/images/argomec/icons/cafe/parallax_icon1.png";
import parallaxIcon2 from "../../../assets/images/argomec/icons/cafe/parallax_icon2.png";
import parallaxIcon3 from "../../../assets/images/argomec/icons/cafe/parallax_icon3.png";
import chooseIcon1 from "../../../assets/images/argomec/icons/trabajador.png";
import chooseIcon2 from "../../../assets/images/argomec/icons/revision-de-documento.png";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Datos de la lista "Why Choose Us"
const chooseList = [
  {
    id: 1,
    icon: chooseIcon1,
    name: "Reparación Profesional",
    subname:
      "Solucionamos cualquier problema en tu máquina de café con repuestos originales y garantía.",
  },
  {
    id: 2,
    icon: chooseIcon2,
    name: "Mayor vida útil, mejor desempeño",
    subname:
      "Prolonga la vida útil de tu equipo con nuestras revisiones técnicas especializadas.",
  }
];

// Componente para cada elemento de la lista
const ChooseItem = ({ icon, name, subname }) => {
  return (
    <li className="scroll-animate">
      <div className="icon">
        <img src={icon} alt={name} />
      </div>
      <div className="desc">
        <h5 className="name">{name}</h5>
        <div className="subname">{subname}</div>
      </div>
    </li>
  );
};

// Componente principal para la sección "Choose"
const ChooseSection = () => {
  return (
    <section className="section kf-choose section-bg">
      <div className="container">
        {/* Iconos de parallax */}
        <div className="kf-parallax-icon pi-1" data-jarallax-element="-60">
          <div
            className="p-icon"
            style={{ backgroundImage: `url(${parallaxIcon1})` }}
          ></div>
        </div>
        <div className="kf-parallax-icon pi-2" data-jarallax-element="-80">
          <div
            className="p-icon"
            style={{ backgroundImage: `url(${parallaxIcon2})` }}
          ></div>
        </div>
        <div className="kf-parallax-icon pi-3" data-jarallax-element="-40">
          <div
            className="p-icon"
            style={{ backgroundImage: `url(${parallaxIcon3})` }}
          ></div>
        </div>

        <div className="row">
          {/* Imagen principal */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div
              className="kf-choose-image"
              data-animate="active"
            >
              <img src={chooseImg} alt="Choose us" />
            </div>
          </div>

          {/* Texto y lista */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
            <div className="kf-titles">
              <div
                className="kf-subtitle"
                data-animate="active"
              >
                ¿Por qué elegirnos?
              </div>
              <h3
                className="kf-title"
                data-animate="active"
              >
                Expertos en reparación de máquinas de café para un rendimiento
                excepcional
              </h3>
            </div>

            <div
              className="kf-text"
              data-animate="active"
            >
              <p>
                Contamos con años de experiencia en la reparación y
                mantenimiento de máquinas de café, asegurando que cada equipo
                funcione a la perfección para brindar el mejor sabor en cada
                taza.
              </p>
            </div>

            {/* Lista dinámica */}
            <div className="kf-choose-list">
              <ul>
                {chooseList.map((item) => (
                  <ChooseItem
                    key={item.id}
                    icon={item.icon}
                    name={item.name}
                    subname={item.subname}
                  />
                ))}
              </ul>
            </div>

            {/* Botón */}
            <a
              href="/about"
              className="kf-btn"
              data-animate="active"
            >
              <span>Descubre más</span>
              <ChevronRightIcon />

            {/* <i className="fas fa-chevron-right"></i> */}

            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
