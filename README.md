# Votely - Frontend React

Frontend hecho en React (con Vite) para la app de organización de enlaces Votely. Consume la misma API del backend que la versión Vanilla JS.

## Requisitos

Este frontend no incluye el backend, que vive en su propio repositorio. Antes de usar esta app:

1. Cloná y corré el backend de Votely: https://github.com/araortigoza/3_App_de_Enlaces_Backend_The_Hatch (seguí las instrucciones de su propio README)
2. Confirmá que quedó corriendo en `http://localhost:4000`
3. Node.js instalado

## Instalación y ejecución

1. Cloná el repositorio y entrá a la carpeta:

```bash
git clone https://github.com/araortigoza/3_App_de_Enlaces_React_The_Hatch
cd <nombre-de-la-carpeta-clonada>
```

2. Instalá las dependencias:

```bash
npm install
```

3. Levantá el servidor de desarrollo:

```bash
npm run dev
```

4. Abrí la URL que te indique la terminal (por defecto `http://localhost:5173`).

## Funcionalidad

- Ver el listado de enlaces, ordenados de mayor a menor cantidad de votos
- Filtrar enlaces por etiqueta
- Agregar un enlace nuevo con título, url y etiquetas
- Ver el detalle de un enlace, votarlo y comentarlo

## Estructura del proyecto

```
.
├── index.html
├── public/
│   └── favicon.webp
└── src/
    ├── main.jsx          Punto de entrada
    ├── App.jsx           Maneja que vista se muestra
    ├── api.js            Funciones de conexion al backend
    ├── styles.css
    ├── components/
    │   ├── Header.jsx
    │   ├── FormularioLink.jsx
    │   ├── FiltroTags.jsx
    │   ├── TarjetaLink.jsx
    │   ├── FormularioComentario.jsx
    │   └── ListaComentarios.jsx
    └── views/
        ├── Listado.jsx    Vista de listado y filtro por tags
        └── Detalle.jsx    Vista de detalle, votos y comentarios
```

## Cómo funciona la navegación

No se usa ninguna libreria de routing. `App.jsx` guarda en estado (`useState`) que vista mostrar (listado o detalle) y que enlace esta activo. Cada componente recibe funciones como props para avisarle al padre cuando el usuario hace una accion (seleccionar un enlace, volver, votar, comentar).
