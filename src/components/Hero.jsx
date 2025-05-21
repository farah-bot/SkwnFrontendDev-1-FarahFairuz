import { useEffect, useState } from "react";
import { fetchProducts } from "../api/furnitureApi";
import useWindowSize from "../hooks/useWindowSize";
import "../styles/Hero.css";

const Hero = () => {
  const [product, setProduct] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await fetchProducts();
      const target = products.find((item) => item.id === "1");
      setProduct(target);
    };
    fetchProduct();
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-headline">
            <span
              className="primary-text fade-in"
              style={{ animationDelay: "0s" }}
            >
              The kind of{" "}
            </span>
            <span
              className="accent-text fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              furniture
            </span>
            <span
              className="primary-text fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {" "}
              you have been looking for
            </span>
          </h1>
          <div className="hero-buttons">
            <button
              className="btn btn-primary fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_4_487)">
                    <path
                      d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39002C15.44 5.61002 13.12 3.39002 10.32 3.05002C6.09001 2.53002 2.53002 6.09001 3.05002 10.32C3.39002 13.12 5.61002 15.44 8.39002 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.50002 14C7.01002 14 5.00002 11.99 5.00002 9.50002C5.00002 7.01002 7.01002 5.00002 9.50002 5.00002C11.99 5.00002 14 7.01002 14 9.50002C14 11.99 11.99 14 9.50002 14Z"
                      fill="#553B33"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4_487">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              SEARCH CATALOG
            </button>
            <button
              className="btn btn-outline fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              <span className="video-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.8 15.9L15.47 12.4C15.74 12.2 15.74 11.8 15.47 11.6L10.8 8.1C10.47 7.85 10 8.09 10 8.5V15.5C10 15.91 10.47 16.15 10.8 15.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="#553B33"
                  />
                </svg>
              </span>
              WATCH VIDEOS
            </button>
          </div>
        </div>
        {product && (
          <div
            className="hero-image-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
          >
            <img
              src={product.image || "/api/placeholder/522x709"}
              alt={product.name}
              className="hero-image"
            />
            <div className="hero-price">${product.price}</div>
            <h2 className="hero-name">{product.name}</h2>
            <button
              className={`view-details-btn ${
                isHovered || width < 768 ? "btn-hover" : ""
              }`}
            >
              VIEW DETAILS
              <span className="hero-arrow-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
