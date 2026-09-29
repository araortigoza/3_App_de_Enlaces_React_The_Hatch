function ListaComentarios({ comentarios }) {
  if (comentarios.length === 0) {
    return <p>Todavia no hay comentarios.</p>;
  }

  return (
    <div className="lista-comentarios">
      {comentarios.map(comentario => (
        <div key={comentario._id} className="comentario">
          <strong>{comentario.autor}</strong>
          <p>{comentario.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ListaComentarios;