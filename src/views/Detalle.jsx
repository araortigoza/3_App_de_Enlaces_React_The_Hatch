import { useState, useEffect } from 'react';
import { getLinkById, voteLink, getComments, createComment } from '../api.js';
import FormularioComentario from '../components/FormularioComentario.jsx';
import ListaComentarios from '../components/ListaComentarios.jsx';

function Detalle({ linkId, onVolver }) {
  const [link, setLink] = useState(null);
  const [comentarios, setComentarios] = useState([]);

  const cargarDatos = async () => {
    const [linkData, comentariosData] = await Promise.all([
      getLinkById(linkId),
      getComments(linkId)
    ]);
    setLink(linkData);
    setComentarios(comentariosData);
  };

  useEffect(() => {
    cargarDatos();
  }, [linkId]);

  const manejarVoto = async () => {
    await voteLink(linkId);
    cargarDatos();
  };

  const manejarComentario = async (datos) => {
    await createComment(linkId, datos);
    cargarDatos();
  };

  if (!link) {
    return <main><p>Cargando enlace...</p></main>;
  }

  return (
    <main>
      <button className="volver" onClick={onVolver}>← Volver</button>

      <section className="detalle-link">
        <h2>{link.title}</h2>
        <a href={link.url} target="_blank" rel="noreferrer" className="url">{link.url}</a>
        <div className="tags">
          {link.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <button id="btn-votar" onClick={manejarVoto}>▲ {link.votes} votos</button>
      </section>

      <section className="comentarios">
        <h3>Comentarios</h3>
        <FormularioComentario onComentar={manejarComentario} />
        <ListaComentarios comentarios={comentarios} />
      </section>
    </main>
  );
}

export default Detalle;