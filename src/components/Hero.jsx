import { useEffect, useRef } from "react";
import $ from "jquery";
import "../styles/Hero.css";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    $(".hero-headline span").each(function (index) {
      $(this).css("animation-delay", `${index * 0.2}s`);
    });

    $(".hero-buttons .btn").each(function (index) {
      $(this).css("animation-delay", `${0.6 + index * 0.1}s`);
    });

    $(".hero-image-container").hover(
      function () {
        $(".view-details-btn").addClass("btn-hover");
      },
      function () {
        $(".view-details-btn").removeClass("btn-hover");
      }
    );

    $(".hero-image-container").on("touchstart", function () {
      $(".view-details-btn").addClass("btn-hover");
    });

    const handleResize = () => {
      if (window.innerWidth < 768) {
        $(".view-details-btn").addClass("btn-hover");
      } else {
        $(".view-details-btn").removeClass("btn-hover");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-headline">
            <span className="primary-text">The kind of </span>
            <span className="accent-text">furniture</span>
            <span className="primary-text"> you have been looking for</span>
          </h1>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              <span className="search-icon"></span>
              SEARCH CATALOG
            </button>
            <button className="btn btn-outline">
              <span className="video-icon"></span>
              WATCH VIDEOS
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src="/api/placeholder/522x709"
            alt="Pösht Sofa"
            className="hero-image"
          />
          <span className="product-price">$329</span>
          <h2 className="product-name">Pösht Sofa</h2>
          <button className="view-details-btn">
            VIEW DETAILS
            <span className="arrow-icon"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
