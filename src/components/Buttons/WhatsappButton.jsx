// import { FaWhatsapp } from "react-icons/fa";
import './Style.css'
import { IconBrandWhatsapp } from '@tabler/icons-react';
const WhatsappButton = () => {
//   const phoneNumber = "923902381"; 
  const handleClick = () => {
    window.open(`https://w.app/argomec`, "_blank", "noopener,noreferrer");
  };
  return (
    <div onClick={handleClick} className="whatsapp-button">
      <IconBrandWhatsapp size={"40px"} style={{ marginLeft: "2px" }} stroke={2} />
    </div>
  );;
};

export default WhatsappButton;
