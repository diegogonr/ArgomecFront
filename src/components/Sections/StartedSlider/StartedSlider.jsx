import { useEffect } from "react";
import Splitting from "splitting";

import SliderItem from "./SliderItem";
import started_img_n5 from "../../../assets/images/argomec/reparaciones/portada1.jpg";
import started_img_n6 from "../../../assets/images/argomec/reparaciones/portada2.jpg";
import started_img_n3 from "../../../assets/images/argomec/reparaciones/portada3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination, Navigation } from "swiper/modules";

const StartedSlider = () => {
  const slides = [
    {
      background: started_img_n6,
      subtitle: "Reparación de Máquinas de Café",
      title: "Servicio de Reparación",
      title2: "para tu Negocio",
      links: [
        { text: "ver servicios", href: "/services", dark: false },
        { text: "contactar ahora", href: "/contact", dark: true },
      ],
    },
    {
      background: started_img_n5,
      subtitle: "Expertos en Reparación de Máquinas",
      title: "Máquinas de Café",
      title2: "Siempre en Buen Estado",
      links: [
        { text: "ver servicios", href: "/services", dark: false },
        { text: "hablar con un experto", href: "/contact", dark: true },
      ],
    },
    {
      background: started_img_n3,
      subtitle: "Atención a Todo Tipo de Máquinas",
      title: "Reparación Rápida",
      title2: "y Garantizada",
      links: [
        { text: "ver servicios", href: "/services", dark: false },
        { text: "reservar reparación", href: "/contact", dark: true },
      ],
    },
  ];

  useEffect(() => {
    Splitting();
  }, []);

  return (
    <section className="section kf-started-slider">
      <div className="swiper-container">
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={3}
            autoplay={{
              delay: 3400,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay,Pagination, Navigation]}
            className="swiper-wrapper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <SliderItem key={index} {...slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>

      </div>
    </section>
  );
};

export default StartedSlider;
