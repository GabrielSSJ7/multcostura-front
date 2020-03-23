import setApi from "../api";

export function saveSlide(id, images, files, type, cb) {
  const formData = new FormData();
  files.forEach(file => {
    if (typeof file == "object") formData.append("img", file);
  });
  formData.append("id", id);
  formData.append("images", JSON.stringify(images));
  formData.append("type", type);
  setApi()
    .post("/banner", formData)
    .then(res => cb(null, res.data))
    .catch(err => cb(err.response ? err.response.data : err.toString()));
}

export function getSlide(route, id, cb) {
  setApi()
    .get(`/${route}${id ? "/" + id : ""}`)
    .then(response => {
      cb(null, response.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}

export function getBannerFixed(type, cb) {
  setApi()
    .get(`/institutional/${type}`)
    .then(response => {
      console.log("r =>   ", response.data);

      cb(null, response.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}

export function saveBannerFixed(type, file, cb) {
  const formData = new FormData();
  formData.append("img", file);
  formData.append("type", type);
  setApi()
    .post(`/institutional`, formData)
    .then(response => {
      cb(null, response.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}

export function deleteBannerFixed(type, cb) {
  setApi()
    .delete("/institutional/" + type)
    .then(r => {
      cb(null, r.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}
