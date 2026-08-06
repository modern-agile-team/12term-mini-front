import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-icon">M</span>
          <span className="logo-text">모던튜브</span>
        </div>

        <nav className="menu">
          <button>홈</button>
          <button>라이브</button>
          <button>내 목록</button>
        </nav>
      </div>

      <div className="header-center">
        <input type="text" placeholder="영상, 크리에이터 검색" />
      </div>

      <div className="header-right">
        <button className="upload-btn">+ 업로드</button>

        <div className="profile">한준</div>
      </div>
    </header>
  );
}

export default Header;
