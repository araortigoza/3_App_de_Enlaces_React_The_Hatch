// COMPONENTE PARA LA TARJETA DE CADA LINK - INICIA DESESTRUCTURANDO LO QUE LE PASAN SUS PADRES (LISTADO O DETALLE)
function TarjetaLink({ link, onClick }) {
  return (
    <article className="tarjeta-link" onClick={onClick}> {/* SE ASIGNA UNA CLASE Y SE DECLARA QUE EJECUTE LA FUNCION RECIBIDA UNA VEZ SIENTE UN CLIC */}
      <h3>{link.title}</h3> {/* SE MUESTRA EL TITULO DEL LINK RECIBIDO */}
      <p className="url">{link.url}</p> {/* SE MUESTRA LA URL DEL LINK RECIBIDO */}
      {/* SE CREA UN DIV PARA LOS TAGS */}
      <div className="tags">
        {/* SE CREA UNA ETIQUETA HTML POR CADA TAG DENTRO DEL ARRAY */}
        {link.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span> // SE LE ASIGNA COMO KEY EL NOMBRE DEL TAG Y UN CLASSNAME
        ))}
      </div>
      <p className="votos">▲ {link.votes} votos</p> {/* SE MUESTRA LA CANTIDAD DE VOTOS DEL LINK RECIBIDO */}
    </article>
  );
}

export default TarjetaLink;