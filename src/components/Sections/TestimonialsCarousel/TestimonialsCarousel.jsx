import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Splitting from "splitting";

// Importación de imágenes
import rev1 from "../../../assets/images/argomec/ABOUT/person.png";
import rev2 from "../../../assets/images/argomec/ABOUT/person.png";
import rev3 from "../../../assets/images/argomec/ABOUT/person.png";
import { IconStarFilled } from '@tabler/icons-react';

// Lista de testimonios personalizados para tu empresa
const testimonials = [
  {
    image: rev1,
    name: "Carlos R.",
    role: "Dueño de Café Aroma",
    feedback:
      "Increíble servicio. Mi máquina de espresso llevaba semanas fallando, y en menos de un día la dejaron como nueva. Ahora mis clientes disfrutan de un café perfecto nuevamente.",
  },
  {
    image: rev2,
    name: "María G.",
    role: "Administradora de CoffeeHouse",
    feedback:
      "Pensé que tendría que comprar una nueva máquina, pero gracias a su equipo, quedó funcionando como el primer día. ¡Ahorro y calidad en un solo servicio!",
  },
  {
    image: rev3,
    name: "Fernando L.",
    role: "Propietario de Café El Rincón",
    feedback:
      "El mantenimiento preventivo que ofrecen ha sido clave para evitar averías costosas. Ahora mis máquinas están siempre en óptimas condiciones.",
  },
  {
    image: rev3,
    name: "Lucía M.",
    role: "Gerente de Espresso & Arte",
    feedback:
      "Servicio rápido y eficiente. Se tomaron el tiempo de explicarme cómo cuidar mejor mi cafetera para que dure más tiempo. ¡Un equipo muy profesional!",
  },
  {
    image: rev3,
    name: "Ricardo P.",
    role: "Barista en Central Coffee",
    feedback:
      "Nunca había recibido un servicio técnico tan detallado. No solo arreglaron mi máquina, sino que optimizaron la presión del agua y la temperatura. ¡Ahora mi café sabe mejor que nunca!",
  },
  {
    image: rev3,
    name: "Elena T.",
    role: "Emprendedora de café a domicilio",
    feedback:
      "Mi cafetera casera dejó de funcionar y necesitaba una solución urgente. Me la repararon en el mismo día y ahora puedo seguir con mi negocio sin interrupciones. ¡Los recomiendo totalmente!",
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
