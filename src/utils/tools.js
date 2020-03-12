import setApi from "../api";
import { fieldValidation, validateImage } from "../utils/validate";

export function getTools(cb, data) {
  const filter = data ? data : {}
  setApi()
    .get(`/tools?search=${filter.search}`)
    .then(response => {
      cb(null, response.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}

export function getTool(id, cb) {
  setApi()
    .get(`/tools/${id}`)
    .then(response => {
      cb(null, response.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}

export async function getOptions(cb) {
  try {
    const manufacturers = await setApi().get("/manufacturer");
    const categories = await setApi().get("/categories");
    cb(null, { manufacturers, categories });
  } catch (e) {
    cb(e);
  }
}

export function deleteImage(id, type, image, cb) {
  setApi()
    .delete(`/images?id=${id}&type=${type}&image=${image}`)
    .then(response => {
      cb(null);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}

export async function updateTool(
  tool,
  toolFile,
  cb
) {

  const {
    id,
    name,
    description,
    mainFeatures,
    manufacturer
  } = tool;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("mainFeatures", mainFeatures);
  formData.append("manufacturer", manufacturer);
  const toolFileKeys = Object.keys(toolFile);
  toolFileKeys.forEach(mkey => {
    formData.append("toolsFiles", toolFile[mkey]);
  })
  setApi()
    .put("/tools/" + id, formData)
    .then(response => {
      cb(null, response.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}

export function addTool(
  tool,
  toolFiles,
  cb
) {
  const formData = new FormData();
  const toolFilesKeys = Object.keys(toolFiles);
  let hasError = [false];
  toolFilesKeys.forEach(mkey => {
    hasError[0] = !validateImage(
      ["png", "jpg", "jpeg", "svg", "gif", "webp"],
      10000,
      toolFiles[mkey]
    );
    formData.append("toolsFiles", toolFiles[mkey]);
  });

  if (hasError.includes(true)) {
    return cb(
      "Você precisa subir imagens png, jpg, jpeg, svg, gif, webp com no máximo 10MB"
    );
  }

  const fieldError = fieldValidation({
    nome: tool.name,
    subtítulo: tool.description,
  });
  if (fieldError.return) {
    formData.append("name", tool.name);
    formData.append("manufacturer", tool.manufacturer);
    formData.append("description", tool.description);
    formData.append("mainFeatures", tool.mainFeatures);
    setApi()
      .post(`tools`, formData)
      .then(response => {
        cb(null, response.data);
      })
      .catch(err => {
        cb(err.response ? err.response.data : err.toString());
      });
  } else {
    return cb(`${fieldError.message} ${fieldError.field}`);
  }
}

export function deleteTool(id, cb) {
  setApi()
    .delete(`/tools/${id}`)
    .then(response => {
      cb(null, response.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}
