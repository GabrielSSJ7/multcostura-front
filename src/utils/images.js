import axios from "axios";

module.exports = {
  changeFileName(file, newName) {
    if (file) {
      var blob = file.slice(0, file.size, "image/png");
      const typeFile = file.type.split("/");
      const newFile = new File([blob], `${newName}.${typeFile[1]}`, {
        type: file.type
      });
      return newFile;
    }

  },
  deleteImage(id, type, image, { f, files, keys }, cleanUpFile) {
    axios
      .delete(`/images?id=${id}&type=${type}&image=${image}`)
      .then(response => {
        cleanUpFile(f, files, keys);
        location.reload();
      })
      .catch(err => {});
  },
  renderInputOrImages(images, objLength, _exclude) {
    const _images = [];
    const exclude = _exclude || [];
    for (let x = 0; x < objLength; x++) {
      let isNull = true;
      images.forEach((img, i) => {
        let snBar = img.split("/");
        let sn = snBar[snBar.length - 1];
        if (!exclude.includes(x)) {
          if (x == sn[0]) {
            isNull = false;
            _images.push(img);
          }
        } else {
          isNull = false;
        }
      });
      if (isNull) _images.push(null);
    }
    return _images;
  },
  validateImage(types, size, file) {
    if (!file) return true;
    let ok = false,
      filesize = size / 1000;
    const fileType = file.type.split("/");

    types.forEach(types => {
      if (types == fileType[1]) ok = true;
    });
    if (filesize > 100) ok = false;
    if (ok) return true;
    else return false;
  },
  getNameImageFromUrl(url) {
    const splitted = url.split("/");
    const image = splitted[splitted.length - 1];
    const imageSplitted = image.split(".");
    return imageSplitted[0];
  }
};
