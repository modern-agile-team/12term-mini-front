import styles from "./CategoryBar.module.css";
import { Category } from "../../data/category";
import { useState } from "react";

function CategoryBar() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <nav className={styles.categoryBar}>
      <ul className={styles.categoryList}>
        {Category.map((category) => (
          <li key={category.id}>
            <button
              className={
                selectedCategory === category.id
                  ? `${styles.categoryButton} ${styles.active}`
                  : styles.categoryButton
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
