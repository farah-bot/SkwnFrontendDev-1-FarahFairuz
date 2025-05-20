import { useEffect } from "react";
import $ from "jquery";
import "../styles/Features.css";

const Features = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(window).scroll(function () {
        const featuresSection = $(".features-section");
        const featureBoxes = $(".feature-box");

        if (
          $(window).scrollTop() + $(window).height() >
          featuresSection.offset().top
        ) {
          featureBoxes.each(function (index) {
            setTimeout(() => {
              $(this).addClass("feature-animate");
            }, index * 200);
          });
        }
      });
    });
  }, []);

  return (
    <section className="features-section">
      <div className="features-container">
        <h3 className="features-subtitle">WHY CHOOSE US?</h3>
        <h2 className="features-title">
          We care about details and the quality of our products
        </h2>

        <div className="features-boxes">
          <div className="feature-box">
            <div className="feature-icon materials-icon"></div>
            <h4 className="feature-text">
              MANUFACTURED WITH QUALITY MATERIALS
            </h4>
          </div>

          <div className="feature-box">
            <div className="feature-icon warranty-icon">5</div>
            <h4 className="feature-text">
              5 YEARS OF WARRANTY FOR EACH PRODUCT
            </h4>
          </div>

          <div className="feature-box">
            <div className="feature-icon expertise-icon"></div>
            <h4 className="feature-text">20 YEARS OF EXPERTISE</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
