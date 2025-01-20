// TestimonialsCarousel.jsx
import  { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import rev1 from '../../../assets/images/rev1.jpg';
import rev2 from '../../../assets/images/rev2.jpg';
import rev3 from '../../../assets/images/rev3.jpg';
import testimonials_bg2 from '../../../assets/images/testimonials_bg2.jpeg'

const TestimonialsCarousel = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Inicializa Swiper solo cuando el componente esté montado
    if (swiperRef.current) {

        swiperRef.current = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        breakpoints: {
            768: {
            slidesPerView: 2,
            },
            1024: {
            slidesPerView: 3,
            },
        },
        });
    }
    // Cleanup para destruir Swiper cuando el componente se desmonte
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    <section
      className="section kf-testimonials kf-testimonials-2 section-bg"
      style={{ backgroundImage: testimonials_bg2 }}
    >
      <div className="container">
        <div className="kf-titles align-center">
          <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
            Customer Feedback
          </div>
          <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
            What Our Clients Say
          </h3>
        </div>

        <div className="kf-testimonials-carousel">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* Testimonial 1 */}
              <div className="swiper-slide">
                <div className="slide-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image">
                    <img src={rev1} alt="" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="text">
                      Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque
                      laudantium totam remriam eaque quae abillo
                    </div>
                    <h5 className="name">
                      Frederick S. France <em>Web Designer</em>
                    </h5>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="swiper-slide">
                <div className="slide-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image">
                    <img src={rev2} alt="" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="text">
                      Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque
                      laudantium totam remriam eaque quae abillo
                    </div>
                    <h5 className="name">
                      James M. London <em>Lawyer</em>
                    </h5>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="swiper-slide">
                <div className="slide-item element-anim-1 scroll-animate" data-animate="active">
                  <div className="image">
                    <img src={rev3}alt="" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="text">
                      Sed ut perspiciatis unde omnis natus error luptatem accusantium doloremque
                      laudantium totam remriam eaque quae abillo
                    </div>
                    <h5 className="name">
                      Olivia D. New York <em>Dentist</em>
                    </h5>
                  </div>
                </div>
              </div>
              {/* Agregar más testimonios de la misma forma */}
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
