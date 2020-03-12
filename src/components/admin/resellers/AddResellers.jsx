import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import setApi from '../../../api'
import Head from 'next/head'
import InputMask from "react-input-mask";
import { Input, Button, Column } from "../../../static/styled-components/base";
import { getResellers } from '../../../utils/reseller'
import Message from "../../utils/Message";
import { Creators as ResellerCreators } from '../../../ducks/resellers'
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";


export default  () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [publicPlace, setPublicPlace] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(false);
  const [color, setColor] = useState("red");
  const [listAddress, setListAddress] = useState([])
  const [listAddressVis, setListAddressVis] = useState(false)
  const [address, setAddress] = useState("")
  const [snackBar, setSnackBar] = useState({
    result: "success",
    open: false,
    message: ""
  });

  const dispatch = useDispatch()

  useEffect(() => {
    async function asyncFunc() {
      const response = await setApi().get(`http://dev.virtualearth.net/REST/v1/Autosuggest?query=${address}&maxResults=5&key=ArBcF40dX4IT5Co3SIxT7TfvEqq3VNdafH09G2lYGLmm1PvaaFwU-xHaQLjtmpDe`)
      const fAddress = response.data.resourceSets[0].resources[0].value
      const sugestion = []
      for (let formattedAddress in response.data.resourceSets[0].resources[0].value) {
        sugestion.push(fAddress[formattedAddress].address.formattedAddress)
      }
      setListAddress(sugestion)
    }

    asyncFunc();
  }, [address])

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

  function handleClose() {
    setSnackBar({
      ...snackBar,
      open: false
    });
  }

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

  return (
    <>
      <Head>
        <script type='text/javascript' src={process.env.mapsKey} async defer></script>
      </Head>
      <Snackbar
          open={snackBar.open}
          autoHideDuration={3500}
          onClose={handleClose}
        >
        <Alert severity={snackBar.result}>{snackBar.message}</Alert>
      </Snackbar>
      <h3 className="main-title" style={{ color: "rgb(129, 22, 27)" }}>
        Adicionar novo revendedor
      </h3>
      <div>
        <Row>
          <Input
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
            value={name}
            onKeyDown={Enter}
            style={{ flex: 2, marginRight: "5px" }}
          />
          <Input
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            style={{ flex: 2, marginRight: "5px" }}
            onKeyDown={Enter}
          />
          <InputMask
            style={{ flex: 1 }}
            placeholder="Telefone"
            onChange={e => setPhone(e.target.value)}
            value={phone}
            mask="+99 99 99999-9999"
            maskChar=" "
            className="form-control"
            onKeyDown={Enter}
          />
        </Row>
        <Column style={{ position: "relative" }}>

          <div id='printoutPanel'></div>
          <div id='searchBoxContainer'>
            <input
              onFocus={() => setListAddressVis(true)}
              className="form-control" 
              type='text'
              autoComplete="new-password"
              placeholder="Digite o endereço" 
              id='searchBox' 
              value={address} 
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          {
            listAddressVis ? 
            <Column onMouseEnter={() => setListAddressVis(true)} style={{ background: 'white', boxShadow: '1px 1px 3px grey', borderRadius: '5px', padding: '10px', position: "absolute", top: "50px", width: "80%" }}>
              {listAddress.length > 0 ? listAddress.map((ad, i) => <Item key={i} onClick={() => {setAddress(ad);console.log(ad)}} style={{ borderBottom: "1px solid grey"}}>{ad}</Item> ) : <Item>Nenhuma sugestão encontrada</Item>}
            </Column> : ''
          }     
        </Column>
      </div>
      {visible ? (
        <Message result={result} color={color} message={message} />
      ) : (
        ""
      )}
      <Button onClick={() => createReseller()}>Criar categoria</Button>
    </>
  );

  async function createReseller() {
    const geocode = await geoCoding(address);
    if (!geocode) return
    setApi()
      .post(`/reseller`, {
        name,
        phone,
        email,
        address: address,
        geocode: {
          lat: geocode[0].coordinates[0],
          lng: geocode[0].coordinates[1]
        }
      })
      .then(response => {
        setResult(true);
        setColor("green");
        setMessage("Revendedor criado com sucesso");
        setVisible(true);
        getResellers(function (err, data ) {
            dispatch(ResellerCreators.loadResellers(data))
        });
        resetForm();
      })
      .catch(err => {
        setResult(false);
        setMessage(err.response ? err.response.data : err.toString());
        setVisible(true);
      });
  }

  function Enter(e) {
    if (e.key == "Enter") {
        createReseller();
    }
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  }
};

import styled from "styled-components";

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
  }
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  input {
    margin-right: 5px;
  }
`;
