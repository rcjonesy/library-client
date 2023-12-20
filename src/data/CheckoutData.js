const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
  return fetch(_apiUrl).then((res) => res.json());
};

export const newCheckout = (checkoutObj) => {
    console.log(checkoutObj)
    return fetch("/api/checkouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(checkoutObj),
    }).then((res) => res.json());
  };

  export const getOverdue = () => {
    return fetch(`${_apiUrl}/overdue`).then((res) => res.json());
  }


