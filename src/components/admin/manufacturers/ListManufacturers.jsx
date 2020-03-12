
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../../../static/styled-components/base";
import { Creators as ManufacturerCreators } from "../../../ducks/manufacturer";
import { Creators as UtilsCreators } from "../../../ducks/utils";

import {
  getManufacturers,
  deleteManufacturer,
  editManufacturer
} from "../../../utils/manufacturers";
import Upload from "../../utils/Upload";

import Message from "../../utils/Message";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";


export default function manufacturers() {
  const { message, messageType, messageColor } = useSelector(
    state => state.Utils
  );
  const { manufacturers } = useSelector(state => state.Manufacturer);
  const [visible, setVisible] = useState(false);
  const [diag, setDiag] = useState(false);
  const [manufacturerToEdit, setManufacturerToEdit] = useState({});
  const [file, setFile] = useState(null);
  const [key, setKey] = useState(Date.now())
  const dispatch = useDispatch();

  function handleChange(event) {     
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    } else {
      setFile(null);
    }
  }

  useEffect(() => {
    function _getManufacturers() {
      getManufacturers(function(err, mans) {
        if (err) {
          dispatch(UtilsCreators.changeMessage());
          dispatch(UtilsCreators.changeMessageType(false));
          dispatch(UtilsCreators.changeMessageColor("red"));
          return;
        }
        dispatch(ManufacturerCreators.loadManufacturers(mans));
      });
    }
    _getManufacturers();
  }, []);

  function handleClose() {
    setFile(null)
    setDiag(false);
    setManufacturerToEdit({});
  }

  function handleOpen(manufacturer) {
    setManufacturerToEdit(manufacturer);
    setDiag(true);
  }

  function editMan(man) {
    editManufacturer(man.id, { ...man, file }, function(err, data) {
      if (err) {
        dispatch(UtilsCreators.changeMessage(err));
        dispatch(UtilsCreators.changeMessageType(false));
        dispatch(UtilsCreators.changeMessageColor("red"));
        setVisible(true);
        setFile(null)
        handleClose();
        return;
      }
      getManufacturers(function(err, mans) {
        if (err) {
          dispatch(UtilsCreators.changeMessage(err));
          dispatch(UtilsCreators.changeMessageType(false));
          dispatch(UtilsCreators.changeMessageColor("red"));
          return;
        }
        dispatch(ManufacturerCreators.loadManufacturers(mans));
      });
      dispatch(UtilsCreators.changeMessage("Editado com sucesso"));
      dispatch(UtilsCreators.changeMessageType(true));
      dispatch(UtilsCreators.changeMessageColor("green"));
         handleClose();
      setVisible(true);
    });
  }

  function delMan(id) {
    deleteManufacturer(id, function(err, data) {
      if (err) {
        dispatch(UtilsCreators.changeMessage(err));
        dispatch(UtilsCreators.changeMessageType(false));
        dispatch(UtilsCreators.changeMessageColor("red"));
        setVisible(true);
        return;
      }
      getManufacturers(function(err, mans) {
        dispatch(ManufacturerCreators.loadManufacturers(mans));
      });
      dispatch(UtilsCreators.changeMessage("Deletado com sucesso"));
      dispatch(UtilsCreators.changeMessageType(true));
      dispatch(UtilsCreators.changeMessageColor("green"));
      setVisible(true);
    });
  }


  return (
    <>
      <h3 className="main-title" style={{ color: "rgb(129, 22, 27)" }}>
        Lista de fabricantes
      </h3>

      <div>
        <Dialog
          open={diag}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Editar categoria</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nome"
              type="text"
              value={manufacturerToEdit.name}
              onChange={e =>
                setManufacturerToEdit({
                  ...manufacturerToEdit,
                  name: e.target.value
                })
              }
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Descrição"
              type="text"
              value={manufacturerToEdit.description}
              onChange={e =>
                setManufacturerToEdit({
                  ...manufacturerToEdit,
                  description: e.target.value
                })
              }
              fullWidth
            />
            <ImageContainer>
              <Upload
                id="editMan"
                file={file}
                name="editMan"
                handleChange={handleChange}
                labelInputFile="Logo fabricante"
                imageURL={manufacturerToEdit.logo}
                key={key}
              />
            </ImageContainer>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={() => editMan(manufacturerToEdit)} color="primary">
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <DivListCategories>
        {manufacturers.map((manufacturer, id) => (
          <ManufacturerContainer
            flexDirection="row"
            justifyContent="space-between"
            style={{ borderBottom: "1px solid lightgrey" }}
            key={id}
          >
            <ManufacturerContainer
              flexDirection="column"
              style={{ display: "flex", justifyContent: "column" }}
            >
              <p style={{ fontWeight: "200" }}>Nome: {manufacturer.name}</p>
              <p style={{ fontWeight: "200" }}>
                Descrição: {manufacturer.description}
              </p>
              <p>
                Logo:
                <span style={{ marginLeft: "10px" }}>
                  <img src={manufacturer.logo} style={{ width: "120px" }} />
                </span>
              </p>
            </ManufacturerContainer>
            <ManufacturerContainer
              flexDirection="column"
              style={{ marginRight: "10px", marginLeft: "10px" }}
            >
              <Button onClick={() => handleOpen(manufacturer)}>Editar</Button>
              <Button onClick={() => delMan(manufacturer.id)}>Apagar</Button>
            </ManufacturerContainer>
          </ManufacturerContainer>
        ))}
      </DivListCategories>

      {visible ? (
        <Message result={messageType} color={messageColor} message={message} />
      ) : (
        ""
      )}
    </>
  );
}

export const Hr = styled.hr`
  width: 50%;
`;

export const Subcontainer = styled.div`
  padding: 0 15px;
`;

export const ImageContainer = styled.div`
  img {
    max-width: 220px;
    display: block;
    margin: 10px auto;
  }
`;

export const DivListCategories = styled.div`
  max-height: 550px;
  overflow: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(129, 22, 27);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ManufacturerContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
`;
