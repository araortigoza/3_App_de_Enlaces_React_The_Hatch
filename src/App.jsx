import { useState } from 'react';
import Header from './components/Header.jsx';
import Listado from './views/Listado.jsx';
import Detalle from './views/Detalle.jsx';

// COMPONENTE RAIZ
function App() {
  const [vista, setVista] = useState('listado'); // GUARDA EL NOMBRE DE LA VISTA ACTIVA
  const [linkIdActivo, setLinkIdActivo] = useState(null); // GUARDA EL ID DEL LINK QUE EL USUARIO QUIERA VER, INICIA EN NULL PORQUE AL CARGAR LA APP NO HAY LINK SELECCIONADO 

  // FUNCION PARA MANEJAR LAS TRANSICIONES DE VISTA
  const irAListado = () => {
    setVista('listado'); // CAMBIA LA VISTA AL DEL LISTADO
    setLinkIdActivo(null); // RESETEA EL ID A NULL
  };

  // FUNCION PARA MANEJAR LAS TRANSICIONES DE VISTA
  const irADetalle = (id) => {
    setLinkIdActivo(id); // ACTUALIZA EL ID DEL LINK SELECCIONADO POR EL USUARIO
    setVista('detalle'); // CAMBIA LA VISTA AL DEL DETALLE DEL LINK
  };

  // 28: PASA LA FUNCION IrAListado COMO UNA PROP LLAMADA onClickLogo - EL HEADER INVOCARA ESA FUNCION UNA VEZ SE LE DE CLIC
  // 29: SI LA VISTA ES LISTADO, SE RENDERIZA A DETALLE
  // 30: SI LA VISTA ES DETALLE SE LE PASA EL LINK Y EL BOTON DE VOLVER PARA RENDERIZAR A LISTADO DE NUEVO
  return (
    <>
      <Header onClickLogo={irAListado} />
      {vista === 'listado' && <Listado onSeleccionarLink={irADetalle} />}
      {vista === 'detalle' && <Detalle linkId={linkIdActivo} onVolver={irAListado} />}
    </>
  );
}

export default App;