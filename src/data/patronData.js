const _apiUrl = "/api/patrons";

export const getPatrons = () => {
    return fetch(_apiUrl).then((r) => r.json());
};

export const getPatronsDetails = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
};

export const EditPatronDetails = (id, patronObj) => {

    return fetch(`${_apiUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patronObj),
    })
};

export const DeactivatePatron = (id) => {
    fetch(`${_apiUrl}/${id}/deactivate`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" }
    });
};

export const ActivatePatron = (id) => {
    fetch(`${_apiUrl}/${id}/activate`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" }
    });
};

