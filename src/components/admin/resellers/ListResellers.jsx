import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../../../static/styled-components/base";
import { Creators as ResellerCreators } from "../../../ducks/resellers";
import { Creators as UtilsCreators } from "../../../ducks/utils";

import setApi from '../../../api'
import { Column } from "../../../static/styled-components/base";

import {
  getResellers,
  editReseller,
  deleteReseller
} from "../../../utils/reseller";

import Message from "../../utils/Message";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ListResellers() {
  const { message, messageType, messageColor } = useSelector(
    state => state.Utils
  );
  const { resellers } = useSelector(state => state.Reseller);
  const [visible, setVisible] = useState(false);
  const [diag, setDiag] = useState(false);
  const [resellerToEdit, setResellerToEdit] = useState({ address: {} });
  const dispatch = useDispatch();
  const [address, setAddress] = useState('')
  const [listAddress, setListAddress] = useState([])
  const [listAddressVis, setListAddressVis] = useState(false)


  useEffect(() => {
    async function asyncFunc() {
      const response = await setApi().get(`http://dev.virtualearth.net/REST/v1/Autosuggest?query=${resellerToEdit.address}&maxResults=5&key=ArBcF40dX4IT5Co3SIxT7TfvEqq3VNdafH09G2lYGLmm1PvaaFwU-xHaQLjtmpDe`)
      const fAddress = response.data.resourceSets[0].resources[0].value
      const sugestion = []
      for (let formattedAddress in response.data.resourceSets[0].resources[0].value) {
        sugestion.push(fAddress[formattedAddress].address.formattedAddress)
      }
      setListAddress(sugestion)
    }

    asyncFunc();
  }, [resellerToEdit.address])

   async function geoCoding(where) {
    const response = await setApi().get(`http://dev.virtualearth.net/REST/v1/Locations?addressLine=${where}&maxResults=1&key=${process.env.mapsKey}`)
    if (response.data.resourceSets[0].estimatedTotal != 0)
      return response.data.resourceSets[0].resources[0].geocodePoints
    else {
      setSnackBar({
        open: true,
        message: "Não possível encontrar este endereço no mapa",
        result: 'error'
      })
      return false;
    }
  }


  useEffect(() => {
    function asyncFunc() {
      getResellers(function(err, resellers) {
        if (err) {
          dispatch(UtilsCreators.changeMessage());
          dispatch(UtilsCreators.changeMessageType(false));
          dispatch(UtilsCreators.changeMessageColor("red"));
          return;
        }
        dispatch(ResellerCreators.loadResellers(resellers));
      });
    }
    asyncFunc();
  }, []);

  function handleClose() {
    setDiag(false);
    setResellerToEdit({ address: {} });
  }

  function handleOpen(reseller) {
    setResellerToEdit(reseller);
    setDiag(true);
  }

  useEffect(() => {
    const input = document.getElementById('searchBox')
    let timeout = null
    input.addEventListener('focusout', (event) => {
      timeout = setTimeout(() => {
        setListAddressVis(false)
      }, 100)
    });


    return () => {
      clearTimeout(timeout)
      input.removeEventListener('focusout')
    }
  }, [])

  function editRes(res) {
    editReseller(res.id, { ...res }, function(err, data) {
      if (err) {
        dispatch(UtilsCreators.changeMessage(err));
        dispatch(UtilsCreators.changeMessageType(false));
        dispatch(UtilsCreators.changeMessageColor("red"));
        setVisible(true);
        handleClose();
        return;
      }
      getResellers(function(err, resellers) {
        if (err) {
          dispatch(UtilsCreators.changeMessage(err));
          dispatch(UtilsCreators.changeMessageType(false));
          dispatch(UtilsCreators.changeMessageColor("red"));
          return;
        }
        dispatch(ResellerCreators.loadResellers(resellers));
      });
      dispatch(UtilsCreators.changeMessage("Editado com sucesso"));
      dispatch(UtilsCreators.changeMessageType(true));
      dispatch(UtilsCreators.changeMessageColor("green"));
      handleClose();
      setVisible(true);
    });
  }

  function delMan(id) {
    deleteReseller(id, function(err, data) {
      if (err) {
        dispatch(UtilsCreators.changeMessage(err));
        dispatch(UtilsCreators.changeMessageType(false));
        dispatch(UtilsCreators.changeMessageColor("red"));
        setVisible(true);
        return;
      }
      getResellers(function(err, resellers) {
        dispatch(ResellerCreators.loadResellers(resellers));
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
          <DialogTitle id="form-dialog-title">Editar Revendedor</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nome"
              type="text"
              value={resellerToEdit.name}
              onChange={e =>
                setResellerToEdit({
                  ...resellerToEdit,
                  name: e.target.value
                })
              }
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Telefone"
              type="text"
              value={resellerToEdit.phone}
              onChange={e =>
                setResellerToEdit({
                  ...resellerToEdit,
                  phone: e.target.value
                })
              }
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="E-mail"
              type="text"
              value={resellerToEdit.email}
              onChange={e =>
                setResellerToEdit({
                  ...resellerToEdit,
                  email: e.target.value
                })
              }
              fullWidth
            />
            <Column style={{ position: "relative", minHeight: "300px"}}>
            <div id='printoutPanel'></div>
            <div id='searchBoxContainer'>
              <TextField
                autoFocus
                onFocus={() => setListAddressVis(true)}
                className="form-control" 
                type='text'
                autoComplete="new-password"
                placeholder="Digite o endereço" 
                id='searchBox' 
                value={resellerToEdit.address} 
                onChange={(e) => setResellerToEdit({ ...resellerToEdit, address: e.target.value})}
              />
            </div>
            {
              listAddressVis ? 
              <Column onMouseEnter={() => setListAddressVis(true)} style={{ background: 'white', boxShadow: '1px 1px 3px grey', borderRadius: '5px', padding: '10px', position: "absolute", top: "50px", width: "80%", zIndex: "9" }}>
                {listAddress.length > 0 ? listAddress.map((ad, i) => <Item key={i} onClick={() => {setResellerToEdit({...resellerToEdit, address: ad });console.log(ad)}} style={{ borderBottom: "1px solid grey"}}>{ad}</Item> ) : <Item>Nenhuma sugestão encontrada</Item>}
              </Column> : ''
            }   
            </Column> 

           {/* <TextField
              autoFocus
              margin="dense"
              id="logradouro"
              label="logradouro"
              type="text"
              value={resellerToEdit.address.publicPlace}
              onChange={e =>
                setResellerToEdit({
                  ...resellerToEdit,
                  address: {
                    ...resellerToEdit.address,
                    publicPlace: e.target.value
                  }
                })
              }
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="número"
              label="número"
              type="text"
              value={resellerToEdit.address.number}
              onChange={e =>
                setResellerToEdit({
                  ...resellerToEdit,
                  address: {
                    ...resellerToEdit,
                    number: e.target.value
                  }
                })
              }
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="Bairro"
              label="Bairro"
              type="text"
              value={resellerToEdit.address.district}
              onChange={e =>
                setResellerToEdit({
                  ...resellerToEdit,
                  address: {
                    ...resellerToEdit.address,
                    district: e.target.value
                  }
                })
              }
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="Cidade"
              label="Cidade"
              type="text"
              value={resellerToEdit.address.city}
              onChange={e =>
                setResellerToEdit({
                  ...resellerToEdit,
                  address: {
                    ...resellerToEdit.address,
                    city: e.target.value
                  }
                })
              }
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="Estado"
              label="Estado"
              type="text"
              value={resellerToEdit.address.state}
              onChange={e =>
                setResellerToEdit({
                  ...resellerToEdit,
                  address: {
                    ...resellerToEdit.state,
                    state: e.target.value
                  }
                })
              }
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="País"
              label="País"
              type="text"
              value={resellerToEdit.address.country}
              onChange={e =>
                setResellerToEdit({
                  ...resellerToEdit,
                  address: {
                    ...resellerToEdit,
                    country: e.target.value
                  }
                })
              }
              fullWidth
            />*/}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={() => editRes(resellerToEdit)} color="primary">
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <DivListCategories>
        {resellers.map((reseller, id) => (
          <ResellerContainer
            flexDirection="row"
            justifyContent="space-between"
            style={{ borderBottom: "1px solid lightgrey" }}
            key={id}
          >
            <ResellerContainer
              flexDirection="column"
              style={{ display: "flex", justifyContent: "column" }}
            >
              <p style={{ fontWeight: "200" }}>Nome: {reseller.name}</p>
              <p style={{ fontWeight: "200" }}>
                Endereço: {reseller.address}
              </p>
            </ResellerContainer>
            <ResellerContainer
              flexDirection="column"
              style={{ marginRight: "10px", marginLeft: "10px" }}
            >
              <Button onClick={() => handleOpen(reseller)}>Editar Revendedor</Button>
              <Button onClick={() => delMan(reseller.id)}>Apagar Revendedor</Button>
            </ResellerContainer>
          </ResellerContainer>
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
  max-height: 350px;
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

export const ResellerContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
`;


const Item = styled.p`
  font-size: 1rem;
  cursor: pointer;
  transition: .4s;
  :hover {
    opacity: .9;
    color: #81161B;
  }
  z-index: 9;
  margin: 0;
  padding: 12px 0;
    :last-child {
      border-bottom: none !important;
  }`