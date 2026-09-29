import { useState, useEffect } from 'react';
import { getLinkById, voteLink, getComments, createComment } from '../api.js';
import FormularioComentario from '../components/FormularioComentario.jsx';
import ListaComentarios from '../components/ListaComentarios.jsx';

// COMPONENTE DE VISTA DE DETALLE - DESESTRUCTURA EL PROP RECIBIDO POR APP
function Detalle({ linkId, onVolver }) {
  const [link, setLink] = useState(null); // INICIA EL NULL PORQUE EL DETALLE AUN NO HA D¿SIDO CARGADO
  const [comentarios, setComentarios] = useState([]); // INICIA EN UN ARRAY VACIO

  // FUNCION PARA CARGAR EL LINKS Y COMENTARIOS
  const cargarDatos = async () => {
    const [linkData, comentariosData] = await Promise.all([ // EJECUTA LA PETICION AL MISMO TIEMPO
      getLinkById(linkId), // REALIZA LA PETICION PARA TRAER EL LINK CORRESPONDIENTE
      getComments(linkId) // REALIZA LA PETICION PARA TRAER LOS COMENTARIOS DEL LINK CORRESPONDIENTE
    ]);
    setLink(linkData);
    setComentarios(comentariosData);
  };

  // EFECTO SECUNDARIO
  useEffect(() => {
    cargarDatos(); // SE EJECUTA LA FUNCION PARA TRAER LOS DATOS
  }, [linkId]); // SE EJECUTARA CADA VEZ QUE EL ID DEL LINK CAMBIE

  // FUNCION PARA CARGAR LOS VOTOS
  const manejarVoto = async () => {
    await voteLink(linkId); // REALIZA LA CONSULTA DE VOTOS DEL LINK
    cargarDatos(); // SE EJECUTA LA FUNCION PARA TRAER LOS DATOS
  };

  // FUNCION QUE MANEJA LA CREACION DE COMENTARIOS
  const manejarComentario = async (datos) => {
    await createComment(linkId, datos); // REALIZA LA PETICION PARA CREAR NUEVOS COMENTARIOS
    cargarDatos(); // SE EJECUTA LA FUNCION PARA TRAER LOS DATOS
  };

  // SI NO HAY LINK MUESTRA EL TEXTO
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
        <FormularioComentario onComentar={manejarComentario} /> {/* LE PASA AL COMPONENTE EN LA FUNCION PARA MANEJAR COMENTARIOS */}
        <ListaComentarios comentarios={comentarios} /> {/* LE PASA AL COMPONENTE LOS COMENTARIOS */}
      </section>
    </main>
  );
}

export default Detalle;