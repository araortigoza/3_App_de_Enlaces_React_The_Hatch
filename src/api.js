// SE GUARDA LA URL DEL BACKEND
const API_URL = 'http://localhost:4000/api';

// FUNCION PARA CONSULTAR LINKS
export async function getLinks(tag) {
  const url = tag ? `${API_URL}/links?tag=${tag}` : `${API_URL}/links`; // PREPARA LA URL CON LA CONSULTA SEGUN HAYA ALGUN FILTRO MARCADO O NO
  const respuesta = await fetch(url); // SE REALIZA LA CONSULTA CON FETCH AL BACKEND Y LA GUARDA EN RESPUESTA
  return respuesta.json(); // SE RETORNA RESPUESTA
}

// FUNCION PARA CONSULTAR LINKS POR ID
export async function getLinkById(id) {
  const respuesta = await fetch(`${API_URL}/links/${id}`); // SE REALIZA LA CONSULTA PASANDOLE EL ID DEL LINK Y SE GUARDA EN RESPUESTA
  return respuesta.json(); // SE RETORNA RESPUESTA
}

// FUNCION PARA REALIZAR PETICION QUE CREA UN LINK
export async function createLink(datos) {
  // SE ENVIA LA PETICION CON EL METODO, HEADER Y DATOS CORRESPONDIENTES PARA CREAR EL LINK Y SE GUARDA EN RESPUESTA
  const respuesta = await fetch(`${API_URL}/links`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  return respuesta.json(); // SE RETORNA RESPUESTA
}

// FUNCION PARA REALIZAR PETICION QUE VOTA UN LINK POR ID
export async function voteLink(id) {
  // SE ENVIA LA PETICION CON EL METODO Y ID CORRESPONDIENTE PARA VOTAR UN LINK
  const respuesta = await fetch(`${API_URL}/links/${id}/vote`, {
    method: 'POST'
  });
  return respuesta.json(); // SE RETORNA RESPUESTA
}

// FUNCION PARA CONSULTAR COMENTARIOS DE UN LINK POR SU ID
export async function getComments(id) {
  const respuesta = await fetch(`${API_URL}/links/${id}/comments`); // SE REALIZA LA CONSULTA PASANDOLE EL ID DEL LINK Y SE GUARDA EN RESPUESTA
  return respuesta.json(); // SE RETORNA RESPUESTA
}

// FUNCION PARA REALIZAR PETICION QUE CREA UN NUEVO COMENTARIO A UN LINK
export async function createComment(id, datos) {
  // SE ENVIA LA PETICION CON EL METODO, HEADER Y DATOS CORRESPONDIENTES PARA CREAR UN COMENTARIO A UN LINK ESPECIFICO
  const respuesta = await fetch(`${API_URL}/links/${id}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  return respuesta.json(); // SE RETORNA RESPUESTA
}