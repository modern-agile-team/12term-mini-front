import "./categoryBar.css";
import { categories } from "../../data/categories";
import { useState } from "react";

function CategoryBar() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <nav className="category-bar">
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className={
                selectedCategory === category.id
                  ? "category-button active"
                  : "category-button"
              }
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryBar;
