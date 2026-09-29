// COMPONENTE PARA LISTAR LOS COMENTARIOS DE UN LINKS
function ListaComentarios({ comentarios }) {
  // SI NO HAY COMENTARIOS MUESTRA UN TEXTO
  if (comentarios.length === 0) {
    return <p>Todavia no hay comentarios.</p>;
  }

  return (
    <div className="lista-comentarios"> {/* LE ASIGNA UN CLASSNAME */}
      {/* POR CADA COMENTARIO CREA UNA ETIQUETA HTML */}
      {comentarios.map(comentario => (
        <div key={comentario._id} className="comentario"> {/* LE ASIGNA UNA KEY Y UN CLASSNAME */}
          <strong>{comentario.autor}</strong> {/* MUESTRA EL NOMBRE DE LA PERSONA QUE ESCRIBIO ESE COMENTARIO */}
          <p>{comentario.text}</p> {/* MUESTRA EL COMENTARIO */}
        </div>
      ))}
    </div>
  );
}

export default ListaComentarios;