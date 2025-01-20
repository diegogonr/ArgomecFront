import menuBg from '../../../assets/images/category_bg.jpg';
import menuLogo from '../../../assets/images/menu_logo.png';
import menu1 from '../../../assets/images/menu1.jpg';
import menu2 from '../../../assets/images/menu2.jpg';
import menu3 from '../../../assets/images/menu3.jpg';
import menu4 from '../../../assets/images/menu4.jpg';
import menu5 from '../../../assets/images/menu5.jpg';
import menu6 from '../../../assets/images/menu6.jpg';

// Datos del menú
const menuItems = [
  {
    id: 1,
    image: menu1,
    name: 'Americano Coffee',
    subname: '2/3 espresso, 1/3 steamed milk',
    price: '$4.9',
  },
  {
    id: 2,
    image: menu2,
    name: 'Espresso Coffee',
    subname: '2/3 espresso, 1/3 steamed milk',
    price: '$4.9',
  },
  {
    id: 3,
    image: menu3,
    name: 'Barista Pouring Syrup',
    subname: '2/3 espresso, 1/3 steamed milk',
    price: '$3.5',
  },
  {
    id: 4,
    image: menu4,
    name: 'Cold - Coffee',
    subname: '2/3 espresso, 1/3 steamed milk',
    price: '$6.0',
  },
  {
    id: 5,
    image: menu5,
    name: 'Cappuccino Arabica',
    subname: '2/3 espresso, 1/3 steamed milk',
    price: '$2.8',
  },
  {
    id: 6,
    image: menu6,
    name: 'Milk Cream Coffee',
    subname: '2/3 espresso, 1/3 steamed milk',
    price: '$7.5',
  },
];

// Componente para cada elemento del menú
const MenuItem = ({ image, name, subname, price }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
      <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
        <div className="image kf-image-hover">
          <a href={image} className="has-popup-image">
            <img src={image} alt={name} />
          </a>
        </div>
        <div className="desc">
          <h5 className="name">{name}</h5>
          <div className="subname">{subname}</div>
          <div className="price">{price}</div>
        </div>
      </div>
    </div>
  );
};

// Componente principal para la sección del menú
const MenuSection = () => {
  return (
    <section
      className="section kf-menu kf-parallax"
      style={{ backgroundImage: `url(${menuBg})` }}
    >
      <div className="container">
        <div className="kf-titles align-center">
          <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
            Choose Best Coffee
          </div>
          <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
            Kaffen Popular Coffee Menu
          </h3>
        </div>

        <div
          className="kf-menu-items"
          style={{ backgroundImage: `url(${menuLogo})` }}
        >
          <div className="row">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                image={item.image}
                name={item.name}
                subname={item.subname}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
