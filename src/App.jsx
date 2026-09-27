import { useState } from 'react';
import Header from './components/Header.jsx';
import Listado from './views/Listado.jsx';
import Detalle from './views/Detalle.jsx';

function App() {
  const [vista, setVista] = useState('listado');
  const [linkIdActivo, setLinkIdActivo] = useState(null);

  const irAListado = () => {
    setVista('listado');
    setLinkIdActivo(null);
  };

  const irADetalle = (id) => {
    setLinkIdActivo(id);
    setVista('detalle');
  };

  return (
    <>
      <Header onClickLogo={irAListado} />
      {vista === 'listado' && <Listado onSeleccionarLink={irADetalle} />}
      {vista === 'detalle' && <Detalle linkId={linkIdActivo} onVolver={irAListado} />}
    </>
  );
}

export default App;