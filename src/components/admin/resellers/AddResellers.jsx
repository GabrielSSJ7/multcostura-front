import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import setApi from '../../../api'
import InputMask from "react-input-mask";
import { Input, Button } from "../../../static/styled-components/base";
import { getResellers } from '../../../utils/reseller'
import Message from "../../utils/Message";
import { Creators as ResellerCreators } from '../../../ducks/resellers'


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

  const dispatch = useDispatch()

  return (
    <>
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
        <Row>
          <Input
            style={{ flex: 2 }}
            className="spaceInputs"
            placeholder="Logradouro"
            onChange={e => setPublicPlace(e.target.value)}
            value={publicPlace}
            onKeyDown={Enter}
          />
            <Input
            style={{ flex: 1 }}
            placeholder="Número"
            onChange={e => setNumber(e.target.value)}
            value={number}
            onKeyDown={Enter}
          />
          <Input
            style={{ flex: 2 }}
            className="spaceInputs"
            placeholder="Bairro"
            onChange={e => setDistrict(e.target.value)}
            value={district}
            onKeyDown={Enter}
          />
          <Input
            style={{ flex: 2 }}
            className="spaceInputs"
            placeholder="Cidade"
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyDown={Enter}
          />
          <Input
          onKeyDown={Enter}
            style={{ flex: 1 }}
            className="spaceInputs"
            placeholder="Estado"
            onChange={e => setState(e.target.value)}
            value={state}
          />
          <Input
            onKeyDown={Enter}
            style={{ flex: 1 }}
            className="spaceInputs"
            placeholder="País"
            onChange={e => setCountry(e.target.value)}
            value={country}
          />
        
        </Row>
      </div>
      {visible ? (
        <Message result={result} color={color} message={message} />
      ) : (
        ""
      )}
      <Button onClick={() => createReseller()}>Criar categoria</Button>
    </>
  );

  function createReseller() {
    setApi()
      .post(`/reseller`, {
        name,
        phone,
        email,
        address: { publicPlace, city, district, state, country, number }
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
    setPublicPlace("");
    setDistrict("");
    setCity("")
    setState("");
    setCountry("");
    setNumber("");
  }
};

import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  input {
    margin-right: 5px;
  }
`;
