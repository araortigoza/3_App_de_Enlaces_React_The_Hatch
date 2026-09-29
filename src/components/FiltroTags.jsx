// COMPONENTE PARA FILTRAR TAGS - DESESCTRUCTURA LOS PROPS RECIBIDOS DE LISTADO
function FiltroTags({ tags, tagActivo, onSeleccionar }) {
  return (
    <section className="filtros"> {/* LE ASIGNA UN CLASSNAME */}
      <button
        className={`tag-btn ${!tagActivo ? 'activo' : ''}`} // SI TAG ES NULO LE PASA LA CLASE tag-btn A CSS PARA PINTAR ESE BOTON
        onClick={() => onSeleccionar(null)} // LIMPIA EL FILTRO
      >
        Todos
      </button>
      {/* POR CADA TAG CREA LE UN ELEMENTO HTML */}
      {tags.map(tag => (
        <button
          key={tag} // LE ASIGNA COMO KEY EL NOMBRE DEL TAG
          className={`tag-btn ${tag === tagActivo ? 'activo' : ''}`} // VE SI EL TAG ITERADO Y EL TAG ACTIVO SON IGUALES Y LE PASA LA CLASE tag-btn A CSS PARA PINTAR ESE BOTON
          onClick={() => onSeleccionar(tag)} // PASA EL NOMBRE DEL TAG SELECCIONADO A LISTADO
        >
          {tag} {/* MUESTRA EN EL BOTON EL NOMBRE DEL TAG */}
        </button>
      ))}
    </section>
  );
}

export default FiltroTags;