import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import {
  Input,
  TextArea,
  Button,
  Select,
  UploadImageContainer
} from "../../../static/styled-components/base";

import { getOptions, addTool } from "../../../utils/tools";
import { changeFileName, validateImage } from "../../../utils/images";

import FileInput from "../../utils/FileInput";

export default function AddTool() {
  const imageMessageError = `Extensão do arquivo enviado é inválido. Extensões permitidas ${process.env.imageExtensionPermitted.toString()}, com no máximo 10MB`
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [description, setDescription] = useState("");
  const [mainFeatures, setMainFeatures] = useState("");
  const [category, setCategory] = useState("");
  const [specifications, setSpecifications] = useState({});

  const [snackBar, setSnackBar] = useState({
    result: "success",
    open: false,
    message: ""
  });

  function handleClose() {
    setSnackBar({
      ...snackBar,
      open: false
    });
  }

  const [manufacturers, setManufacturers] = useState([]);
  useEffect(() => {
    function asyncFunc() {
      getOptions(function(err, response) {
        if (err) {
          setSnackBar({
            ...snackBar,
            open: false
          });
          return;
        }

        setManufacturers(response.manufacturers.data);
      });
    }
    asyncFunc();
  }, []);

  const [toolFiles, setToolFiles] = useState({
    toolFile1: null,
    toolFile2: null,
    toolFile3: null,
    toolFile4: null,
    toolFile5: null
  });

  function toolHandleChange(e) {
    if (validateImage(process.env.imageExtensionPermitted, 10000, e.target.files[0])) {
      const newName = parseInt(e.target.name[e.target.name.length - 1]) - 1;
      setToolFiles({
        ...toolFiles,
        [e.target.name]: changeFileName(e.target.files[0], newName)
      });
    } else {
      setSnackBar({
        open: true,
        result: 'error',
        message: imageMessageError
      })
    }
  }

  function toolCleanFileInput(name) {
    setToolFiles({
      ...toolFiles,
      [name]: null
    });
  }


  return (
    <>
      <h3 className="main-title" style={{ color: "rgb(129, 22, 27)" }}>
        Adicionar nova peça
      </h3>
      <div>
        <Snackbar
          open={snackBar.open}
          autoHideDuration={3500}
          onClose={handleClose}
        >
          <Alert severity={snackBar.result}>{snackBar.message}</Alert>
        </Snackbar>
        <Input
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <Input
          placeholder="Subtítulo"
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
        <TextArea
          placeholder="Características"
          onChange={e => setMainFeatures(e.target.value)}
          value={mainFeatures}
          rows="5"
        />
        <h3
          className="main-title"
          style={{
            textAlign: "center",
            color: "rgb(129, 22, 27)"
          }}
        >
          Fabricante
        </h3>
        <Row>
          <Select
            value={manufacturer}
            onChange={e => setManufacturer(e.target.value)}
          >
            <option value="">Escolha um fabricante</option>
            {manufacturers.map(manufacturer => (
              <option value={manufacturer.id}>{manufacturer.name}</option>
            ))}
          </Select>
        </Row>
        <h3
          className="main-title"
          style={{
            textAlign: "center",
            color: "rgb(129, 22, 27)"
          }}
        >
          Fotos do produto
        </h3>
        <Row style={{ margin: "30px 0 ", justifyContent: "center" }}>
          <ImageContainer>
            <FileInput
              handleChange={toolHandleChange}
              labelInputFile="Imagem principal"
              id="toolFile1"
              name="toolFile1"
              file={toolFiles.toolFile1}
              cleanFileInput={() => toolCleanFileInput("toolFile1")}
            />
          </ImageContainer>
        </Row>
        <Row style={{ flexWrap: "wrap", justifyContent: "center" }}>
          <ImageContainer>
            <FileInput
              handleChange={toolHandleChange}
              labelInputFile="Imagem 2"
              id="toolFile2"
              name="toolFile2"
              file={toolFiles.toolFile2}
              cleanFileInput={() => toolCleanFileInput("toolFile2")}
            />
          </ImageContainer>
          <ImageContainer >
            <FileInput
              handleChange={toolHandleChange}
              labelInputFile="Imagem 3"
              id="toolFile3"
              name="toolFile3"
              file={toolFiles.toolFile3}
              cleanFileInput={() => toolCleanFileInput("toolFile3")}
            />
          </ImageContainer>
          <ImageContainer >
            <FileInput
              handleChange={toolHandleChange}
              labelInputFile="Imagem 4"
              id="toolFile4"
              name="toolFile4"
              file={toolFiles.toolFile4}
              cleanFileInput={() => toolCleanFileInput("toolFile4")}
            />
          </ImageContainer>
          <ImageContainer>
            <FileInput
              handleChange={toolHandleChange}
              labelInputFile="Imagem 5"
              id="toolFile5"
              name="toolFile5"
              file={toolFiles.toolFile5}
              cleanFileInput={() => toolCleanFileInput("toolFile5")}
            />
          </ImageContainer>
        </Row>
      </div>

      <Button
        onClick={() =>
          addTool({
            name,
            manufacturer,
            description,
            mainFeatures,
          }, toolFiles, function (err, data) {
            if (err) {
              setSnackBar({
                result: 'error',
                message: err,
                open: true
              })
              return;
            }
            setSnackBar({
              result: 'success',
              message: 'Peça criada com sucesso',
              open: true
            })

            cleanForm()
          })
        }
      >
        Adicionar peça
      </Button>
    </>
  );

  function cleanForm() {
    setName("");
    setDescription("");
    setManufacturer("");
    setMainFeatures("");
    setToolFiles({
      toolFile1: null,
      toolFile2: null,
      toolFile3: null,
      toolFile4: null,
      toolFile5: null,
    })
  }
}

export const ImageContainer = styled.div`
  margin: 10px;
  label {
    width: 100%;
    height: 100%;
  }
  .div-file-input {
    height: auto;
    width: 200px;
  }
  .image-container {
    width:100%;
    height:auto;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  input {
    margin-right: 5px;
  }
  select {
    margin-right: 5px;
  }
`;
