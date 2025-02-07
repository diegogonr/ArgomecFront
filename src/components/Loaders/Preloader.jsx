import { useState, useEffect } from "react";
import logo from "../../assets/images/argomec/LOGO/logo.png"; 


const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null; 

  return (
    <div className="preloader">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="spinner-logo">
            <img src={logo} alt="Logo" />
            <div className="spinner-dot">
              <div className="spinner-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
