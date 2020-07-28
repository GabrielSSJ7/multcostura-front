import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faIndustry,
  faUsers,
  faBuilding,
  faHeadset,
  faNewspaper,
  faPhone,
  faEnvelope,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
// import { Container } from './styles';
import iconMachine from "../../../static/images/maquina-icon.png";
import iconTool from "../../../static/images/peca-icon.png";
import iconFab from "../../../static/images/fab-icon.png";
import iconWhatsapp from "../../../static/images/whatsapp.png";

import arrowUp from "../../../static/images/arrow-up.png";
import arrowDown from "../../../static/images/arrow-down.png";

function MainMenu({ state }) {
  const router = useRouter();
  const { highDolar, pctChange, setListController } = state;
  const [routePath, setRoutePath] = useState("");

  useEffect(() => {
    setRoutePath(router.query.type || router.pathname);
  }, [router]);

  return (
    <Column>
      <Row
        jc="flex-start"
        ait="center"
        style={{ marginTop: "13px", padding: "0 15px" }}
        onClick={() => (window.location = "/")}
        activated={routePath == "/"}
      >
        <FontAwesomeIcon
          icon={faHome}
          size="2x"
          style={{ marginRight: "10px", maxWidth: '36px', width: '36px' }}
        />{" "}
        <span style={{ fontSize: "1.1rem" }}>Início</span>
      </Row>
      <Row
        onClick={() => setListController("categories")}
        jc="flex-start"
        ait="center"
        style={{ marginTop: "13px", padding: "0 15px" }}
        activated={routePath == "categories"}
      >
        <img src={iconMachine} style={{ width: "36px", marginRight: "10px", maxWidth: '36px', width: '36px' }} />{" "}
        <span style={{ fontSize: "1.1rem" }}>Máquinas</span>
      </Row>
      <Row
        onClick={() => setListController("manufacturers")}
        jc="flex-start"
        ait="center"
        style={{ marginTop: "13px", padding: "0 15px" }}
        activated={routePath == "manufacturer"}
      >
        <FontAwesomeIcon
          icon={faIndustry}
          size="2x"
          style={{ marginRight: "10px" , maxWidth: '36px', width: '36px'}}
        />{" "}
        <span style={{ fontSize: "1.1rem" }}>Nossas Marcas</span>
      </Row>
      <Row
        jc="flex-start"
        ait="center"
        style={{ marginTop: "13px", padding: "0 15px" }}
        onClick={() => (window.location = "/produtos?type=tools")}
        activated={routePath == "tools"}
      >
        <img src={iconTool} style={{ width: "36px", marginRight: "10px", maxWidth: '36px' }} />{" "}
        <span style={{ fontSize: "1.1rem" }}>Peças e Acessórios</span>
      </Row>
      <Row
        jc="flex-start"
        ait="center"
        style={{ marginTop: "13px", padding: "0 15px" }}
        activated={routePath == "/revendedores"}
        onClick={() => (window.location = "/#revendedores")}
      >
        <FontAwesomeIcon
         
          icon={faUsers}
          size="2x"
          style={{ marginRight: "10px", maxWidth: '36px', width: '36px' }}
        />{" "}
        <span style={{ fontSize: "1.1rem" }}>Revendedores</span>
      </Row>
      <Row
        jc="flex-start"
        ait="center"
        style={{ marginTop: "13px", padding: "0 15px" }}
        onClick={() => (window.location = "/empresa")}
        activated={routePath == "/empresa"}
      >
        <FontAwesomeIcon
          icon={faBuilding}
          size="2x"
          style={{ marginRight: "10px", maxWidth: '36px', width: '36px' }}
        />{" "}
        <span style={{ fontSize: "1.1rem" }}>Sobre nós</span>
      </Row>
      <Row
        jc="flex-start"
        ait="center"
        style={{ marginTop: "13px", padding: "0 15px", maxWidth: '36px' }}
        onClick={() => (window.location = "/contato")}
        activated={routePath == "/contato"}
      >
        <FontAwesomeIcon
          icon={faHeadset}
          size="2x"
          style={{ marginRight: "10px", maxWidth: '36px', width: '36px'  }}
        />{" "}
        <span style={{ fontSize: "1.1rem"}}>Contato</span>
      </Row>
      <Row
        jc="flex-start"
        ait="center"
        style={{ marginTop: "13px", padding: "0 15px" }}
        onClick={() => (window.location = "/noticias")}
        activated={routePath == "/noticias"}
      >
        <FontAwesomeIcon
          icon={faNewspaper}
          size="2x"
          style={{ marginRight: "10px", width: '36px', maxWidth: '36px' }}
        />{" "}
        <span style={{ fontSize: "1.1rem" }}>Notícias</span>
      </Row>

      <Column key={Math.round(Math.random() * 100)} style={{ padding: "10px" }}>
        <hr style={{ width: "100%" }} />
        <div style={{ flex: 2 }}>
          <p>
            <img
              src={iconWhatsapp}
              style={{
                marginRight: "5px",
                maxWidth: "16px",
              }}
            />{" "}
            Whatsapp: (11) 97472-3356
          </p>
        </div>
        <div style={{ flex: 2 }}>
          <p>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />{" "}
            (11) 2693-7212
          </p>
        </div>
        <div style={{ flex: 2 }}>
          <p>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />
            contato@multcostura.com.br
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <p>
            <FontAwesomeIcon
              icon={faDollarSign}
              style={{ marginRight: "5px" }}
            />
            Dólar:
            {pctChange ? (
              <img src={arrowUp} style={{ width: "16px" }} />
            ) : (
              <img src={arrowDown} style={{ width: "16px" }} />
            )}
            {highDolar}
          </p>
        </div>
      </Column>
    </Column>
  );
}

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  top: 30px;
  left: 5px;
  z-index: 9;
  border-bottom: 8px solid white;
  position: absolute;
  box-shadow: 0px 10px 10px #00000029;
  opacity: ${(props) => (props.vis ? 1 : 0)};
`;

const DropDownItem = styled.div`
  background: white;
  position: relative;
  font-size: 16px;
  color: #5e5e5e;
  opacity: 0.8;
  z-index: 9;
  :last-child {
    border-bottom: none;
  }
`;

const DropDownMenu = styled.div`
  position: absolute;
  left: 0px;
  top: 38px;
  z-index: 99;
  background: white;
  box-shadow: 0px 10px 10px #00000029;
  display: flex;
  transform-origin: top;
  transform: ${(props) => (props.vis ? "scaleY(1)" : "scaleY(0)")};
  transition: transform 0.2s !important;
  flex-direction: column;
  max-height: 350px;
  flex-wrap: wrap;
  min-width: 150px;
  width: 699px;
  transition: 0.2s;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #81161b;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #81161b;
  }

  div {
    display: ${(props) => (props.vis ? "inherit" : "none")};
    color: ${(props) => props.color};
    padding: 10px;
    cursor: pointer;
    transition: 0.2s;
    :hover {
      color: white;
      background-color: #2d34b8;
      opacity: 0.8 !important;
    }
  }
`;

const ItemPC = styled.div`
  transition: 0.2s;
  position: relative;
  cursor: pointer;
  padding: 10px 15px;
  :hover {
    background: #dfdfdf;
    p {
      color: rgb(26, 96, 146);
    }
  }
  display: flex;
  alignitems: center;
  p {
    margin: 0;
    text-transform: uppercase;
    color: #535353;
    font-size: 14px;
  }
`;

const SimpleText = styled.p`
  margin: 0;
  margin-bottom: 5px;
  font-size: 11px;
  color: #5e5e5e;
`;

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  width: 280px;
  height: 37px;
  padding: 0 10px;
  margin-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  margin-left: 0;
  border-radius: 1px;
  background-color: #1a6092;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
  }
`;

const itemActivated = css`
  color: #2548f3;
  fill: #2548f3;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  background: ${(props) => (props.bg ? props.bg : "white")};
  flex: ${(props) => props.flex};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ait};
  flex-wrap: ${(props) => props.fw};

  span {
    ${(props) => props.activated && itemActivated}
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => (props.bg ? props.bg : "white")};
  flex: ${(props) => props.flex};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ait};
  flex-wrap: ${(props) => props.fw};
`;

//Mobile
const LogoMobile = styled.img`
  height: 60px;
`;
const LogoMaior = styled.img`
  display: block;
  margin: auto;
  width: 80%;
`;
const SearchInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 3px;
  opacity: 1;
  height: 32px;
  width: 100%;
  margin-right: 3px;
`;
const SearchBtn = styled.span`
  height: 16px;
  background: #282d90 0% 0% no-repeat padding-box;
  box-shadow: 1px 1px 6px #00000029;
  border-radius: 3px;
  opacity: 1;
  cursor: pointer;
  color: white;
  padding: 10px;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;

export default MainMenu;
