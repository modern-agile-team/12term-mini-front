import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

function Header() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoIcon}>
            M
          </Link>
          <Link to="/" className={styles.logoText}>
            모던튜브
          </Link>
        </div>

        <nav className={styles.menu}>
          <Link to="/" className={styles.menuButton}>
            홈
          </Link>
          <span className={styles.menuButton}>라이브</span>
          <Link to="/user" className={styles.menuButton}>
            내목록
          </Link>
        </nav>
      </div>

      <div className={styles.headerCenter}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") navigate(`/search?query=${searchText}`);
          }}
          placeholder="영상, 크리에이터 검색"
        />
      </div>

      <div className={styles.headerRight}>
        <Link to="upload" className={styles.uploadBtn}>
          + 업로드
        </Link>

        <Link to="/user" className={styles.profile}>
          한준
        </Link>
      </div>
    </header>
  );
}

export default Header;
