const _apiUrl = "/api/materials";

export const getMaterials = () => {
  return fetch(_apiUrl).then((r) => r.json());
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