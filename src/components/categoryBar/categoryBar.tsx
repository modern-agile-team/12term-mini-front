import "./categoryBar.css";
import { categories } from "../../data/categories";

function CategoryBar() {
  return (
    <nav className="category-bar">
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id}>
            <button className="category-button">{category.name}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryBar;
