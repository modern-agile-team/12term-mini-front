import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <span className="logo-icon">M</span>
          <span className="logo-text">모던튜브</span>
        </div>

        <nav className="footer-menu">
          <a href="#">이용약관</a>
          <a href="#">개인정보처리방침</a>
          <a href="#">고객센터</a>
          <a href="#">문의하기</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ModernTube. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
