import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogo}>
          <span className={styles.logoIcon}>M</span>
          <span className={styles.logoText}>모던튜브</span>
        </div>

        <nav className={styles.footerMenu}>
          <a href="#">이용약관</a>
          <a href="#">개인정보처리방침</a>
          <a href="#">고객센터</a>
          <a href="#">문의하기</a>
        </nav>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 ModernTube. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
