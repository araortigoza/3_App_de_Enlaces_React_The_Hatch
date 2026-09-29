import { useState } from 'react';

// SE DEFINE EL COMPONENTE CONTROLADO PARA CREAR LINKS
function FormularioLink({ onCrear }) {
  // DECLARA UN ESTADO POR CADA CAMPO DEL FORMULARIO - INICIAN COMO VACIOS
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [tagsTexto, setTagsTexto] = useState('');


  const manejarSubmit = async (evento) => {
    evento.preventDefault(); // EVITA EL COMPORTAMIENTO POR DEFECTO DE LOS FORMULARIOS HTML QUE SERIA RECARGAR LA PAGINA Y ENVIAR PETICION POST
    const tags = tagsTexto
      .split(',') // CONVIERTE LA CADENA EN UN ARREGLO ENTRE COMAS
      .map(t => t.trim()) // QUITA ESPACIOS DEL PRINCIPIO Y FINAL DE CADA PALABRA
      .filter(t => t.length > 0); // REMUEVE ESPACIOS EN BLANCO CAUSADOS POR COMAS DOBLES O ESPACIOS AL FINAL

    // INVOCA EL CALLBACK ENVIADO POR LISTADO CON EL OBJETO ESTRUCTURADO 
    await onCrear({ title, url, tags });

    // RESETEA LOS TRES ESTADOS A CADENAS VACIAS
    setTitle('');
    setUrl('');
    setTagsTexto('');
  };

  return (
    <section className="formulario">
      <h2>Agregar enlace</h2>
      <form onSubmit={manejarSubmit}>
        <input
          type="text" // INDICA QUE EL VALOR SERA UN TEXTO
          placeholder="Titulo" // MUESTRA ESE TEXTO CUANDO ESTA VACIO
          value={title} // VINCULA EL VALOR VISIBLE CON LA VARIABLE DE ESTADO DEFINIDA
          onChange={(e) => setTitle(e.target.value)} // SE EJECUTA CADA VEZ QUE EL URUARIO TOCA UNA TECLA Y ACTUALIZA EL ESTADO DEL TITULO
          required // INDICA COMO CAMPO OBLIGATORIO
        />
        <input
          type="url" // INDICA QUE EL VALOR SERA UNA URL
          placeholder="https://..." // MUESTRA ESE TEXTO CUANDO ESTA VACIO
          value={url} // VINCULA EL VALOR VISIBLE CON LA VARIABLE DE ESTADO DEFINIDA
          onChange={(e) => setUrl(e.target.value)} // SE EJECUTA CADA VEZ QUE EL URUARIO TOCA UNA TECLA Y ACTUALIZA EL ESTADO DE LA URL
          required // INDICA COMO CAMPO OBLIGATORIO
        />
        <input
          type="text" // INDICA QUE EL VALOR SERA UN TEXTO
          placeholder="Tags separados por coma" // MUESTRA ESE TEXTO CUANDO ESTA VACIO
          maxLength={100} // INDICA LA CANTIDAD MAXIMA DE CARACTERES
          value={tagsTexto} // VINCULA EL VALOR VISIBLE CON LA VARIABLE DE ESTADO DEFINIDA
          onChange={(e) => setTagsTexto(e.target.value)} // SE EJECUTA CADA VEZ QUE EL URUARIO TOCA UNA TECLA Y ACTUALIZA EL ESTADO DEL TAG
        />
        <button type="submit">Guardar</button>
      </form>
    </section>
  );
}

export default FormularioLink;