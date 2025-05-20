import { useState, useEffect } from "react";
import $ from "jquery";
import "../styles/Header.css";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 10);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    $(document).ready(function () {
      $(".nav-link").hover(
        function () {
          $(this).addClass("nav-link-hover");
        },
        function () {
          $(this).removeClass("nav-link-hover");
        }
      );
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-container">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="logo-image"
          />
        </div>
        <nav className={`main-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <ul className="nav-menu">
            <li>
              <a href="#about" className="nav-link">
                About us
              </a>
            </li>
            <li className="dropdown">
              <a href="#furniture" className="nav-link with-dropdown">
                Furniture
                <span className="dropdown-icon"></span>
              </a>
            </li>
            <li>
              <a href="#partnerships" className="nav-link">
                Partnerships
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            <li className="mobile-only">
              <button className="signup-btn mobile-signup">Sign Up</button>
            </li>
            <li className="mobile-only">
              <button className="cart-btn mobile-cart">
                <ShoppingCart size={24} />
              </button>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="signup-btn desktop-only">Sign Up</button>
          <button className="cart-btn desktop-only">
            <ShoppingCart size={24} />
          </button>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
