import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { fetchProducts } from "../api/furnitureApi";
import "../styles/Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await fetchProducts();
      const target = products.find((item) => item.id === "1");
      setProduct(target);
    };
    fetchProduct();
  }, []);

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
        {product && (
          <div className="hero-image-container">
            <img
              src={product.image || "/api/placeholder/522x709"}
              alt={product.name}
              className="hero-image"
            />
            <div className="hero-price">${product.price}</div>
            <h2 className="hero-name">{product.name}</h2>
            <button className="view-details-btn">
              VIEW DETAILS
              <span className="arrow-icon"></span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
