import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-brand">
            <div className="logo">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="logo-image"
              />
            </div>
            <p className="company-description">
              Dekoor is a furniture company created to fulfill the needs of
              family with aesthetic feeling in their furniture. Always pay
              attention to details and give clear communication for the
              customers. Priority of our design is comfortability.
            </p>
          </div>
          <div className="copyright">©Copyright 2022 Dekoor</div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-menu">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping & Returns</a>
              </li>
              <li>
                <a href="#">Care guide</a>
              </li>
              <li>
                <a href="#">Redeem warranty</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Social Media</h3>
            <ul className="footer-menu">
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">TikTok</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">About Us</h3>
            <ul className="footer-menu">
              <li>
                <a href="#">Our story</a>
              </li>
              <li>
                <a href="#">Designer</a>
              </li>
              <li>
                <a href="#">Craftmanship</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
