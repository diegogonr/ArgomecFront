
const SliderItem = ({ background, subtitle, title,title2, links }) => {
  return (
    <div className="swiper-slide">
      
      <div className="kf-started-item">
        <div
          className="slide js-parallax"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        
        <div className="container">
          <div className="description align-left element-anim-1">
            <div className="subtitles">{subtitle}</div>
            <h2 className="name text-anim-1" data-splitting="chars">{title} <br/>{title2}</h2>
            <div className="kf-bts">
            
              {links?.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`kf-btn ${link.dark ? "dark-btn" : ""}`}
                >
                  
                  <span>{link.text}</span>
                  <i className="fas fa-chevron-right"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
