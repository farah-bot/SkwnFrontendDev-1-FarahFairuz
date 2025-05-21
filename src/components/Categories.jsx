import { useEffect, useState } from "react";
import "../styles/Categories.css";
import { fetchCategories } from "../api/furnitureApi";
import useWindowSize from "../hooks/useWindowSize";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
      if (data.length > 0) {
        setActiveCategory(data[0].name);
      }
    };
    loadCategories();
  }, []);

  const displayCategories = isMobile ? categories.slice(0, 3) : categories;

  return (
    <section className="categories-section">
      <div className="categories-container">
        {!isMobile && (
          <div className="categories-gallery">
            {categories.map((cat) => (
              <img
                key={cat.id}
                className={`category-image ${
                  activeCategory === cat.name
                    ? "active-image grow"
                    : "inactive-image shrink"
                }`}
                src={cat.image}
                alt={cat.name}
              />
            ))}
          </div>
        )}

        <div className="categories-info">
          <div className="categories-label">Categories</div>
          <h2 className="categories-title">
            Furniture Sets
            <br />
            Recommendations
          </h2>
          <div className="categories-tabs">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`category-item ${
                  activeCategory === cat.name ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat.name)}
              >
                {cat.name}
                {activeCategory === cat.name && (
                  <div className="category-description">{cat.description}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {isMobile && (
          <div className="mobile-gallery">
            {displayCategories.map((cat) => (
              <img
                key={cat.id}
                className="mobile-category-image"
                src={cat.image}
                alt={cat.name}
                onClick={() => setActiveCategory(cat.name)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
