export function validateImage(types, size, file) {
  if (!file) return true;
  let ok = false,
    filesize = size / 1000;
  const fileType = file.type.split("/");

  types.forEach(types => {
  	console.log(types, fileType[1])
    if (types == fileType[1]) ok = true;
  });
  if (filesize > 100) ok = false;
  if (ok) return true;
  else return false;
}


export function fieldValidation(object) {
	let _return = { return: true, message: "", field: "" };
	let hasError = false
	Object.keys(object).forEach(function(key) {
		if (!hasError)
		if (!object[key]) {
			hasError = true
			_return = { return: false, message: "Campo vazio: ", field: key };
		}
	});
	return _return;
}

