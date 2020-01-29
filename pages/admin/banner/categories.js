import React, { useState, useEffect } from "react";
import styled from "styled-components";
import router from "next/router";
import Template from "../../../src/components/templates/Admin";
import Sidebar from "../../../src/components/admin/Sidebar";
import Slide from "../../../src/components/utils/Slider";
import {
  Container,
  Button,
  Select,
  Hr
} from "../../../src/static/styled-components/base";
import FileInput from "../../../src/components/utils/FileInput";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import imageNotFound from "../../../src/static/images/image-404.jpg";

export default function BannerCategories() {
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
    setImages([...images, imageNotFound]);
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
    setSlideControl(images.length + 1);
    setSnackBar({
      open: true,
      result: "success",
      message: "Banner adicionado a lista"
    });
  }

  function changeBannerImage(file, index) {
    setImages(images =>
      images.map((image, ind) => {
        if (ind == index) {
          return file ? URL.createObjectURL(file) : imageNotFound;
        }
        return image;
      })
    );
    const _files = files;
    _files[index] = file;
    setFiles(_files);
    setSlideControl(index + 1);
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
    setSlideControl(id == 0 ? id + 1 : id);
    setSnackBar({
      open: true,
      result: "success",
      message: "Banner removido da lista"
    });
  }

  useEffect(() => {
    setName(router.query.name);
    return () => {};
  }, []);

  return (
    <Template>
      <Sidebar />
      <Snackbar
        open={snackBar.open}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert severity={snackBar.result}>{snackBar.message}</Alert>
      </Snackbar>
      <Container>
        <Column>
          <h1
            className="main-title"
            style={{
              textAlign: "center",
              color: "rgb(35,43,111)"
            }}
          >
            Slide categoria ({name})
          </h1>
          <Hr />

          <Row w="100%" align="center">
            <Column style={{ width: "100%" }}>
              <div
                style={{
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                {images.length == 0 ? (
                  <>
                    <p>Você não adicionou nenhum banner a lista de banners.</p>
                    <p>
                      Clique no botão{" "}
                      <strong>"Adicionar banner a lista"</strong>.
                    </p>
                  </>
                ) : (
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
                          console.log(typeof sl);

                          if (sl == images.length) return 1;
                          return sl + 1;
                        });
                      }}
                    />
                    <Slide
                      slideCtrl={slideControl}
                      images={images}
                      height="400px"
                      slideWidth="100%"
                    />
                  </div>
                )}
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
                        id == slideControl - 1 ? "2px solid #960d03" : "2px solid transparent"
                      }`
                    }}
                    onClick={() => {
                      setSlideControl(parseInt(id + 1));
                    }}
                  >
                    <img src={image} style={{ width: "100%" }} />
                  </ThumbnailBanner>
                ))}
              </div>

              <h2 style={{ textAlign: "center" }}>
                Posição do banner {slideControl}
              </h2>
              <h4 style={{ textAlign: "center" }}>
                Total de banners {inputs.length}
              </h4>
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
                <Button
                  style={{ width: "30%" }}
                  onClick={() => removeSlide(slideControl - 1)}
                >
                  Remover banner
                </Button>
              </div>

              <Button
                style={{ width: "50%", margin: "15px auto", display: "block" }}
                onClick={addSlide}
              >
                Adicionar banner a lista
              </Button>
              <div style={{ width: "50%", display: "block", margin: "0 auto" }}>
                <p>Trocar de banner:</p>
              </div>
              <Select
                style={{ width: "50%", margin: "0 auto", cursor: "pointer" }}
                value={slideControl}
                onChange={e => {
                  setSlideControl(parseInt(e.target.value));
                }}
              >
                {images.map((e, i) => (
                  <option value={i + 1}>Banner {i + 1}</option>
                ))}
              </Select>
            </Column>
          </Row>
        </Column>
      </Container>
    </Template>
  );
}

function InputUpload({ id, handleChange, file }) {
  return (
    <div>
      <input
        type="file"
        onChange={handleChange}
        value={file}
        id={id}
        style={{ width: 0 }}
      />
      <label htmlFor={id} style={{ width: "120px", border: "1px solid black" }}>
        Upload
      </label>
    </div>
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

BannerCategories.getInitialProps = async ({ query }) => {
  return { category: query.category, categoryName: query.name };
};

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

export const ImageContainer = styled.div`
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
