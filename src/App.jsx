import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Preloader from "./components/Loaders/Preloader";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import WhatsappButton from "./components/Buttons/WhatsappButton";

function App() {
  return (
    <Router>
      <Preloader />
      <div className="bg">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />

        </Routes>
      </div>
      <WhatsappButton></WhatsappButton>
      <Footer />
    </Router>
  );
}

export default App;
