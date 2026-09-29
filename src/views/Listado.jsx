import { useState, useEffect } from 'react';
import { getLinks, createLink } from '../api.js';
import FormularioLink from '../components/FormularioLink.jsx';
import FiltroTags from '../components/FiltroTags.jsx';
import TarjetaLink from '../components/TarjetaLink.jsx';

// COMPONENTE LISTADO - RECIBE DE APP EL CALLBACK O PROP
function Listado({ onSeleccionarLink }) {
  const [links, setLinks] = useState([]); // LINK INICIA COMO UN ARREGLO VACIO
  const [tagActivo, setTagActivo] = useState(null); // TagActivo EMPIEZA EN NULL PORQUE AUN NO SE SELECCIONO FILTRO
  const [cargando, setCargando] = useState(true); // EL ESTADO CARGANDO COMIENZA EN TRUE

  // FUNCION PARA CARGAR LOS LINKS EN LA VISTA
  const cargarLinks = async () => {
    setCargando(true); // EL ESTADO DE CARGANDO AUN ES TRUE
    const data = await getLinks(); // SE CONSULTA AL BACKEND LOS LINKS EXISTENTES
    setLinks(data); // SE CAMBIA EL ESTADO DE LINKS CON EL ARREGLO DE LINKS RECUPERADOS EN LA CONSULTA
    setCargando(false); // SE CAMBIA EL ESTADO DE CARGANDO A FALSE
  };

  // EFECTO SECUNDARIO PARA REALIZAR LA CONSULTA EN LA API
  useEffect(() => {
    cargarLinks();
  }, []); // SE LE PASA UN ARREGLO VACIO PARA INDICAR QUE SE EJECUTE ESTE EFECTO SECUNDARIO UNICAMENTE UNA VEZ AL MONTAR LA VISTA

  // FUNCION PARA MANEJAR LA CREACION DE LINKS
  const manejarCrear = async (datos) => {
    await createLink(datos); // SE REALIZA LA PETICION AL BACKEND PARA CREAR EL LINK
    cargarLinks(); // VUELVE A EJECUTAR LA FUNCION PARA SINCRONAR EL ESTADO CON LA BASE DE DATOS
  };

  const tagsUnicos = [...new Set(links.flatMap(link => link.tags))]; // GUARDA TODOS LOS TAGS EXISTENTES SIN DUPLICADOS
  const linksFiltrados = (tagActivo ? links.filter(link => link.tags.includes(tagActivo)) : links) // SI tagActivo NO ES NULL FILTRA SOLO LOS LINK CON ESE TAG, SI ES NULL, MUESTRA TODOS LOS LINKS
    .sort((a, b) => b.votes - a.votes); // LO ORDENA DE MAYOR A MENOR SEGUN LOS VOTOS

  
  return (
    <main>
      <FormularioLink onCrear={manejarCrear} /> {/* LE PASA AL COMPONENTE DE FORMULARIO LA FUNCION MANEJARCREAR */}
      <FiltroTags tags={tagsUnicos} tagActivo={tagActivo} onSeleccionar={setTagActivo} /> {/* LE PASA AL COMPONENTE DE FILTROTAGS TODO LO QUE NECESITA KDFLSDK */}

      {/* SE CREA UNA NUEVA SECCION PARA LISTAR LOS LINKS */}
      <section className="lista-links">
        {cargando && <p>Cargando enlaces...</p>} {/* SI CARGANDO ES TRUE MUESTRA EL TEXTO */}
        {!cargando && linksFiltrados.length === 0 && <p>No hay enlaces todavia.</p>} {/* SI CARGANDO ES FALSE Y NO HAY LINKS MUESTRA EL TEXTO */}
        {/* SI CARGANDO ES FALSE Y HAY LINKS RECORRE EL ARRAY Y TRANSFORMA linksFiltrados EN UN ARREGLO DE COMPONENTES TarjetaLink*/}
        {!cargando && linksFiltrados.map(link => (
          <TarjetaLink
            key={link._id} // LE OTORGA A CADA COMPONENTE UN ID UNICO EN EL VIRTUALDOM IDENTIFIQUE QUIEN CAMBIA DE ESTADO
            link={link} // SE LE PASA AL SUBCOMPONENTE O COMPONENTE HIJO LOS DATOS DEL LINK ACTUAL
            onClick={() => onSeleccionarLink(link._id)} // SE LE PASA AL COMPONENTE HIJO EL CALLBACK PARA QUE SE EJECUTE UNICAMENTE SI EL USUARIO HACE CLICK EN LA TARJETA
          />
        ))}
      </section>
    </main>
  );
}

export default Listado;