import setApi from "../api";

export function getResellers(callback) {
  setApi()
    .get("/reseller")
    .then(response => {
      callback(null, response.data);
    })
    .catch(err => {
      callback(err);
    });
}

export function deleteReseller(id, callback) {
  setApi()
    .delete(`/reseller/${id}`)
    .then(response => {
      callback(null, response.data);
    })
    .catch(err => {
      callback(err.response ? err.response.data : err.toString());
    });
}

export function editReseller(id, data, callback) {
  setApi()
    .put(`/reseller/${id}`, data)
    .then(response => {
      callback(null, response.data);
    })
    .catch(err => {
      callback(err.response ? err.response.data : err.toString());
    });
}
