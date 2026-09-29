function TarjetaLink({ link, onClick }) {
  return (
    <article className="tarjeta-link" onClick={onClick}>
      <h3>{link.title}</h3>
      <p className="url">{link.url}</p>
      <div className="tags">
        {link.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <p className="votos">▲ {link.votes} votos</p>
    </article>
  );
}

export default TarjetaLink;