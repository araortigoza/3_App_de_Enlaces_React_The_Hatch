function FiltroTags({ tags, tagActivo, onSeleccionar }) {
  return (
    <section className="filtros">
      <button
        className={`tag-btn ${!tagActivo ? 'activo' : ''}`}
        onClick={() => onSeleccionar(null)}
      >
        Todos
      </button>
      {tags.map(tag => (
        <button
          key={tag}
          className={`tag-btn ${tag === tagActivo ? 'activo' : ''}`}
          onClick={() => onSeleccionar(tag)}
        >
          {tag}
        </button>
      ))}
    </section>
  );
}

export default FiltroTags;