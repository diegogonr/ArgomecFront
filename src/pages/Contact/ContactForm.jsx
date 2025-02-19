import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IconUser, IconAt, IconDeviceMobile } from "@tabler/icons-react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import './StyleContact.css'
const ContactForm = () => {
  const formRef = useRef(null);
  const [messageStatus, setMessageStatus] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const userEmail = formData.get("user_email");

    // Enviar correo a la empresa
    emailjs
      .sendForm(
        "service_gnbjp3n", // Service ID
        "template_w6f1jwh", // Template ID para Argomec
        formRef.current,
        "xGBUE3RcnmF6sK5zJ" // Public Key
      )
      .then(
        (result) => {
          console.log("Correo a la empresa enviado:", result.text);

          // Ahora enviar correo de confirmación al usuario
          emailjs
            .send(
              "service_gnbjp3n",
              "template_tn50n3s",
              {
                user_name: formData.get("user_name"),
                user_email: userEmail,
                user_phone: formData.get("user_phone"),
                message: formData.get("message"),
              },
              "xGBUE3RcnmF6sK5zJ"
            )
            .then(
              (userResult) => {
                console.log("Correo de confirmación enviado:", userResult.text);
                setMessageStatus("success");
                setShowMessage(true);
                formRef.current.reset();

                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                  setShowMessage(false);
                }, 5000);
              },
              (error) => {
                console.error("Error al enviar al usuario:", error.text);
                setMessageStatus("error");
                setShowMessage(true);

                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                  setShowMessage(false);
                }, 5000);
              }
            );
        },
        (error) => {
          console.error("Error al enviar a la empresa:", error.text);
          setMessageStatus("error");
          setShowMessage(true);

          // Ocultar mensaje después de 5 segundos
          setTimeout(() => {
            setShowMessage(false);
          }, 5000);
        }
      );
  };

  return (
    <section className="section kf-contacts-form">
      <div className="container">
        <div className="kf-reservation-form scroll-animate" data-animate="active">
          <div className="kf-titles align-center">
            <div className="kf-subtitle">Contáctanos</div>
            <h3 className="kf-title">Enviar mensaje</h3>
          </div>

          <form ref={formRef} onSubmit={sendEmail}>
            <div className="row">
              <div className="col-lg-4">
                <div className="kf-field">
                  <input type="text" name="user_name" placeholder="Nombre" required />
                  <i className="far"><IconUser stroke={2} /></i>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="kf-field">
                  <input type="email" name="user_email" placeholder="Email" required />
                  <i className="fas"><IconAt stroke={2} /></i>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="kf-field">
                  <input type="tel" name="user_phone" placeholder="Número" required />
                  <i className="fas"><IconDeviceMobile stroke={2} /></i>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="kf-field">
                  <textarea name="message" placeholder="Mensaje" required></textarea>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="kf-bts">
                  <button type="submit" className="kf-btn">
                    <span>Enviar Mensaje</span>
                    <ChevronRightIcon />
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Mensajes de confirmación con animación */}
          {showMessage && (
            <div className={`alert-box ${messageStatus === "success" ? "alert-success" : "alert-error"}`}>
              {messageStatus === "success" ? (
                <p>✅ Tu mensaje se ha enviado correctamente. Pronto te responderemos.</p>
              ) : (
                <p>❌ Hubo un error al enviar el mensaje. Intenta de nuevo.</p>
              )}
            </div>
          )}
        </div>
      </div>


    </section>
  );
};

export default ContactForm;
