import { useState } from 'react';

// SE DEFINE EL COMPONENTE CONTROLADO PARA CREAR COMENTARIOS
function FormularioComentario({ onComentar }) {
  // DECLARA UN ESTADO POR CADA CAMPO DEL FORMULARIO - INICIAN COMO VACIOS
  const [autor, setAutor] = useState('');
  const [text, setText] = useState('');


  const manejarSubmit = async (evento) => {
    evento.preventDefault(); // EVITA EL COMPORTAMIENTO POR DEFECTO DE LOS FORMULARIOS HTML QUE SERIA RECARGAR LA PAGINA Y ENVIAR PETICION POST
    await onComentar({ autor, text }); // INVOCA EL CALLBACK ENVIADO POR DETALLE CON EL OBJETO ESTRUCTURADO
    // RESETEA LOS ESTADOS A CADENAS VACIAS
    setAutor('');
    setText('');
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Tu nombre"
        maxLength={30}
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        required
      />
      <textarea
        placeholder="Escribi un comentario"
        maxLength={300}
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Comentar</button>
    </form>
  );
}

export default FormularioComentario;