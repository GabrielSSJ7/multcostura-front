import React, { useState, useEffect, useContext } from "react";
import { Router } from "../routes";
import setApi from "../src/api";
import Template from "../src/components/templates/Admin";

import cookies from "next-cookies";
import logo from "../src/static/images/logo-colorido.png";
import InputMask from "react-input-mask";

const reactCtx = React.createContext({});

export default function Login() {
  const ctx = useContext(reactCtx);
  useEffect(() => {
    const { user } = cookies(ctx);
    if (user) Router.push("/admin/home");
  }, []);
  const [state, setState] = useState({
    message: {
      show: false,
      text: ""
    },
    login: "",
    password: ""
  });
  function login() {
    const { login, password } = state;
    if (!login) {
      setState({
        ...state,
        message: { show: true, text: "Você precisa digitar um e-mail ou cpf" }
      });
    } else if (!password) {
      setState({
        ...state,
        message: { show: true, text: "Você precisa digitar a senha" }
      });
    } else {
      setApi()
        .post("/user/auth", {
          login: state.login,
          password: state.password
        })
        .then(response => {
          document.cookie = `user=${JSON.stringify(response.data)}`;
          Router.pushRoute("/admin/home");
        })
        .catch(err => {
          setState({
            ...state,
            message: { show: true, text: err.response.data }
          });
        });
    }
  }

  function _handleKeyDown(e) {
    if (e.key === "Enter") {
      login();
    }
  }
  return (
    <Template style={{ display: "flex" }}>
      <Body>
        <LoginContainer>
          <div>
            <Image src={logo} />
          </div>
          <hr />
          <Text>E-mail/CPF:</Text>
        
          <Input
            style={{ flex: 1 }}
            placeholder="Digite o seu usuário"
            onChange={e => setState({ ...state, login: e.target.value })}
            onKeyDown={_handleKeyDown}
            mask="999.999.999-99"
            maskChar=" "
            className="form-control"
          />
          <Text>Senha:</Text>
          <Input
            type="password"
            placeholder="Senha"
            onChange={e => setState({ ...state, password: e.target.value })}
            onKeyDown={_handleKeyDown}
          />
          <hr />
          <Button onClick={() => login()}>Entrar</Button>
        </LoginContainer>

        <DivMessage show={state.message.show ? "1" : "0"}>
          <Text style={{ textAlign: "center" }}>{state.message.text}</Text>
        </DivMessage>
      </Body>
    </Template>
  );
}

import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .form-control {
     width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }
`;

export const LoginContainer = styled.div`
  background-color: white;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 0.5px solid lightgrey;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Text = styled.p`
  color: grey;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #960d03;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const DivMessage = styled.div`
  padding: 10px;
  margin-top: 15px;
  background: #ff5647;
  width: 250px;
  border-radius: 10px;
  p {
    color: white !important;
  }
  opacity: ${props => props.show};
  transition: 0.5s;
`;

export const Image = styled.img`
  width: 50%;
  display: block;
  margin: auto;
`;
