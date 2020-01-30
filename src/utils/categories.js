import { validateImage } from "./validate";
import setApi from "../api";

export function getCategories(cb) {
  setApi()
    .get("/categories")
    .then(response => {
      cb(null, response.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}

export function deleteCategory(id, cb) {
  setApi()
    .delete(`/categories/${id}`)
    .then(response => {
      cb(null, response.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}

export function editCategory(
  id,
  { name, description, file, sets, getItens, close },
  cb
) {
  if (validateImage(["png"], 100, file)) {
    if (file) {
      const formData = new FormData();
      formData.append("icon", file);
      setApi()
        .put(
          `/categories/${id}?name=${name}&description=${description}`,
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
        .put(`/categories/${id}?name=${name}&description=${description}`)
        .then(response => {
          cb(null, response.data);
        })
        .catch(err => {
          cb(err.response ? err.response.data : err.toString());
        });
    }
  } else {
    cb("Suba imagens PNG com no máximo 100KB");
  }
}
