import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { Router } from "../../../../routes";

import {
  getMachine,
  getOptions,
  deleteImage,
  updateMachine,
  deleteMachine
} from "../../../utils/machines";
import { getNameImageFromUrl, changeFileName, validateImage } from "../../../utils/images";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

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

  const [machineFiles, setMachineFiles] = useState({
    machineFile1: null,
    machineFile2: null,
    machineFile3: null,
    machineFile4: null,
    machineFile5: null
  });

  const [sewingFile, setSewingFile] = useState(null);

  const [refProdFiles, setRefProdFiles] = useState({
    refProdFile1: null,
    refProdFile2: null,
    refProdFile3: null,
    refProdFile4: null,
    refProdFile5: null
  });

  const [categoriesManufacturers, setCategoriesManufacturers] = useState({
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
            message: err.toString(),
            open: true
          });
          return;
        }
        setCategoriesManufacturers({
          manufacturers: dataCb.manufacturers.data,
          categories: dataCb.categories.data
        });
      });
      getMachine(id, function(err, machine) {
        if (err) {
          setSnackBar({
            result: "error",
            message: err,
            open: true
          });
          return;
        }
        setState({
          ...machine,
          name: machine.name,
          description: machine.description,
          mainFeatures: machine.mainFeatures,
          specifications: machine.specifications,
          category: machine.category ?  machine.category._id : null,
          manufacturer: machine.manufacturer,
          videoInput: machine.video
        });
      });
    }
    asyncFunc();
    return () => {};
  }, []);


  function handleChangeVideo(e) {
    const YTBaseURL = "https://www.youtube.com/embed/"
    if (getParam(e.target.value) == 0) {
      setState({...state, videoInput: e.target.value, video: '' })
      setSnackBar({
        open: true,
        result: 'error',
        message: 'O endereço não é uma URL válida do YouTube'
      })
    } else {
      console.log(e.target.value)
      setState({...state, video: YTBaseURL + getParam(e.target.value), videoInput: e.target.value })
    }
  }

  function getParam(url) {
    var results = new RegExp('[\?&]' + 'v' + '=([^&#]*)')
                      .exec(url);
    if (results == null) {
        if (url.indexOf('embed') == -1)
         return 0;
        else 
          return 1;
    }
    return results[1] || 0;
  }
  const [folheto, setFolheto] = useState(null)
  const [manual, setManual] = useState(null)

  function folhetoChange(e) {
    if (e) {
      const type = e.target.files[0].name.split(".")
      if (type[1] != "pdf") {
        setSnackBar({
          open: true,
          result: 'error',
          message: 'O folheto deve ser apenas formato PDF'
        })
      } else {
        setFolheto(e.target.files[0])      
      }
    }
    
  }

  function manualChange(e) {
    if (e) {
      const type = e.target.files[0].name.split(".")
      if (type[1] != "pdf") {
        setSnackBar({
          open: true,
          result: 'error',
          message: 'O manual deve ser apenas formato PDF'
        })
      } else {
        setManual(e.target.files[0])      
      }
    }
    
  }

  function machineHandleChange(e) {
    if (validateImage(process.env.imageExtensionPermitted, 10000, e.target.files[0])) {
      const newName = parseInt(e.target.name[e.target.name.length - 1]) - 1;
      setMachineFiles({
        ...machineFiles,
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

  function machineCleanFileInput(name) {
    setMachineFiles({
      ...machineFiles,
      [name]: null
    });
  }

  function refProdHandleChange(e) {
    if (validateImage(process.env.imageExtensionPermitted, 10000, e.target.files[0])) {
      const newName = parseInt(e.target.name[e.target.name.length - 1]) - 1;
      setRefProdFiles({
        ...refProdFiles,
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

  function refProdCleanFileInput(name) {
    setRefProdFiles({
      ...refProdFiles,
      [name]: null
    });
  }

  function sewingHandleChange(e) {
    if (validateImage(process.env.imageExtensionPermitted, 10000, e.target.files[0])) {
      const newName = parseInt(e.target.name[e.target.name.length - 1]) - 1;
      setSewingFile(changeFileName(e.target.files[0], newName));
    } else {
      setSnackBar({
        open: true,
        result: 'error',
        message: imageMessageError
      })
    }
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

      <div id="machine-images" style={{ width: "100%" }}>
        <ContainerInputFile
          style={{
            justifyContent: "center",
            marginBottom: "15px",
            flexWrap: "wrap"
          }}
        >
          <FileInput
            file={machineFiles.machineFile1}
            handleChange={machineHandleChange}
            deleteImage={() =>
              deleteImage(
                state.id,
                "machine",
                getNameImageFromUrl(renderImage("machineFile1", "images")),
                function(err) {
                  if (err) return;
                  location.reload();
                }
              )
            }
            cleanFileInput={machineCleanFileInput}
            imageURL={renderImage("machineFile1", "images")}
            maxWidth="100%"
            labelWidth="70%"
            labelInputFile="Imagem principal"
            id="machineFile1"
            name="machineFile1"
          />
        </ContainerInputFile>
        <ContainerInputFile style={{ flexWrap: "wrap" }}>
          <FileInput
            file={machineFiles.machineFile2}
            handleChange={machineHandleChange}
            deleteImage={() =>
              deleteImage(
                state.id,
                "machine",
                getNameImageFromUrl(renderImage("machineFile2", "images")),
                function(err) {
                  if (err) return;
                  location.reload();
                }
              )
            }
            cleanFileInput={machineCleanFileInput}
            imageURL={renderImage("machineFile2", "images")}
            labelWidth="200px"
            labelHeight="200px"
            maxWidth="200px"
            labelInputFile="Imagem 2"
            id="machineFile2"
            name="machineFile2"
          />

          <FileInput
            file={machineFiles.machineFile3}
            handleChange={machineHandleChange}
            deleteImage={() =>
              deleteImage(
                state.id,
                "machine",
                getNameImageFromUrl(renderImage("machineFile3", "images")),
                function(err) {
                  if (err) return;
                  location.reload();
                }
              )
            }
            cleanFileInput={machineCleanFileInput}
            imageURL={renderImage("machineFile3", "images")}
            labelWidth="200px"
            labelHeight="200px"
            maxWidth="200px"
            labelInputFile="Imagem 3"
            id="machineFile3"
            name="machineFile3"
          />

          <FileInput
            file={machineFiles.machineFile4}
            handleChange={machineHandleChange}
            deleteImage={() =>
              deleteImage(
                state.id,
                "machine",
                getNameImageFromUrl(renderImage("machineFile4", "images")),
                function(err) {
                  if (err) return;
                  location.reload();
                }
              )
            }
            cleanFileInput={machineCleanFileInput}
            imageURL={renderImage("machineFile4", "images")}
            labelWidth="200px"
            labelHeight="200px"
            maxWidth="200px"
            labelInputFile="Imagem 4"
            id="machineFile4"
            name="machineFile4"
          />

          <FileInput
            file={machineFiles.machineFile5}
            handleChange={machineHandleChange}
            deleteImage={() =>
              deleteImage(
                state.id,
                "machine",
                getNameImageFromUrl(renderImage("machineFile5", "images")),
                function(err) {
                  if (err) return;
                  location.reload();
                }
              )
            }
            cleanFileInput={machineCleanFileInput}
            imageURL={renderImage("machineFile5", "images")}
            labelWidth="200px"
            labelHeight="200px"
            maxWidth="200px"
            labelInputFile="Imagem 5"
            id="machineFile5"
            name="machineFile5"
          />
        </ContainerInputFile>
      </div>

      <Section style={{}}>
        <h3
          className="main-title"
          style={{
            textAlign: "center",
            color: "rgb(129, 22, 27)"
          }}
        >
          Tipo de ponto
        </h3>

        <Hr />
        <div id="sewing-type-images" style={{ width: "100%" }}>
          <ContainerInputFile
            style={{ justifyContent: "center", marginBottom: "15px" }}
          >
            <FileInput
              file={sewingFile}
              handleChange={sewingHandleChange}
              deleteImage={() =>
                deleteImage(
                  state.id,
                  "sewingType",
                  getNameImageFromUrl(state.sewingType),
                  function(err) {
                    if (err) return;
                    location.reload();
                  }
                )
              }
              cleanFileInput={() => setSewingFile(null)}
              imageURL={state.sewingType}
              maxWidth="60%"
              labelWidth="70%"
              labelInputFile="Imagem principal"
              id="sewingFile1"
              name="sewingFile1"
            />
          </ContainerInputFile>
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
          Produtos ideias para produzir
        </h3>

        <Hr />

        <div id="ref-prod-images" style={{ width: "100%" }}>
          <ContainerInputFile style={{ flexWrap: "wrap" }}>
            <FileInput
              file={refProdFiles.refProdFile1}
              handleChange={refProdHandleChange}
              deleteImage={() =>
                deleteImage(
                  state.id,
                  "productRef",
                  getNameImageFromUrl(
                    renderImage("refProdFile1", "productRef")
                  ),
                  function(err) {
                    if (err) return;
                    location.reload();
                  }
                )
              }
              cleanFileInput={refProdCleanFileInput}
              imageURL={renderImage("refProdFile1", "productRef")}
              labelWidth="200px"
              labelHeight="200px"
              maxWidth="200px"
              labelInputFile="Imagem 1"
              id="refProdFile1"
              name="refProdFile1"
            />

            <FileInput
              file={refProdFiles.refProdFile2}
              handleChange={refProdHandleChange}
              deleteImage={() =>
                deleteImage(
                  state.id,
                  "productRef",
                  getNameImageFromUrl(
                    renderImage("refProdFile2", "productRef")
                  ),
                  function(err) {
                    if (err) return;
                    location.reload();
                  }
                )
              }
              cleanFileInput={refProdCleanFileInput}
              imageURL={renderImage("refProdFile2", "productRef")}
              labelWidth="200px"
              labelHeight="200px"
              maxWidth="200px"
              labelInputFile="Imagem 2"
              id="refProdFile2"
              name="refProdFile2"
            />

            <FileInput
              file={refProdFiles.refProdFile3}
              handleChange={refProdHandleChange}
              deleteImage={() =>
                deleteImage(
                  state.id,
                  "productRef",
                  getNameImageFromUrl(
                    renderImage("refProdFile3", "productRef")
                  ),
                  function(err) {
                    if (err) return;
                    location.reload();
                  }
                )
              }
              cleanFileInput={refProdCleanFileInput}
              imageURL={renderImage("refProdFile3", "productRef")}
              labelWidth="200px"
              labelHeight="200px"
              maxWidth="200px"
              labelInputFile="Imagem 3"
              id="refProdFile3"
              name="refProdFile3"
            />

            <FileInput
              file={refProdFiles.refProdFile4}
              handleChange={refProdHandleChange}
              deleteImage={() =>
                deleteImage(
                  state.id,
                  "productRef",
                  getNameImageFromUrl(
                    renderImage("refProdFile4", "productRef")
                  ),
                  function(err) {
                    if (err) return;
                    location.reload();
                  }
                )
              }
              cleanFileInput={refProdCleanFileInput}
              imageURL={renderImage("refProdFile4", "productRef")}
              labelWidth="200px"
              labelHeight="200px"
              maxWidth="200px"
              labelInputFile="Imagem 4"
              id="refProdFile4"
              name="refProdFile4"
            />
          </ContainerInputFile>
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
          Especificações Técnicas
        </h3>
        <Hr />
        <div style={{ width: "50%", display: "block", margin: "auto" }}>
          <InputGroup>
            <label htmlFor="modelo">Modelo:</label>
            <Input
              placeholder="Modelo"
              value={state.specifications ? state.specifications.modelo : ""}
              onChange={e =>
                setState({
                  ...state,
                  specifications: {
                    ...state.specifications,
                    modelo: e.target.value
                  }
                })
              }
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="alturaCalcador">Altura do Calçador:</label>
            <Input
              placeholder="Altura do Calçador"
              value={
                state.specifications ? state.specifications.alturaCalcador : ""
              }
              onChange={e =>
                setState({
                  ...state,
                  specifications: {
                    ...state.specifications,
                    alturaCalcador: e.target.value
                  }
                })
              }
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="comprimentoDoPonto">Comprimento do ponto:</label>
            <Input
              placeholder="Comprimento do ponto"
              value={
                state.specifications
                  ? state.specifications.comprimentoDoPonto
                  : ""
              }
              onChange={e =>
                setState({
                  ...state,
                  specifications: {
                    ...state.specifications,
                    comprimentoDoPonto: e.target.value
                  }
                })
              }
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="corteDeLinha">Corte de Linha:</label>
            <Input
              placeholder="Corte de linha"
              value={
                state.specifications ? state.specifications.corteDeLinha : ""
              }
              onChange={e =>
                setState({
                  ...state,
                  specifications: {
                    ...state.specifications,
                    corteDeLinha: e.target.value
                  }
                })
              }
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="velocidadeMaxima">Velocidade Máxima:</label>
            <Input
              placeholder="Velocidade máxima"
              value={
                state.specifications
                  ? state.specifications.velocidadeMaxima
                  : ""
              }
              onChange={e =>
                setState({
                  ...state,
                  specifications: {
                    ...state.specifications,
                    velocidadeMaxima: e.target.value
                  }
                })
              }
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="motor">Motor:</label>
            <Input
              placeholder="Motor"
              value={state.specifications ? state.specifications.motor : ""}
              onChange={e =>
                setState({
                  ...state,
                  specifications: {
                    ...state.specifications,
                    motor: e.target.value
                  }
                })
              }
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="numeroDeAgulhas">Número de Agulhas:</label>
            <Input
              placeholder="Número de agulhas"
              value={
                state.specifications ? state.specifications.numeroDeAgulhas : ""
              }
              onChange={e =>
                setState({
                  ...state,
                  specifications: {
                    ...state.specifications,
                    numeroDeAgulhas: e.target.value
                  }
                })
              }
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="painelTouchScreen">Painel touch screen:</label>
            <Input
              placeholder="Painel touch screen"
              value={
                state.specifications
                  ? state.specifications.painelTouchScreen
                  : ""
              }
              onChange={e =>
                setState({
                  ...state,
                  specifications: {
                    ...state.specifications,
                    painelTouchScreen: e.target.value
                  }
                })
              }
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="tipoDeAgulha">Tipo de agulha:</label>
            <Input
              placeholder="Tipo de agulha"
              value={
                state.specifications ? state.specifications.tipoDeAgulha : ""
              }
              onChange={e =>
                setState({
                  ...state,
                  specifications: {
                    ...state.specifications,
                    tipoDeAgulha: e.target.value
                  }
                })
              }
            />
          </InputGroup>
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
          Categoria e fabricante
        </h3>
        <Hr />
        <div style={{ width: "50%", display: "block", margin: "auto" }}>
          <Select
            value={state.category}
            onChange={e => setState({ ...state, category: e.target.value })}
          >
            <option value="">Escolha uma categoria</option>
            {categoriesManufacturers.categories.map(category => (
              <option
                selected={state.category == category.id ? category.id : false}
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </Select>

          <Select
            value={state.manufacturer}
            onChange={e => setState({ ...state, manufacturer: e.target.value })}
          >
            <option value="">Escolha um fabricante</option>
            {categoriesManufacturers.manufacturers.map(manu => (
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
        <h3
          className="main-title"
          style={{
            textAlign: "center",
            color: "rgb(129, 22, 27)",
            marginTop: "15px"
          }}
        >
          Vídeo (YouTube)
        </h3>

        <Section style={{ justifyContent: "center", display: "flex"}}>
           <Input
            style={{ width: "50%"}}
            placeholder="Ex: https://www.youtube.com/watch?v=5qdtbMvC2Rs"
            value={state.videoInput}
            onChange={handleChangeVideo}
          />
        </Section>

        <h3
          className="main-title"
          style={{
            textAlign: "center",
            color: "rgb(129, 22, 27)",
            marginTop: "15px"
          }}
        >
          Folheto e Manual
        </h3>
        <Section style={{ flexWrap: "wrap", justifyContent: "center", width: "50%", margin: "auto" }}>
          <div style={{ border: '2px dotted lightgrey', padding: '5px', minHeight: "100px", flex: 1, position: "relative" }}>
           {folheto ? <FontAwesomeIcon
                        icon={faTrash}
                        style={{
                          width: "16px",
                          position: "absolute",
                          borderRadius: "10px",
                          padding: "3px",
                          background: "rgb(129, 22, 27)",
                          color: "white",
                          right: "13px",
                          top: "10px",
                          cursor: "pointer",
                          zIndex: "9"
                        }}
                        onClick={() => setFolheto(null)}
                      /> : state.folheto ? <ButtonDelImg onClick={() =>
                deleteImage(
                  state.id,
                  "folheto",
                  formatFileName(state.folheto),
                  function(err) {
                    if (err) return;
                    location.reload();
                  }
                )}>Excluir documento</ButtonDelImg> : null }
            <label htmlFor="folheto" style={{ cursor: "pointer", minHeight: "100px",  width: "100%",display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
              FOLHETO <br /><br />
              {folheto ? folheto.name : state.folheto ? formatFileName(state.folheto) : "Clique para escolher um arquivo"}
            </label>
            <input style={{ width: 0}} type="file" name="folheto" id="folheto" onChange={folhetoChange}  /> 
          </div>

          <div style={{ border: '2px dotted lightgrey', padding: '5px', minHeight: "100px", flex: 1, position: "relative"}}>
              {manual ? <FontAwesomeIcon
                        icon={faTrash}
                        style={{
                          width: "16px",
                          position: "absolute",
                          borderRadius: "10px",
                          padding: "3px",
                          background: "rgb(129, 22, 27)",
                          color: "white",
                          right: "13px",
                          top: "10px",
                          cursor: "pointer",
                          zIndex: "9"
                        }}
                        onClick={() => setManual(null)}
                      /> : state.manual ? <ButtonDelImg onClick={() =>
                deleteImage(
                  state.id,
                  "manual",
                  formatFileName(state.manual),
                  function(err) {
                    if (err) return;
                    location.reload();
                  }
                )}>Excluir documento</ButtonDelImg> :  null }
          
            <label htmlFor="manual" style={{ cursor: "pointer", minHeight: "100px",  width: "100%",display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
            MANUAL <br /><br />
            {manual ? manual.name : state.manual ? formatFileName(state.manual) : "Clique para escolher um arquivo"}</label>
            <input style={{ width: 0}} type="file" name="manual" id="manual" onChange={manualChange}  /> 
          </div>
        </Section>
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
          onClick={() =>{
            console.log(getParam(state.videoInput), state.video)
              if (getParam(state.videoInput) != 0 || state.videoInput == ''){
                updateMachine(
                  state,
                  machineFiles,
                  sewingFile,
                  refProdFiles,
                  { folheto, manual },
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
                      message: "Máquina alterada com sucesso"
                    });
                    setTimeout(() => {
                      location.reload();
                    }, 2000);
                  }
                )
              } else {
                  handleChangeVideo({  target: { value: state.video }})
              }
           
            }
          }
        >
          Salvar
        </Button>
        <Button
          style={{ width: "50%", margin: "15px auto", display: "block" }}
          onClick={() =>
            deleteMachine(state.id, function(err, response) {
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
                message: "Máquina excluída com sucesso",
                open: true
              });
              setTimeout(() => {
                Router.pushRoute("/admin/machines");
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

  function formatFileName(name) {
    const splitName = name.split('/')
    const splittedName = splitName[splitName.length-1].split('.')
    return splittedName[0]
  }
}

const ButtonDelImg = styled.button`
  background-color: #960d03;
  color: white;
  padding: 8px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  position: absolute;
  width: 75px;
  right: 0;
  top: 0px;
  font-size: 8px;
  z-index: 9;
  cursor: pointer;
`;


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
