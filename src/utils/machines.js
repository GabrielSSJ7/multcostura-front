import setApi from "../api";

export function getMachines(cb) {
  setApi()
    .get("/machine")
    .then(response => {
      cb(null, response.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}
