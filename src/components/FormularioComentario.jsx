import { useState } from 'react';

function FormularioComentario({ onComentar }) {
  const [autor, setAutor] = useState('');
  const [text, setText] = useState('');

  const manejarSubmit = async (evento) => {
    evento.preventDefault();
    await onComentar({ autor, text });
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