import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Splitting from "splitting";

// Importación de imágenes
import rev1 from "../../../assets/images/argomec/cafe/testimonials/El-Hornero-Premium.jpg";
import rev2 from "../../../assets/images/argomec/cafe/testimonials/Marina de Guerra del Perú.png";
import rev3 from "../../../assets/images/argomec/cafe/testimonials/Club social Miraflores.png";
import rev4 from "../../../assets/images/argomec/cafe/testimonials/La Ruta del Cacao.jpg";

import { IconStarFilled } from '@tabler/icons-react';

// Lista de testimonios personalizados para tu empresa
const testimonials = [
  {
    image: rev1,
    name: "El Hornero Premium",
    role: "",
    feedback:
      "El restaurante El Hornero agradece a Argomec por su excelente servicio de mantenimiento, asegurando el óptimo funcionamiento de nuestras máquinas de café y equipos esenciales para brindar una experiencia de calidad a nuestros clientes.",
  },
  {
    image: rev2,
    name: "Marina de Guerra del Perú",

    role: "",
    feedback:
      "La Marina de Guerra del Perú reconoce a Argomec por su destacado trabajo en el mantenimiento de las máquinas de café a bordo de nuestros buques, garantizando su rendimiento en cada misión.",
  },
  {
    image: rev3,
    name: "Club social Miraflores",
    role: "",
    feedback:
      "En Argomec nos apoyamos para mantener siempre el sabor de nuestro cafés a nuestros clientes.",
  },
  {
    image: rev4,
    name: "La Ruta del Cacao",
    role: "",
    feedback:
      "Servicio rápido, justo y asequible. Recomiendo ampliamente a ARGOMEC para sus servicios de mantenimiento.",
  },

];

const TestimonialsCarousel = () => {
  useEffect(() => {
    Splitting();
  }, []);

  return (
    <section
      className="section kf-testimonials kf-testimonials-2 section-bg"
      // style={{ backgroundImage: `url(${testimonials_bg2})` }}
    >
      <div className="container">
        <div className="kf-titles align-center">
          <div className="kf-subtitle">Opiniones de nuestros clientes</div>
          <h3 className="kf-title">Experiencias con nuestro servicio</h3>
        </div>

        <div className="kf-testimonials-carousel">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiper-wrapper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="swiper-slide card-testimonial">
                <div className="slide-item">
                  <div className="image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        // <i key={i} className="fas fa-star"></i>
                        <IconStarFilled key={i} stroke={2} />
                      ))}
                    </div>
                    <div className="text">{testimonial.feedback}</div>
                    <h5 className="name">
                      {testimonial.name} <em>{testimonial.role}</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
