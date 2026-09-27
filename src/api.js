const API_URL = 'http://localhost:4000/api';

export async function getLinks(tag) {
  const url = tag ? `${API_URL}/links?tag=${tag}` : `${API_URL}/links`;
  const respuesta = await fetch(url);
  return respuesta.json();
}

export async function getLinkById(id) {
  const respuesta = await fetch(`${API_URL}/links/${id}`);
  return respuesta.json();
}

export async function createLink(datos) {
  const respuesta = await fetch(`${API_URL}/links`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  return respuesta.json();
}

export async function voteLink(id) {
  const respuesta = await fetch(`${API_URL}/links/${id}/vote`, {
    method: 'POST'
  });
  return respuesta.json();
}

export async function getComments(id) {
  const respuesta = await fetch(`${API_URL}/links/${id}/comments`);
  return respuesta.json();
}

export async function createComment(id, datos) {
  const respuesta = await fetch(`${API_URL}/links/${id}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  });
  return respuesta.json();
}