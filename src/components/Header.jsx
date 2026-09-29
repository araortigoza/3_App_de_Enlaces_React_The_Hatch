function Header({ onClickLogo }) {
  return (
    <header>
      <a href="#" onClick={(e) => { e.preventDefault(); onClickLogo(); }}>
        <img src="/favicon.webp" alt="Logo Votely" className="logo" />
        Votely
      </a>
    </header>
  );
}

export default Header;