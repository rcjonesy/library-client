const _apiUrl = "/api/materials";

export const getMaterials = (materialTypeId, genreId) => {
  let apiUrl = _apiUrl;
 
  if (materialTypeId !== '' && genreId !== '') {
  apiUrl += `?materialTypeId=${materialTypeId}&genreId=${genreId}`;
  } else if (materialTypeId !== '') {
  apiUrl += `?materialTypeId=${materialTypeId}`;
  } else if (genreId !== '') {
  apiUrl += `?genreId=${genreId}`;
  } else {
  apiUrl = _apiUrl;
  }
 
  return fetch(apiUrl).then((r) => r.json());
 };
//export a function here that gets a ticket by id
export const getMaterial = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

export const createMaterial = (material) => {
  return fetch(_apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(material),
  }).then((res) => res.json());
};

// Update the client-side function to handle the asynchronous operation properly
export const UpdateCirculation = (id) => {
  return fetch(`/api/materials/${id}/soft-delete`, {
    method: 'PUT'
  });
};

export const ReturnMaterial = (id) => {
  return fetch(`api/materials/return/${id}`, {
    method: "PUT"
  })
}

export const getNotCheckedOut = () => {
  return fetch(`${_apiUrl}/available`).then((r) => r.json())
}