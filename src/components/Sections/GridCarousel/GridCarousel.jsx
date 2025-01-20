import { Swiper, SwiperSlide } from 'swiper/react';

import gridGal1 from '../../../assets/images/grid_gal1.jpg';
import gridGal2 from '../../../assets/images/grid_gal2.jpg';
import gridGal3 from '../../../assets/images/grid_gal3.jpg';
import gridGal4 from '../../../assets/images/grid_gal4.jpg';
import gridGal5 from '../../../assets/images/grid_gal5.jpg';
import "../style.css";

// Datos de las imágenes
const carouselItems = [
  { id: 1, image: gridGal2, name: 'Latte' },
  { id: 2, image: gridGal3, name: 'Cappuccino' },
  { id: 3, image: gridGal4, name: 'Iced Coffee' },
  { id: 4, image: gridGal5, name: 'Espresso' },
  { id: 5, image: gridGal1, name: 'Black Coffee' },
];

const GridCarousel = () => {
  return (
    <section className="section kf-grid-carousel">
      <div className="container">
        <Swiper
          spaceBetween={30}
          slidesPerView={3} // Ajustar según necesidad
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper-container"
        >
          {carouselItems.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="slide-item element-anim-1 scroll-animate" data-animate="active">
                <div className="image kf-image-hover">
                  <a href={item.image} className="has-popup-image">
                    <img src={item.image} alt={item.name} />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">{item.name}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GridCarousel;
