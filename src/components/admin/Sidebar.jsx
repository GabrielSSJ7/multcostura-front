import React from "react";
import styled from "styled-components";
import { Router } from "../../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faUsers,
  faCartPlus,
  faNewspaper,
  faDoorOpen,
  faHome,
  faHandshake
} from "@fortawesome/free-solid-svg-icons";
import { removeItem } from "../../utils/local";

export default () => (
  <DivRoot>
    <DivHeader>
      <ImageHeader
        src={require("../../static/images/logo-multcostura-opção-3.png")}
      />
    </DivHeader>
    <hr style={{ width: "80%" }} />
    <DivItem onClick={() => navigate("home")}>
      <FontAwesomeIcon icon={faHome} size="2x" />
      <NavLink>Institucional</NavLink>
    </DivItem>
    <DivItem onClick={() => navigate("categories")}>
      <FontAwesomeIcon icon={faList} size="2x" />

      <NavLink>Categorias</NavLink>
    </DivItem>
    <DivItem onClick={() => navigate("manufacturers")}>
      <FontAwesomeIcon icon={faUsers} size="2x" />

      <NavLink>Fabricantes</NavLink>
    </DivItem>
    <DivItem onClick={() => navigate("reseller")}>
      <FontAwesomeIcon icon={faHandshake} size="2x" />

      <NavLink>Revendedores</NavLink>
    </DivItem>
    <DivItem onClick={() => navigate("machines")}>
      <FontAwesomeIcon icon={faCartPlus} size="2x" />

      <NavLink>Máquinas</NavLink>
    </DivItem>
    <DivItem onClick={() => navigate("news")}>
      <FontAwesomeIcon icon={faNewspaper} size="2x" />

      <NavLink>Notícias</NavLink>
    </DivItem>
    <DivItem onClick={() => logout()}>
      <FontAwesomeIcon icon={faDoorOpen} size="2x" />
      <span>Sair</span>
    </DivItem>
  </DivRoot>
);

function navigate(route) {
  Router.pushRoute(`/admin/${route}`);
}

function logout() {
  //removeItem("user");
  document.cookie = `user=;`;
  Router.pushRoute("/login");
}

export const DivRoot = styled.div`
  background-color: rgb(129, 22, 27);
  height: 100vh;
  width: 220px;
  display: flex;
  position: fixed;
  flex-direction: column;
  overflow: auto;
  max-height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

//vermelho 129, 22, 27
//azul 35,43,111

export const DivHeader = styled.div``;
export const ImageHeader = styled.img`
  width: 100%;
  margin: 20px auto;
  display: block;
`;

export const DivItem = styled.div`
  padding: 20px 15px;
  color: white;
  transition: 0.5s;
  display: flex;
  align-items: center;
  flex-direction: row;
  svg {
    width: 15px;
    margin-right: 10px;
  }
  cursor: pointer;
  :hover {
    background: rgb(35, 43, 111);
  }
`;
export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
`;
