import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Message from '../../utils/Message'

import setApi from "../../../api";
import { validateImage } from "../../../utils/validate";
import { Creators as UploadCreators } from "../../../ducks/upload";
import { Creators as ManufacturerCreators } from "../../../ducks/manufacturer";
import { Creators as UtilsCreators } from "../../../ducks/utils";

import {
  Button,
  Input,
  TextArea
} from "../../../static/styled-components/base";
import Upload from "../../utils/UploadRedux";
import { getManufacturers} from '../../../utils/manufacturers'

export default function AddManufacturer() {
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

  function createManufacturer() {
    if (name) {
      if (validateImage(["png", "jpg", "svg", "JPG", "jpeg", "webp", "gif", "tiff"], 10000, file)) {
        const formData = new FormData();
        formData.append("logo", file);
        setApi()
          .post(`manufacturer?name=${name}&description=${description}`, formData)
          .then(response => {
            dispatch(
              UtilsCreators.changeMessage("Fabricante criada com sucesso")
            );
            dispatch(UtilsCreators.changeMessageType(true));
            dispatch(UtilsCreators.changeMessageColor("green"));
            setVisible(true);
            setName("");
            setDescription("");
            dispatch(UploadCreators.cleanUpUpload());
            dispatch(UploadCreators.changeFile(null));
            getManufacturers(function(err, manufacturers) {
              if (err) {
                dispatch(UtilsCreators.changeMessage(err));
                dispatch(UtilsCreators.changeMessageType(false));
                dispatch(UtilsCreators.changeMessageColor("red"));
                setVisible(true);
                return;
              }
              dispatch(ManufacturerCreators.loadManufacturers(manufacturers));
            });
          })
          .catch(err => {
            dispatch(
              UtilsCreators.changeMessage(
                err.response ? err.response.data : err.toString()
              )
            );
            dispatch(UtilsCreators.changeMessageType(false));
            dispatch(UtilsCreators.changeMessageColor("red"));
            setVisible(true);
          });
      } else {
        dispatch(
          UtilsCreators.changeMessage("Suba imagens PNG com no máximo 100KB")
        );
        dispatch(UtilsCreators.changeMessageType(false));
        dispatch(UtilsCreators.changeMessageColor("red"));
        setVisible(true);
      }
    } else {
      dispatch(UtilsCreators.changeMessage("O nome é necessário"));
      dispatch(UtilsCreators.changeMessageType(false));
      dispatch(UtilsCreators.changeMessageColor("red"));
      setVisible(true);
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
