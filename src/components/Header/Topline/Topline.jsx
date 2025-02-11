import { IconBrandFacebookFilled } from '@tabler/icons-react';
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconMapPin } from '@tabler/icons-react';
import { IconClockHour4 } from '@tabler/icons-react';
const Topline = () => {
  return (
    <div className="kf-topline">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <div className="kf-h-group">
            {/* <i className="far fa-clock iconMarginRigth"></i> */}
            <IconClockHour4 stroke={2} />
            <em>Horario de Atención :</em> 08:00 am - 08:00 pm
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center">
          <div className="kf-h-social">
            <a
              href="https://www.facebook.com/profile.php?id=61559819350683"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandFacebookFilled stroke={2} />
            </a>
            <a
              href="https://www.instagram.com/argomec.pe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandInstagram stroke={2} />
            </a>
            <a
              href="https://w.app/argomec"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandWhatsapp stroke={2} />
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">
          <div className="kf-h-group">
            <IconMapPin className="fas iconMarginRigth" stroke={2} />
            <em>Dirección :</em> Jr. León Velarde 630 - Lince
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topline;
