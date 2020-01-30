import setApi from "../api";
import { fieldValidation, validateImage } from "../utils/validate";

export function getMachines(cb, data) {
  const filter = data ? data : {}
  setApi()
    .get(`/machine?category=${filter.category}&manufacturer=${filter.manufacturer}&search=${filter.search}`)
    .then(response => {
      cb(null, response.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}

export function getMachine(id, cb) {
  setApi()
    .get(`/machine/${id}`)
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

export async function updateMachine(
  machine,
  machineFiles,
  sewingFile,
  prodRefFiles,
  cb
) {
  console.log(sewingFile);

  const {
    id,
    name,
    description,
    mainFeatures,
    specifications,
    category,
    manufacturer
  } = machine;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("mainFeatures", mainFeatures);
  formData.append("specifications", JSON.stringify(specifications));
  formData.append("category", category);
  formData.append("manufacturer", manufacturer);
  const machineFilesKeys = Object.keys(machineFiles);
  machineFilesKeys.forEach(mkey => {
    formData.append("machines", machineFiles[mkey]);
  });
  formData.append("sewingType", sewingFile);
  const prodRefFilesKeys = Object.keys(prodRefFiles);
  prodRefFilesKeys.forEach(prfkey => {
    formData.append("productReferences", prodRefFiles[prfkey]);
  });

  setApi()
    .put("/machine/" + id, formData)
    .then(response => {
      cb(null, response.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}

export function addMachine(
  machine,
  machineFiles,
  sewingTypeFile,
  refProdFiles,
  cb
) {
  const formData = new FormData();
  const machineFilesKeys = Object.keys(machineFiles);
  let hasError = [false, false, false];
  machineFilesKeys.forEach(mkey => {
    hasError[0] = !validateImage(
      ["png", "jpg", "jpeg", "svg", "gif", "webp"],
      10000,
      machineFiles[mkey]
    );
    formData.append("machines", machineFiles[mkey]);
  });

  const refProdFilesKey = Object.keys(refProdFiles);
  refProdFilesKey.forEach(rfKey => {
    hasError[1] = !validateImage(
      ["png", "jpg", "jpeg", "svg", "gif", "webp"],
      10000,
      refProdFiles[rfKey]
    );

    formData.append("productReferences", refProdFiles[rfKey]);
  });

  hasError[2] = !validateImage(
    ["png", "jpg", "jpeg", "svg", "gif", "webp"],
    10000,
    sewingTypeFile
  );

  if (hasError.includes(true)) {
    return cb(
      "Você precisa subir imagens png, jpg, jpeg, svg, gif, webp com no máximo 10MB"
    );
  }

  const fieldError = fieldValidation({
    nome: machine.name,
    fabricante: machine.manufacturer,
    subtítulo: machine.description,
    categoria: machine.category,
    características: machine.mainFeatures
  });
  if (fieldError.return) {
    formData.append("name", machine.name);
    formData.append("manufacturer", machine.manufacturer);
    formData.append("description", machine.description);
    formData.append("category", machine.category);
    formData.append("mainFeatures", machine.mainFeatures);
    formData.append("specifications", JSON.stringify(machine.specifications));
    setApi()
      .post(`machine`, formData)
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

export function deleteMachine(id, cb) {
  setApi()
    .delete(`/machine/${id}`)
    .then(response => {
      cb(null, response.data);
    })
    .catch(err => {
      cb(err.response ? err.response.data : err.toString());
    });
}
