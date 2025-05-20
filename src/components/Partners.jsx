import { useEffect } from "react";
import $ from "jquery";
import "../styles/Partners.css";

const logos = [
  "/src/assets/images/Company logo-1.png",
  "/src/assets/images/Company logo-2.png",
  "/src/assets/images/Company logo-3.png",
  "/src/assets/images/Company logo-4.png",
];

const Partners = () => {
  useEffect(() => {
    $(".partner-logo").each(function (index) {
      $(this).css({
        opacity: 0,
        transform: "translateY(20px)",
      });

      setTimeout(() => {
        $(this).animate(
          {
            opacity: 1,
          },
          500,
          () => {
            $(this).css("transform", "translateY(0)");
          }
        );
      }, 200 * index);
    });
  }, []);

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-stats">
          <div className="partners-count">25+</div>
          <div className="partners-label">PARTNERED BRANDS</div>
        </div>
        <div className="partners-logos">
          {logos.map((src, i) => (
            <div key={i} className="partner-logo">
              <img
                src={src}
                alt={`Company logo ${i + 1}`}
                className="partner-logo-image"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
