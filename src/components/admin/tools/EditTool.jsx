import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { Router } from "../../../../routes";

import {
  getTool,
  getOptions,
  deleteImage,
  updateTool,
  deleteTool
} from "../../../utils/tools";
import { getNameImageFromUrl, changeFileName, validateImage } from "../../../utils/images";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import FileInput from "./EditMachine/FileInput";
import Message from "../../utils/Message";

import {
  Hr,
  Input,
  TextArea,
  Select,
  Button
} from "../../../static/styled-components/base";

export default function EditMachine({ id }) {
  const imageMessageError = `Extensão do arquivo enviado é inválido. Extensões permitidas ${process.env.imageExtensionPermitted.toString()}, com no máximo 10MB`
  const dispatch = useDispatch();
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
  const [state, setState] = useState({
    name: "",
    description: "",
    mainFeatures: "",
    specifications: {},
    category: null,
    manufacturer: null,
    images: [],
    productRef: []
  });

  const [toolFiles, setToolFiles] = useState({
    toolFile1: null,
    toolFile2: null,
    toolFile3: null,
    toolFile4: null,
    toolFile5: null
  });

  const [manufacturers, setManufacturers] = useState({
    categories: [],
    manufacturers: []
  });

  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState(false);

  useEffect(() => {
    function asyncFunc() {
      getOptions(function(err, dataCb) {
        if (err) {
          setSnackBar({
            result: "error",
            message: err,
            open: true
          });
          return;
        }
        setManufacturers({
          manufacturers: dataCb.manufacturers.data,
          categories: dataCb.categories.data
        });
      });
      getTool(id, function(err, tool) {
        if (err) {
          setSnackBar({
            result: "error",
            message: err,
            open: true
          });
          return;
        }
        setState({
          ...tool,
          name: tool.name,
          description: tool.description,
          mainFeatures: tool.mainFeatures,
          manufacturer: tool.manufacturer
        });
      });
    }
    asyncFunc();
    return () => {};
  }, []);

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

  function toolCleanInput(name) {
    setToolFiles({
      ...toolFiles,
      [name]: null
    });
  }



  function renderImage(name, type) {
    let image = "";
    state[type].forEach(img => {
      const imgSplit = img.split("/");
      if (
        parseInt(name[name.length - 1]) - 1 ==
        imgSplit[imgSplit.length - 1][0]
      ) {
        image = img;
      }
    });
    return image;
  }

  return (
    <>
      {!title ? (
        <h1
          className="main-title"
          style={{
            textAlign: "center",
            color: "rgb(35,43,111)"
          }}
        >
          {state.name}
          <FontAwesomeIcon
            icon={faPencilAlt}
            style={{
              width: "16px",
              position: "absolute",
              borderRadius: "10px",
              padding: "3px",
              background: "rgb(129, 22, 27)",
              color: "white",
              marginLeft: "2%",
              top: "20px",
              cursor: "pointer",
              zIndex: "9"
            }}
            onClick={() => {
              setTitle(true);
            }}
          />
        </h1>
      ) : (
        <Input
          style={{ width: "30%", display: "block", margin: "15px auto" }}
          placeholder="Nome"
          value={state.name}
          onChange={e => setState({ ...state, name: e.target.value })}
        />
      )}
      <Hr />
      {!title ? (
        <h4
          className="main-title"
          style={{
            textAlign: "center",
            color: "grey"
          }}
        >
          {state.description}
          <FontAwesomeIcon
            icon={faPencilAlt}
            style={{
              width: "16px",
              borderRadius: "10px",
              padding: "3px",
              background: "rgb(129, 22, 27)",
              color: "white",
              marginLeft: "2%",
              cursor: "pointer",
              zIndex: "9"
            }}
            onClick={() => {
              setTitle(true);
            }}
          />
        </h4>
      ) : (
        <Input
          style={{ width: "30%", display: "block", margin: "15px auto" }}
          placeholder="Subtítulo"
          value={state.description}
          onChange={e => setState({ ...state, description: e.target.value })}
        />
      )}

      <div id="tools-images" style={{ width: "100%" }}>
        <ContainerInputFile
          style={{
            justifyContent: "center",
            marginBottom: "15px",
            flexWrap: "wrap"
          }}
        >
          <FileInput
            file={toolFiles.toolFile1}
            handleChange={toolHandleChange}
            deleteImage={() =>
              deleteImage(
                state.id,
                "tools",
                getNameImageFromUrl(renderImage("toolFile1", "images")),
                function(err) {
                  if (err) return;
                  location.reload();
                }
              )
            }
            cleanFileInput={toolCleanInput}
            imageURL={renderImage("toolFile1", "images")}
            maxWidth="100%"
            labelWidth="70%"
            labelInputFile="Imagem principal"
            id="toolFile1"
            name="toolFile1"
          />
        </ContainerInputFile>
        <ContainerInputFile style={{ flexWrap: "wrap" }}>
          <FileInput
            file={toolFiles.toolFile2}
            handleChange={toolHandleChange}
            deleteImage={() =>
              deleteImage(
                state.id,
                "tools",
                getNameImageFromUrl(renderImage("toolFile2", "images")),
                function(err) {
                  if (err) return;
                  location.reload();
                }
              )
            }
            cleanFileInput={toolCleanInput}
            imageURL={renderImage("toolFile2", "images")}
            labelWidth="200px"
            labelHeight="200px"
            maxWidth="200px"
            labelInputFile="Imagem 2"
            id="toolFile2"
            name="toolFile2"
          />

          <FileInput
            file={toolFiles.toolFile3}
            handleChange={toolHandleChange}
            deleteImage={() =>
              deleteImage(
                state.id,
                "tools",
                getNameImageFromUrl(renderImage("toolFile3", "images")),
                function(err) {
                  if (err) return;
                  location.reload();
                }
              )
            }
            cleanFileInput={toolCleanInput}
            imageURL={renderImage("toolFile3", "images")}
            labelWidth="200px"
            labelHeight="200px"
            maxWidth="200px"
            labelInputFile="Imagem 3"
            id="toolFile3"
            name="toolFile3"
          />

          <FileInput
            file={toolFiles.toolFile4}
            handleChange={toolHandleChange}
            deleteImage={() =>
              deleteImage(
                state.id,
                "tools",
                getNameImageFromUrl(renderImage("toolFile4", "images")),
                function(err) {
                  if (err) return;
                  location.reload();
                }
              )
            }
            cleanFileInput={toolCleanInput}
            imageURL={renderImage("toolFile4", "images")}
            labelWidth="200px"
            labelHeight="200px"
            maxWidth="200px"
            labelInputFile="Imagem 4"
            id="toolFile4"
            name="toolFile4"
          />

          <FileInput
            file={toolFiles.toolFile5}
            handleChange={toolHandleChange}
            deleteImage={() =>
              deleteImage(
                state.id,
                "tools",
                getNameImageFromUrl(renderImage("toolFile5", "images")),
                function(err) {
                  if (err) return;
                  location.reload();
                }
              )
            }
            cleanFileInput={toolCleanInput}
            imageURL={renderImage("toolFile5", "images")}
            labelWidth="200px"
            labelHeight="200px"
            maxWidth="200px"
            labelInputFile="Imagem 5"
            id="toolFile5"
            name="toolFile5"
          />
        </ContainerInputFile>
      </div>

      <Section>
        <h3
          className="main-title"
          style={{
            textAlign: "center",
            color: "rgb(129, 22, 27)"
          }}
        >
          Características
        </h3>
        <Hr />
        <div style={{ width: "50%", display: "block", margin: "auto" }}>
          <TextArea
            value={state.mainFeatures}
            onChange={e => setState({ ...state, mainFeatures: e.target.value })}
            rows="5"
          >
            {state.mainFeatures}
          </TextArea>
        </div>
      </Section>
      <Section>
        <h3
          className="main-title"
          style={{
            textAlign: "center",
            color: "rgb(129, 22, 27)"
          }}
        >
          Fabricante
        </h3>
        <Hr />
        <div style={{ width: "50%", display: "block", margin: "auto" }}>
          <Select
            value={state.manufacturer}
            onChange={e => setState({ ...state, manufacturer: e.target.value })}
          >
            <option value="">Escolha um fabricante</option>
            {manufacturers.manufacturers.map(manu => (
              <option
                selected={state.manufacturer == manu.id ? manu.id : false}
                value={manu.id}
              >
                {manu.name}
              </option>
            ))}
          </Select>
        </div>
      </Section>
      <Section>
        {visible ? (
          <div
            style={{
              display: "flex",
              margin: "15px auto",
              width: "100%",
              justifyContent: "center"
            }}
          >
            <Message result={result} message={message} color={color} />{" "}
          </div>
        ) : null}

        <Button
          style={{ width: "50%", margin: "auto", display: "block" }}
          onClick={() =>
            updateTool(
              state,
              toolFiles,
              function(err, res) {
                if (err) {
                  setSnackBar({
                    result: "error",
                    open: true,
                    message: err
                  });
                  return;
                }
                setSnackBar({
                  result: "success",
                  open: true,
                  message: "Peça alterada com sucesso"
                });
                setTimeout(() => {
                  location.reload();
                }, 2000);
              }
            )
          }
        >
          Salvar
        </Button>
        <Button
          style={{ width: "50%", margin: "15px auto", display: "block" }}
          onClick={() =>
            deleteTool(state.id, function(err, response) {
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
                message: "Peça excluída com sucesso",
                open: true
              });
              setTimeout(() => {
                Router.pushRoute("/admin/tools");
              }, 2000);
            })
          }
        >
          Excluir máquina
        </Button>
        <Snackbar
          open={snackBar.open}
          autoHideDuration={1500}
          onClose={handleClose}
        >
          <Alert severity={snackBar.result}>{snackBar.message}</Alert>
        </Snackbar>
      </Section>
    </>
  );
}

export const Section = styled.div`
  margin: 10% 0;
`;

export const MainImg = styled.img`
  width: 50%;
  margin: 10px auto;
  display: block;
  cursor: pointer;
`;

export const SecondaryImages = styled.img`
  max-width: 25%;
  margin-right: 5px;
  cursor: pointer;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const PrefImage = styled.img`
  width: 49%;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const MainFeaturesText = styled.p``;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.width ? props.width : "100%")};
`;

export const ContainerInputFile = styled.div`
  img {
    width: 100%;
    margin: 10px auto;
    display: block;
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
`;
