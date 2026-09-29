function Header({ onClickLogo }) {
  return (
    <header>
      <a href="#" onClick={(e) => { e.preventDefault(); onClickLogo(); }}> {/* EVITA DE LA PAGINA SE RECARGUE Y EJECUTA EL CALLBACK PARA VOLVER AL LISTADO  */}
        <img src="/favicon.webp" alt="Logo Votely" className="logo" /> {/* AGREGA LA IMAGEN Y LE ASIGNA UN CLASSNAME */}
        Votely
      </a>
    </header>
  );
}

export default Header;