import { IconMap2 } from '@tabler/icons-react';
import { IconMailSpark } from '@tabler/icons-react';
import { IconPhoneRinging } from '@tabler/icons-react';
const ContactInfo = () => {
    return (
      <section className="section kf-contacts-info">
        <div className="container">
          <div className="kf-contacts-items row">
            
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div className="kf-contacts-item  scroll-animate" data-animate="active">
                <div className="image">
                  {/* <i className="las la-map-marked-alt"></i> */}
                  <IconMap2 className= "iconPrimary" size={"50px"} stroke={2} />
                </div>
                <div className="desc">
                  <h5 className="name">Dirección</h5>
                  <ul>
                    <li>Jr. León Velarde 630 - Lince, <br />Lima, Perú</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div className="kf-contacts-item  scroll-animate" data-animate="active">
                <div className="image">
                  {/* <i className="las la-envelope-open-text"></i> */}
                  <IconMailSpark  className= "iconPrimary" size={"50px"} stroke={2} />
                </div>
                <div className="desc">
                  <h5 className="name">Email</h5>
                  <ul>
                    <li>argomecservice@gmail.com <br />www.argomec.com</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 align-center">
              <div className="kf-contacts-item  scroll-animate" data-animate="active">
                <div className="image">
                  {/* <i className="las la-headset"></i> */}
                  <IconPhoneRinging  className= "iconPrimary" size={"50px"} stroke={2} />
                </div>
                <div className="desc">
                  <h5 className="name">Número</h5>
                  <ul>
                    <li> (+51) 923902381</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactInfo;
  