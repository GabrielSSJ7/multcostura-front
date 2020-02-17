import React, { useState, useEffect } from "react";
import styled from "styled-components";
import router from "next/router";
import Template from "../../templates/Admin";
import Sidebar from "../Sidebar";
import Slide from "../../utils/Slider";
import {
  Container,
  Button,
  Select,
  Hr
} from "../../../static/styled-components/base";
import FileInput from "../../utils/FileInput";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { changeFileName, validateImage } from "../../../utils/images";
import { saveSlide, getSlide } from "../../../utils/banner";

import imageNotFound from "../../../static/images/image-404.jpg";

export default function HomeBanner() {
  const imageMessageError = `Extensão do arquivo enviado é inválido. Extensões permitidas ${process.env.imageExtensionPermitted.toString()}, com no máximo 10MB`
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [files, setFiles] = useState([]);
  const [slideControl, setSlideControl] = useState(1);
  const [snackBar, setSnackBar] = useState({
    result: "success",
    open: false,
    message: ""
  });

  function handleChange(e, inputIndex) {
    changeBannerImage(e.target.files[0], inputIndex);
  }

  function addSlide() {
    const inputIndex = images.length;
    setImages([...images, { image: imageNotFound, pos: inputIndex, name: "" }]);
    setInputs([
      ...inputs,
      <FileInput
        type="file"
        handleChange={e => handleChange(e, inputIndex)}
        labelInputFile={`Enviar Imagem`}
        maxWidth="50%"
        labelHeight="50px"
        labelWidth="150px"
        id={inputIndex}
        key={inputIndex}
      />
    ]);
    files.push(null);
    setFiles(files);
    setSlideControl(images.length + 1);
    setSnackBar({
      open: true,
      result: "success",
      message: "Banner adicionado a lista"
    });
  }

  function changeBannerImage(file, index) {
    console.log("index", index)
    console.log(file)
    if (validateImage(process.env.imageExtensionPermitted, 10000, file)) {
      const newFile = changeFileName(
        file,
        Math.round(Math.random() * 100000 + 1) + "" + Date.now()
      );

      setImages(images =>
        images.map((image, ind) => {
          if (image.pos == index) {
            return file
              ? {
                  image: URL.createObjectURL(file),
                  pos: index,
                  name: newFile.name
                }
              : { image: imageNotFound, pos: index, name: file.name };
          }
          return image;
        })
      );
      const _files = files;
      _files[index] = newFile;
      setFiles(_files);
      setSlideControl(index + 1);
    } else {
      setSnackBar({
          open: true,
          result: 'error',
          message: imageMessageError
        })
    }
  }

  function handleClose() {
    setSnackBar({
      ...snackBar,
      open: false
    });
  }

  function removeSlide(id) {
    setImages(images => {
      images.splice(id, 1);
      return images;
    });
    setInputs(inputs => {
      inputs.splice(id, 1);
      return inputs;
    });
    setFiles(files => {
      files.splice(id, 1);
      return files;
    });
    setSlideControl(id == 0 ? id + 1 : id);
    setSnackBar({
      open: true,
      result: "success",
      message: "Banner removido da lista"
    });
  }

  useEffect(() => {
    setName(router.query.name);
    function asyncFunc() {
    getSlide("institutional", "homeBanners", function(err, response) {
      console.log("getSlide",response)
        if (err) {
          setSnackBar({
            open: true,
            message: err,
            result: "error"
          });
          return;
        }
        const Inputs = [];
        const Files = [];
        for (let a = 0; a < response.length; a++) {
          Inputs.push(
            <FileInput
              type="file"
              handleChange={e => handleChange(e, a)}
              labelInputFile={`Enviar Imagem`}
              maxWidth="50%"
              labelHeight="50px"
              labelWidth="150px"
              id={a}
              key={a}
            />
          );
          Files.push(a + 1);
        }
        setInputs(Inputs);
        setFiles(Files);
        setImages(response.map(banner => ({ ...banner, name: banner.name })));

      });
    }

    asyncFunc();

    return () => {};
  }, []);

  function makeBannerFirst() {
    const ctrl = slideControl - 1;
    let currentBanner = images[ctrl];
    let firstBanner = images[0];
    let currentFile = files[ctrl];
    let firstFile = files[0];
    setImages(images => {
      const newImages = images;
      newImages[0] = {
        image: currentBanner.image,
        pos: 0,
        name: currentBanner.name
      };
      newImages[ctrl] = {
        image: firstBanner.image,
        pos: ctrl,
        name: firstBanner.name
      };
      return newImages;
    });
    setFiles(files => {
      const newFiles = files;
      newFiles[0] = currentFile;
      newFiles[ctrl] = firstFile;
      return newFiles;
    });
    setSlideControl(1);
  }

  function _saveSlide() {
    let hasEmptyFile = false;

    files.forEach(file => {
      if (!file) hasEmptyFile = true;
    });

    if (hasEmptyFile)
      setSnackBar({
        result: "error",
        message: "Há banners sem imagens",
        open: true
      });
    else {
      if (files.length == 0)
        return setSnackBar({
          result: "error",
          message: "Há banners sem imagens",
          open: true
        });

      saveSlide(null, images, files, "homeBanners", function(err, response) {
        if (err) {
          setSnackBar({
            result: "error",
            message: err,
            open: true
          });
          return;
        }
        setSnackBar({
          result: "success",
          message: "Sucesso",
          open: true
        });
      });
    }
  }

  return (
    <>
      <Snackbar
        open={snackBar.open}
        autoHideDuration={1500}
        onClose={handleClose}
      >
        <Alert severity={snackBar.result}>{snackBar.message}</Alert>
      </Snackbar>

      <Column>
        <Row align="center">
          <Column style={{ width: "100%" }}>
            {images.length == 0 ? (
              <>
                <div
                  style={{
                    height: "400px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <>
                    <p>
                      Você ainda não adicionou nenhum banner a lista de banners.
                    </p>
                    <p>
                      Clique no botão{" "}
                      <strong>"Adicionar banner a lista"</strong>.
                    </p>
                  </>
                </div>
              </>
            ) : (
              <>
                {slideControl - 1 != 0 ? (
                  <Button
                    style={{
                      width: "50%",
                      display: "block",
                      margin: "10px auto"
                    }}
                    onClick={makeBannerFirst}
                  >
                    Tornar este banner o principal
                  </Button>
                ) : (
                  <span style={{ width: "20px", height: "64px" }}></span>
                )}
                <div style={{ position: "relative", width: "100%" }}>
                  <ArrowLeft
                    onClick={() => {
                      setSlideControl(sl => {
                        if (sl == 1) return 1;
                        return sl - 1;
                      });
                    }}
                  />
                  <ArrowRight
                    onClick={() => {
                      setSlideControl(sl => {
                        if (sl == images.length) return 1;
                        return sl + 1;
                      });
                    }}
                  />
                  <Slide
                    slideCtrl={slideControl}
                    images={images.map(image => image.image)}
                    height="400px"
                    slideWidth="100%"
                  />
                </div>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    marginLeft: "5px",
                    padding: "2px 0"
                  }}
                >
                  {images.map((image, id) => (
                    <ThumbnailBanner
                      style={{
                        border: `${
                          id == slideControl - 1
                            ? "2px solid #960d03"
                            : "2px solid transparent"
                        }`
                      }}
                      onClick={() => {
                        setSlideControl(parseInt(id + 1));
                      }}
                    >
                      <img src={image.image} style={{ width: "100%" }} />
                    </ThumbnailBanner>
                  ))}
                </div>

                <h2 style={{ textAlign: "center" }}>
                  Posição do banner {slideControl}
                </h2>
                <h4 style={{ textAlign: "center" }}>
                  Total de banners {inputs.length}
                </h4>
              </>
            )}
          </Column>
          <Column style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              {inputs[slideControl - 1]}{" "}
              {images.length != 0 ? (
                <Button
                  style={{ width: "30%" }}
                  onClick={() => removeSlide(slideControl - 1)}
                >
                  Remover banner
                </Button>
              ) : (
                ""
              )}
            </div>

            <Button
              style={{ width: "50%", margin: "15px auto", display: "block" }}
              onClick={addSlide}
            >
              Adicionar banner a lista
            </Button>

            {images.length != 0 ? (
              <Button
                style={{
                  width: "50%",
                  margin: "15px auto",
                  display: "block"
                }}
                onClick={_saveSlide}
              >
                Salvar
              </Button>
            ) : (
              ""
            )}
          </Column>
        </Row>
      </Column>
    </>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.align};
  width: ${props => props.w};
`;

const ThumbnailBanner = styled.div`
  width: 100px;
  display: flex;
  margin-right: 5px;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const ImageContainer = styled.div`
  img {
    max-width: 120px;
  }
`;

const ArrowLeft = styled.span`
  :hover {
    opacity: 0.8;
  }
  transition: 0.2s;
  position: absolute;
  z-index: 9;
  left: 0;
  margin-left: 40px;
  cursor: pointer;
  top: 50%;
  margin-top: -10px;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 30px solid #960d03;
`;
const ArrowRight = styled.span`
  :hover {
    opacity: 0.8;
  }
  transition: 0.2s;
  position: absolute;
  z-index: 9;
  right: 0;
  margin-right: 40px;
  cursor: pointer;
  width: 0;
  height: 0;
  top: 50%;
  margin-top: -10px;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 30px solid #960d03;
`;
