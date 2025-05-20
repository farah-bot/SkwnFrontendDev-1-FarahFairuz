import { useEffect, useState } from "react";
import "../styles/Categories.css";
import { fetchCategories } from "../api/furnitureApi";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

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

  return (
    <section className="categories-section">
      <div className="categories-container">
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
      </div>
    </section>
  );
};

export default Categories;
