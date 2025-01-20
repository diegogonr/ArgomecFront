import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import gridGal1 from '../../../assets/images/grid_gal1.jpg';
import gridGal2 from '../../../assets/images/grid_gal2.jpg';
import gridGal3 from '../../../assets/images/grid_gal3.jpg';
import gridGal4 from '../../../assets/images/grid_gal4.jpg';
import gridGal5 from '../../../assets/images/grid_gal5.jpg';

const CarouselSection = () => {
  const swiperRef = useRef(null);

  useEffect(() => {

    // Asegúrate de que swiperRef.current no sea nulo antes de asignar la instancia de Swiper
    if (swiperRef.current) {
      swiperRef.current = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
      });

      console.log("Swiper iniciado:", swiperRef.current);
    }

    // Cleanup para destruir la instancia de Swiper
    return () => {
      if (swiperRef.current) {
        console.log("Destruyendo Swiper");
        swiperRef.current.destroy(true, true);  // El segundo parámetro true asegura que Swiper se destruye completamente
      }
    };
  }, []);

  const images = [
    { src: gridGal2, alt: 'Latte', name: 'Latte' },
    { src: gridGal3, alt: 'Cappuccino', name: 'Cappuccino' },
    { src: gridGal4, alt: 'Iced Coffee', name: 'Iced Coffee' },
    { src: gridGal5, alt: 'Espresso', name: 'Espresso' },
    { src: gridGal1, alt: 'Black Coffee', name: 'Black Coffee' },
  ];

  return (
    <section className="section kf-grid-carousel">
      <div className="container">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {images.map((item, index) => (
              <div className="swiper-slide" key={index}>
                <div className="slide-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image kf-image-hover">
                    <a href={item.src} className="has-popup-image">
                      <img src={item.src} alt={item.alt} />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">{item.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
