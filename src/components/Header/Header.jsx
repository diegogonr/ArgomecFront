// import MobileNavbar from "./Navbar/MobileNavbar";
import Navbar from "./Navbar/Navbar";
import Topline from "./Topline/Topline";

const Header = () => {
    return (
        <header className="kf-header">
            {/* Topline */}
            <Topline></Topline>

			{/* <!-- navbar --> */}
            <Navbar></Navbar>

			{/* <!-- mobile navbar --> */}
            {/* <MobileNavbar></MobileNavbar> */}
        </header>
    );
};

export default Header;
