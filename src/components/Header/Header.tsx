import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>M</span>
          <span className={styles.logoText}>모던튜브</span>
        </div>

        <nav className={styles.menu}>
          <button>홈</button>
          <button>라이브</button>
          <button>내 목록</button>
        </nav>
      </div>

      <div className={styles.headerCenter}>
        <input type="text" placeholder="영상, 크리에이터 검색" />
      </div>

      <div className={styles.headerRight}>
        <button className={styles.uploadBtn}>+ 업로드</button>

        <div className={styles.profile}>한준</div>
      </div>
    </header>
  );
}

export default Header;
