import chooseImg from '../../../assets/images/choose_img.jpg';
import parallaxIcon1 from '../../../assets/images/parallax_icon1.png';
import parallaxIcon2 from '../../../assets/images/parallax_icon2.png';
import parallaxIcon3 from '../../../assets/images/parallax_icon3.png';
import chooseIcon1 from '../../../assets/images/choose_icon1.png';
import chooseIcon2 from '../../../assets/images/choose_icon2.png';

// Datos de la lista "Why Choose Us"
const chooseList = [
  {
    id: 1,
    icon: chooseIcon1,
    name: 'Natural Coffee Beans',
    subname:
      'Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque',
  },
  {
    id: 2,
    icon: chooseIcon2,
    name: '100% ISO Certification',
    subname:
      'Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque',
  },
];

// Componente para cada elemento de la lista
const ChooseItem = ({ icon, name, subname }) => {
  return (
    <li className="element-anim-1 scroll-animate" data-animate="active">
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
          <div className="p-icon" style={{ backgroundImage: `url(${parallaxIcon1})` }}></div>
        </div>
        <div className="kf-parallax-icon pi-2" data-jarallax-element="-80">
          <div className="p-icon" style={{ backgroundImage: `url(${parallaxIcon2})` }}></div>
        </div>
        <div className="kf-parallax-icon pi-3" data-jarallax-element="-40">
          <div className="p-icon" style={{ backgroundImage: `url(${parallaxIcon3})` }}></div>
        </div>

        <div className="row">
          {/* Imagen principal */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="kf-choose-image element-anim-1 scroll-animate" data-animate="active">
              <img src={chooseImg} alt="Choose us" />
            </div>
          </div>

          {/* Texto y lista */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
            <div className="kf-titles">
              <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                Why Choose Us
              </div>
              <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                New London Coffee Founded For Extraordinary Test
              </h3>
            </div>

            <div className="kf-text element-anim-1 scroll-animate" data-animate="active">
              <p>
                Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque
                laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis
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
            <a href="about.html" className="kf-btn element-anim-1 scroll-animate" data-animate="active">
              <span>explore more</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
