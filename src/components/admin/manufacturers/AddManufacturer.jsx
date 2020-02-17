import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Message from '../../utils/Message'

import setApi from "../../../api";
import { validateImage } from "../../../utils/validate";
import { Creators as UploadCreators } from "../../../ducks/upload";
import { Creators as ManufacturerCreators } from "../../../ducks/manufacturer";
import { Creators as UtilsCreators } from "../../../ducks/utils";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import {
  Button,
  Input,
  TextArea
} from "../../../static/styled-components/base";
import Upload from "../../utils/UploadRedux";
import { getManufacturers} from '../../../utils/manufacturers'

export default function AddManufacturer() {
  const imageMessageError = `Extensão do arquivo enviado é inválido. Extensões permitidas ${process.env.imageExtensionPermitted.toString()}, com no máximo 10MB`
  const reactCtx = React.createContext({});
  const _this = useContext(reactCtx);
  const { message, messageType: result, messageColor: color } = useSelector(
    state => state.Utils
  );
  const { file } = useSelector(state => state.Upload);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
      setName('')
      setDescription('')
      dispatch(UploadCreators.cleanUpUpload())
  }, [])

  const [snackBar, setSnackBar] = useState({
    result: "success",
    open: false,
    message: ""
  });

  function handleClose() {
    setSnackBar({
      ...snackBar,
      open: false
    })
  }

  function createManufacturer() {
    console.log(file)
    console.log(validateImage(["png", "jpg", "svg", "JPG", "jpeg", "webp", "gif", "tiff"], 10000, file))
    if (name) {
      if (validateImage(["png", "jpg", "svg", "JPG", "jpeg", "webp", "gif", "tiff"], 10000, file)) {
        const formData = new FormData();
        formData.append("logo", file);
        setApi()
          .post(`manufacturer?name=${name}&description=${description}`, formData)
          .then(response => {
            setSnackBar({
              message: "Fabricante criada com sucesso",
              open: true,
              result: "success"
            })
            setName("");
            setDescription("");
            dispatch(UploadCreators.cleanUpUpload());
            dispatch(UploadCreators.changeFile(null));
            getManufacturers(function(err, manufacturers) {
              if (err) {
                setSnackBar({
                  message: err,
                  open: true,
                  result: "error"
                })
                return;
              }
              dispatch(ManufacturerCreators.loadManufacturers(manufacturers));
            });
          })
          .catch(err => {
            setSnackBar({
              message: err.response ? err.response.data : err.toString(),
              open: true,
              result: "error"
            })
          });
      } else {
        setSnackBar({
          message: "Suba imagens PNG com no máximo 100KB",
          open: true,
          result: "error"
        })
      }
    } else {
      setSnackBar({
        message: "O nome é necessário",
        open: true,
        result: "error"
      })
    }
  }

  return (
    <>
      <h3 className="main-title" style={{ color: "rgb(129, 22, 27)" }}>
        Adicionar nova categoria
      </h3>
      <div>
        <Input
          placeholder="Nome"
          onChange={e => setName(e.target.value) }
          value={name}
        />
        <TextArea
          placeholder="Descrição"
          rows="3"
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
        <ImageContainer
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Upload labelInputFile="Logo fabricante" />
        </ImageContainer>
        <Snackbar
          open={snackBar.open}
          autoHideDuration={3500}
          onClose={handleClose}
        >
          <Alert severity={snackBar.result}>{snackBar.message}</Alert>
        </Snackbar>
      </div>
      <Button onClick={createManufacturer}>Criar fabricante</Button>
    </>
  );
}

const ImageContainer = styled.div`
  img {
    max-width: 220px;
  }
`;
