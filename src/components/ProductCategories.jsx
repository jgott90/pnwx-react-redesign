import React from "react";

const categories = [
  {
    icon: "/assets/category-xray.svg",
    name: "X-Ray Equipment",
  },
  {
    icon: "/assets/category-film.svg",
    name: "Film & Accessories",
  },
  {
    icon: "/assets/category-digital.svg",
    name: "Digital Imaging",
  },
  {
    icon: "/assets/category-gear.svg",
    name: "Protective Gear",
  },
];

function ProductCategories() {
  return (
    <section
      className="categories-section"
      id="products"
      aria-label="Product categories"
    >
      <h2 className="visually-hidden">Popular Product Categories</h2>
      <div className="categories-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.name}>
            <img
              src={cat.icon}
              alt=""
              aria-hidden="true"
              className="category-icon"
              draggable="false"
            />
            <span className="category-label">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCategories;