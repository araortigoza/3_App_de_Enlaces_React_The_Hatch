import { useState } from 'react';

function FormularioLink({ onCrear }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [tagsTexto, setTagsTexto] = useState('');

  const manejarSubmit = async (evento) => {
    evento.preventDefault();
    const tags = tagsTexto
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    await onCrear({ title, url, tags });

    setTitle('');
    setUrl('');
    setTagsTexto('');
  };

  return (
    <section className="formulario">
      <h2>Agregar enlace</h2>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="https://..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tags separados por coma"
          maxLength={100}
          value={tagsTexto}
          onChange={(e) => setTagsTexto(e.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
    </section>
  );
}

export default FormularioLink;