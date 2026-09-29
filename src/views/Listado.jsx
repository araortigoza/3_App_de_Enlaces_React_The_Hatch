import { useState, useEffect } from 'react';
import { getLinks, createLink } from '../api.js';
import FormularioLink from '../components/FormularioLink.jsx';
import FiltroTags from '../components/FiltroTags.jsx';
import TarjetaLink from '../components/TarjetaLink.jsx';

function Listado({ onSeleccionarLink }) {
  const [links, setLinks] = useState([]);
  const [tagActivo, setTagActivo] = useState(null);
  const [cargando, setCargando] = useState(true);

  const cargarLinks = async () => {
    setCargando(true);
    const data = await getLinks();
    setLinks(data);
    setCargando(false);
  };

  useEffect(() => {
    cargarLinks();
  }, []);

  const manejarCrear = async (datos) => {
    await createLink(datos);
    cargarLinks();
  };

  const tagsUnicos = [...new Set(links.flatMap(link => link.tags))];
  const linksFiltrados = (tagActivo ? links.filter(link => link.tags.includes(tagActivo)) : links)
    .sort((a, b) => b.votes - a.votes);

  return (
    <main>
      <FormularioLink onCrear={manejarCrear} />
      <FiltroTags tags={tagsUnicos} tagActivo={tagActivo} onSeleccionar={setTagActivo} />

      <section className="lista-links">
        {cargando && <p>Cargando enlaces...</p>}
        {!cargando && linksFiltrados.length === 0 && <p>No hay enlaces todavia.</p>}
        {!cargando && linksFiltrados.map(link => (
          <TarjetaLink
            key={link._id}
            link={link}
            onClick={() => onSeleccionarLink(link._id)}
          />
        ))}
      </section>
    </main>
  );
}

export default Listado;