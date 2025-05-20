import { useEffect, useState, useRef } from "react";
import { fetchBestSellers } from "../api/furnitureApi";
import useWindowSize from "../hooks/useWindowSize";
import "../styles/Products.css";

const Products = ({ isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(3);
  const sliderRef = useRef(null);
  const { width } = useWindowSize();

  const isMobileView = width < 768;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchBestSellers();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching best seller products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    if (width < 480) {
      setVisibleItems(1);
    } else if (width < 768) {
      setVisibleItems(2);
    } else if (width < 1024) {
      setVisibleItems(3);
    } else {
      setVisibleItems(3);
    }
  }, [width]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      slideProducts("prev");
    }
  };

  const handleNext = () => {
    if (currentIndex < products.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
      slideProducts("next");
    }
  };

  const slideProducts = (direction) => {
    if (!sliderRef.current) return;

    const itemWidth =
      width < 480 ? 280 : width < 768 ? 280 : width < 1024 ? 320 : 354;
    const gap = width < 768 ? 16 : 36;

    const slideAmount =
      direction === "next" ? -(itemWidth + gap) : itemWidth + gap;
    const currentMargin =
      parseInt(getComputedStyle(sliderRef.current).marginLeft) || 0;

    sliderRef.current.style.transition = "margin-left 500ms ease";
    sliderRef.current.style.marginLeft = `${currentMargin + slideAmount}px`;

    updateActiveProducts();
  };

  const updateActiveProducts = () => {
    const productItems = document.querySelectorAll(".product-item");
    productItems.forEach((item, index) => {
      item.classList.remove("active");
      if (index >= currentIndex && index < currentIndex + visibleItems) {
        item.classList.add("active");
      }
    });
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = "none";
      sliderRef.current.style.marginLeft = "0px";
      setCurrentIndex(0);

      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = "margin-left 500ms ease";
          updateActiveProducts();
        }
      }, 50);
    }
  }, [visibleItems]);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <section className="products-section">
      <div className="products-container">
        {isMobileView ? (
          <div className="products-header-mobile">
            <div className="products-info-mobile">
              <div className="products-label-mobile">Categories</div>
              <h2 className="products-title-mobile">
                This month's best seller
              </h2>
            </div>
            <button className="see-more-btn-mobile">SEE MORE</button>
          </div>
        ) : (
          <div className="products-header">
            <div className="products-info">
              <div className="products-label">OUR PRODUCTS</div>
              <h2 className="products-title">This month's best seller</h2>
            </div>
            <button className="see-more-btn">SEE MORE</button>
          </div>
        )}

        <div className="products-slider-container">
          <div
            className="products-slider"
            ref={sliderRef}
            style={{ gap: isMobileView ? "16px" : "36px" }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`product-item ${
                  index === currentIndex ? "active" : ""
                } ${isMobileView ? "mobile" : ""}`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-price">${product.price}</div>
                <div className="product-name">{product.name}</div>
              </div>
            ))}
          </div>

          {isMobileView ? (
            <div className="slider-controls-mobile">
              <button
                className="slider-control-mobile slider-prev-mobile"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous product"
              >
                <div className="arrow-icon-mobile"></div>
              </button>
              <button
                className="slider-control-mobile slider-next-mobile"
                onClick={handleNext}
                disabled={currentIndex >= products.length - visibleItems}
                aria-label="Next product"
              >
                <div className="arrow-icon-mobile"></div>
              </button>
            </div>
          ) : (
            <div className="slider-controls">
              <button
                className="slider-control slider-prev"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Previous product"
              >
                <div className="arrow-icon"></div>
              </button>
              <button
                className="slider-control slider-next"
                onClick={handleNext}
                disabled={currentIndex >= products.length - visibleItems}
                aria-label="Next product"
              >
                <div className="arrow-icon"></div>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
