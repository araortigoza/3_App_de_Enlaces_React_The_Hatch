import React from 'react'; // SE IMPORTA REACT PARA UTILIZAR REACT.STRCITMODE
import ReactDOM from 'react-dom/client'; // SE IMPORTA EL PAQUETE ESPECIFICO DE CLIENTE
import App from './App.jsx'; // SE IMPORTA APP
import './styles.css'; // SE IMPORTA CSS PARA ESTILOS

// SE SELECCIONA ROOT DEL HTML Y SE CREA UN CONTENEDOR RAIZ DE REACT PARA INICIALIZAR Y RENDERIZAR A APP
ReactDOM.createRoot(document.getElementById('root')).render(
  // COMPONENTE DE ENVOLTURA - EJECUTA DOBLEMENTE LOS RENDERIZADOS PARA DETECTAR ERRORES
  <React.StrictMode>
    <App />
  </React.StrictMode>
);