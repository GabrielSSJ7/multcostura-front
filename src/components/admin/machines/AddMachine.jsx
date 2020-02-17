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

import { getOptions, addMachine } from "../../../utils/machines";
import { changeFileName, validateImage } from "../../../utils/images";

import FileInput from "../../utils/FileInput";

export default function AddMachine() {
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

  const [categoriesManufacturers, setCategoriesManufacturers] = useState({
    categories: [],
    manufacturers: []
  });
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

        setCategoriesManufacturers({
          manufacturers: response.manufacturers.data,
          categories: response.categories.data
        });
      });
    }
    asyncFunc();
  }, []);

  const [machineFiles, setMachineFiles] = useState({
    machineFile1: null,
    machineFile2: null,
    machineFile3: null,
    machineFile4: null,
    machineFile5: null
  });

  const [refProdFiles, setRefProdFiles] = useState({
    refProdFile1: null,
    refProdFile2: null,
    refProdFile3: null,
    refProdFile4: null,
    refProdFile5: null
  });

  const [sewingTypeFile, setSewingTypeFile] = useState(null);

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

  function sewingTypeHandleChange(e) {
    if (validateImage(process.env.imageExtensionPermitted, 10000, e.target.files[0])) {
      const newName = parseInt(e.target.name[e.target.name.length - 1]) - 1;
      setSewingTypeFile(changeFileName(e.target.files[0], newName));
    } else {
      setSnackBar({
        open: true,
        result: 'error',
        message: imageMessageError
      })
    }
  }

  return (
    <>
      <h3 className="main-title" style={{ color: "rgb(129, 22, 27)" }}>
        Adicionar nova máquina
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
          Categoria e fabricante
        </h3>
        <Row>
          <Select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="">Escolha uma categoria</option>
            {categoriesManufacturers.categories.map(category => (
              <option value={category.id}>{category.name}</option>
            ))}
          </Select>

          <Select
            value={manufacturer}
            onChange={e => setManufacturer(e.target.value)}
          >
            <option value="">Escolha um fabricante</option>
            {categoriesManufacturers.manufacturers.map(manufacturer => (
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
          Especificações técnicas
        </h3>
        <Row>
          <Input
            style={{ flex: 2 }}
            placeholder="Modelo"
            value={specifications.modelo}
            onChange={e =>
              setSpecifications({ ...specifications, modelo: e.target.value })
            }
          />
          <Input
            placeholder="Altura do calçador (mm)"
            style={{ flex: 1 }}
            value={specifications.alturaCalcador}
            onChange={e =>
              setSpecifications({
                ...specifications,
                alturaCalcador: e.target.value
              })
            }
          />
          <Input
            style={{ flex: 1 }}
            placeholder="Comprimento do ponto (mm)"
            value={specifications.comprimentoDoPonto}
            onChange={e =>
              setSpecifications({
                ...specifications,
                comprimentoDoPonto: e.target.value
              })
            }
          />
        </Row>
        <Row>
          <Input
            style={{ flex: 1 }}
            placeholder="Corte de linha"
            value={specifications.corteDeLinha}
            onChange={e =>
              setSpecifications({
                ...specifications,
                corteDeLinha: e.target.value
              })
            }
          />
          <Input
            style={{ flex: 1 }}
            placeholder="Velocidade máxima(PPM)"
            value={specifications.velocidadeMaxima}
            onChange={e =>
              setSpecifications({
                ...specifications,
                velocidadeMaxima: e.target.value
              })
            }
          />
          <Input
            style={{ flex: 3 }}
            placeholder="Motor"
            value={specifications.motor}
            onChange={e =>
              setSpecifications({ ...specifications, motor: e.target.value })
            }
          />
        </Row>
        <Row>
          <Input
            style={{ flex: 1 }}
            value={specifications.numeroDeAgulhas}
            placeholder="Número de agulhas"
            onChange={e =>
              setSpecifications({
                ...specifications,
                numeroDeAgulhas: e.target.value
              })
            }
          />
          <Input
            style={{ flex: 1 }}
            placeholder="Painel touch screen"
            value={specifications.painelTouchScreen}
            onChange={e =>
              setSpecifications({
                ...specifications,
                painelTouchScreen: e.target.value
              })
            }
          />

          <Input
            style={{ flex: 1 }}
            placeholder="Tipo de agulha"
            value={specifications.tipoDeAgulha}
            onChange={e =>
              setSpecifications({
                ...specifications,
                tipoDeAgulha: e.target.value
              })
            }
          />
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
          <ImageContainer maxWidth="300px">
            <FileInput
              handleChange={machineHandleChange}
              labelInputFile="Imagem principal"
              id="machineFile1"
              name="machineFile1"
              labelWidth="250px"
              labelHeight="250px"
              maxWidth="250px"
              file={machineFiles.machineFile1}
              cleanFileInput={() => machineCleanFileInput("machineFile1")}
            />
          </ImageContainer>
        </Row>
        <Row style={{ flexWrap: "wrap", justifyContent: "center" }}>
          <ImageContainer maxWidth="200px">
            <FileInput
              handleChange={machineHandleChange}
              labelInputFile="Imagem 2"
              id="machineFile2"
              name="machineFile2"
              labelWidth="150px"
              labelHeight="150px"
              maxWidth="150px"
              file={machineFiles.machineFile2}
              cleanFileInput={() => machineCleanFileInput("machineFile2")}
            />
          </ImageContainer>
          <ImageContainer maxWidth="200px">
            <FileInput
              handleChange={machineHandleChange}
              labelInputFile="Imagem 3"
              id="machineFile3"
              name="machineFile3"
              labelWidth="150px"
              labelHeight="150px"
              maxWidth="150px"
              file={machineFiles.machineFile3}
              cleanFileInput={() => machineCleanFileInput("machineFile3")}
            />
          </ImageContainer>
          <ImageContainer maxWidth="200px">
            <FileInput
              handleChange={machineHandleChange}
              labelInputFile="Imagem 4"
              id="machineFile4"
              name="machineFile4"
              labelWidth="150px"
              labelHeight="150px"
              maxWidth="150px"
              file={machineFiles.machineFile4}
              cleanFileInput={() => machineCleanFileInput("machineFile4")}
            />
          </ImageContainer>
          <ImageContainer maxWidth="200px">
            <FileInput
              handleChange={machineHandleChange}
              labelInputFile="Imagem 5"
              id="machineFile5"
              name="machineFile5"
              labelWidth="150px"
              labelHeight="150px"
              maxWidth="150px"
              file={machineFiles.machineFile5}
              cleanFileInput={() => machineCleanFileInput("machineFile5")}
            />
          </ImageContainer>
        </Row>
        <h3
          className="main-title"
          style={{
            textAlign: "center",
            color: "rgb(129, 22, 27)",
            marginTop: "15px"
          }}
        >
          Exemplo do produto produzido pela máquina
        </h3>
        <Row style={{ flexWrap: "wrap", justifyContent: "center" }}>
          <ImageContainer maxWidth="200px">
            <FileInput
              handleChange={refProdHandleChange}
              labelInputFile="Imagem 1"
              id="refProdFiles1"
              name="refProdFiles1"
              labelWidth="100px"
              labelHeight="100px"
              maxWidth="100px"
              file={refProdFiles.refProdFiles1}
              cleanFileInput={() => refProdCleanFileInput("refProdFiles1")}
            />
          </ImageContainer>
          <ImageContainer maxWidth="200px">
            <FileInput
              handleChange={refProdHandleChange}
              labelInputFile="Imagem 2"
              id="refProdFiles2"
              name="refProdFiles2"
              labelWidth="100px"
              labelHeight="100px"
              maxWidth="100px"
              file={refProdFiles.refProdFiles2}
              cleanFileInput={() => refProdCleanFileInput("refProdFiles2")}
            />
          </ImageContainer>
          <ImageContainer maxWidth="200px">
            <FileInput
              handleChange={refProdHandleChange}
              labelInputFile="Imagem 3"
              id="refProdFiles3"
              name="refProdFiles3"
              labelWidth="100px"
              labelHeight="100px"
              maxWidth="100px"
              file={refProdFiles.refProdFiles3}
              cleanFileInput={() => refProdCleanFileInput("refProdFiles3")}
            />
          </ImageContainer>
          <ImageContainer maxWidth="200px">
            <FileInput
              handleChange={refProdHandleChange}
              labelInputFile="Imagem 4"
              id="refProdFiles4"
              name="refProdFiles4"
              labelWidth="100px"
              labelHeight="100px"
              maxWidth="100px"
              file={refProdFiles.refProdFiles4}
              cleanFileInput={() => refProdCleanFileInput("refProdFiles4")}
            />
          </ImageContainer>
        </Row>

        <h3
          className="main-title"
          style={{
            textAlign: "center",
            color: "rgb(129, 22, 27)",
            marginTop: "15px"
          }}
        >
          Tipo de ponto
        </h3>
        <Row style={{ justifyContent: "center" }}>
          <FileInput
            handleChange={sewingTypeHandleChange}
            labelInputFile="Imagem única"
            id="sewingTypeFile"
            name="sewingTypeFile"
            labelWidth="200px"
            labelHeight="200px"
            maxWidth="200px"
            file={sewingTypeFile}
            cleanFileInput={() => setSewingTypeFile(null)}
          />
        </Row>
      </div>

      <Button
        onClick={() =>
          addMachine({
            name,
            manufacturer,
            description,
            mainFeatures,
            category,
            specifications
          }, machineFiles, sewingTypeFile, refProdFiles, function (err, data) {
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
              message: 'Máquina criada com sucesso',
              open: true
            })

            cleanForm()
          })
        }
      >
        Adicionar máquina
      </Button>
    </>
  );

  function cleanForm() {
    setName("");
    setDescription("");
    setManufacturer("");
    setCategory("");
    setMainFeatures("");
    setSpecifications({
      modelo: "",
      motor: "",
      alturaCalcador: "",
      comprimentoDoPonto: "",
      corteDeLinha: "",
      velocidadeMaxima: "",
      numeroDeAgulhas: "",
      painelTouchScreen: "",
      tipoDeAgulha: ""
    });
    setMachineFiles({
      machineFile1: null,
      machineFile2: null,
      machineFile3: null,
      machineFile4: null,
      machineFile5: null,
    })

    setRefProdFiles({
      refProdFile1: null,
      refProdFile2: null,
      refProdFile3: null,
      refProdFile4: null,
    })

    setSewingTypeFile(null)
  }
}

export const ImageContainer = styled.div`
  img {
    max-width: ${props => props.maxWidth};
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
