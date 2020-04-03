import setApi from "../api";
import { validateImage } from '../utils/validate'

export function getManufacturers(cb) {
  setApi()
    .get("/manufacturer")
    .then(response => {
      cb(null, response.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}



export function deleteManufacturer(id, cb) {
    setApi()
      .delete(`/manufacturer/${id}`)
      .then(response => {
        cb(null, response.data);
      })
      .catch(err => {
        cb(err.response ? err.response.data : err.toString());
      });
  }
  
  export function editManufacturer(
    id,
    { name, description, file, sets, getItens, close },
    cb
  ) {
    console.log("manufacturer")
    if (validateImage(["png", "jpg", "svg", "JPG", "jpeg", "webp", "gif", "tiff"], 10000, file)) {
      if (file) {
        const formData = new FormData();
        formData.append("logo", file);
        setApi()
          .put(
            `/manufacturer/${id}?name=${name}&description=${description}`,
            formData
          )
          .then(response => {
            cb(null, response.data);
          })
          .catch(err => {
            cb(err.response ? err.response.data : err.toString());
          });
      } else {
        setApi()
          .put(`/manufacturer/${id}?name=${name}&description=${description}`)
          .then(response => {
            cb(null, response.data);
          })
          .catch(err => {
            cb(err.response ? err.response.data : err.toString());
          });
      }
    } else {
      cb("Suba imagens PNG, JPG, SVG, JPEG, WEBP, GIF, TIFF com no máximo 10MB");
    }
  }
  
