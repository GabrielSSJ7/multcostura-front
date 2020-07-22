import React, { Functioncomponent, useEffect, useRef } from "react";
import styled from "styled-components";
import { Router, Link } from "../../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faWhatsApp,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import logoMini from "../../static/images/logo-colorido.png";
import facebookIcon from "../../static/images/facebook.png";
import instagramIcon from "../../static/images/instagram.png";
import youtubeIcon from "../../static/images/youtube.png";
import cartoesBndes from "../../static/images/logo bnds.png";
import logoBranco from "../../static/images/logo-branco.png";
import whatsapp from "../../static/images/Icon_whatsapp_rodape.svg";
import gplay from "../../static/images/gplay.svg";
import ig from "../../static/images/Icon_instagram_rodape.svg";
import fb from "../../static/images/Icon_facebook_rodape.svg";
import yt from "../../static/images/Icon_youtube_rodape.svg";

export default function Footer() {
  return (
    <Col
      style={{
        backgroundColor: "#3C3D41",
        minHeight: "383px",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "50px",
      }}
    >
      {/*  conteúdo */}
      <Row className="media" style={{ maxWidth: "980px", flexWrap: "wrap" }}>
        <div className="menu-itens" style={{ width: "194px", minWidth: "194px", marginTop: "57px" }}>
          <GPlay
            onClick={() => (window.location.href = "/")}
            src={logoBranco}
            alt="logo multcostura negativo"
            style={{ width: "100%" }}
          />
        </div>
        <Col
          style={{ marginTop: "57px", marginLeft: "30px" }}
          className="inicio menu-itens"
        >
          <Item b style={{ marginBottom: "20px" }}>
            Início
          </Item>

          <Item hover onClick={() => (window.location.href = "/")}>
            Home
          </Item>
          {/*<Item>Nossas Marcas</Item>*/}
          <Link href="/#revendedores">
            <Item hover>Revendedores</Item>
          </Link>
          <Item hover onClick={() => (window.location.href = "/produtos")}>
            Máquinas
          </Item>
          <Item
            hover
            onClick={() => (window.location.href = "/produtos?type=tools")}
          >
            Peças e Acessórios
          </Item>
          <Item hover onClick={() => (window.location.href = "/noticias")}>
            Notícias
          </Item>
          <Item hover onClick={() => (window.location.href = "/empresa")}>
            Sobre nós
          </Item>
        </Col>
        <Col
          className="inicio menu-itens"
          style={{ marginTop: "57px" }}
          jc="space-between"
        >
          <Col>
            <Item b>Endereço</Item>
            <Row className="inicio">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{
                  marginRight: "5px",
                  transform: { translateY: "50%" },
                  color: "white",
                }}
              />
              <Item style={{ marginTop: 0 }}>
                Rua Newton Prado, 71
                <br /> Bom Retiro São Paulo SP <br /> Cep: 01127-000
              </Item>
            </Row>
          </Col>
          <Col className="menu-itens">
            <Item b>Contato</Item>
            <Row className="inicio">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  color: "white",
                  marginRight: "5px",
                }}
              />
              <Item>contato@multcostura.com.br</Item>
            </Row>
            <Row className="inicio">
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  color: "white",
                  marginRight: "5px",
                }}
              />
              <Item>(11) 2693-7212</Item>
            </Row>
            <Row ait="center" className="inicio">
              <img src={whatsapp} />
              <Item style={{ marginBottom: 0, marginLeft: "5px" }}>
                (11) 97472-3356
              </Item>
            </Row>
          </Col>
        </Col>

        <Col className="inicio menu-itens" style={{ marginTop: "57px" }}>
          <Item b>Redes Sociais</Item>
          <Row
            className="m-auto"
            jc="space-between"
            style={{ marginBottom: "48px", maxWidth: "70%" }}
          >
            <a href="https://www.facebook.com/multcostura/" target="_blank">
              <GPlay src={fb} alt="facebook icon" style={{ width: "34px" }} />
            </a>
            <a
              href="https://www.instagram.com/multcostura_oficial"
              target="_blank"
            >
              <GPlay src={ig} alt="instagram icon" style={{ width: "34px" }} />
            </a>
            <a href="https://www.youtube.com/multcostura/" target="_blank">
              <GPlay src={yt} alt="youtube icon" style={{ width: "34px" }} />
            </a>
          </Row>
          <div className="m-auto" style={{ maxWidth: "209px", width: "209px" }}>
            <GPlay
              src={gplay}
              alt="dísponivel no google play"
              style={{
                width: "100%",
              }}
            />
          </div>
        </Col>
      </Row>
      {/*  direitos reservados */}
      <Row
        style={{
          alginSelf: "flex-end",
          background: "#343434",
          flexWrap: "wrap",
        }}
        jc="center"
        ait="center"
      >
        <p
          style={{
            fontSize: "12px",
            color: "white",
            fontFamily: "arial",
            opacity: 0.6,
            minWidth: "320px",
            textAlign: "center",
          }}
        >
          &copy; 2020 Todos os direitos reservados.
        </p>
        &nbsp;
        <p
          style={{
            fontSize: "12px",
            color: "white",
            fontFamily: "arial",
            opacity: 0.6,
            minWidth: "320px",
            textAlign: "center",
          }}
        >
          Criado por{" "}
          <a
            style={{
              color: "white",
            }}
            href="https://www.squad.ag/servicos-marketing-digital-4-0/"
            target="_blank"
          >
            Squad Marketing 4.0
          </a>
        </p>
        &nbsp;
        <div style={{ minWidth: "320px" }}>
          <img
            style={{ maxWidth: "50px", margin: "auto", display: "block" }}
            src="https://www.squad.ag/wp-content/uploads/2020/03/cropped-logo-squad.png"
            alt="logo squad marketing"
          />
        </div>
      </Row>
    </Col>
  );
}

const GPlay = styled.img`
  cursor: pointer;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
  }
`;

const Item = styled.p`
  color: white;
  font-weight: bold;
  margin: 0;
  margin-bottom: 13px;

  @media (max-width: 950px) {
    text-align: center;
  }

  ${(props) =>
    props.hover
      ? `
  cursor: pointer;
  :hover {
    opacity: .5
  }`
      : ``}
  ${(props) =>
    props.b
      ? `
    font-size: 20px;
  `
      : `
    font-family: arial;
    font-weight: 200 !important;
    font-size: 14px;
    opacity: .8;
    transition: .2s;
  `}
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  flex: ${(props) => props.flex};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ait};
  flex-wrap: ${(props) => props.fw};

  .menu-itens {
    @media(max-width: 500px) {
      margin-top: 35px !important;
    }
  }
`;

const Col = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: ${(props) => props.flex};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ait};
  flex-wrap: ${(props) => props.fw};

  .media {
    @media (max-width: 950px) {
      flex-direction: column !important;
      align-items: center;
    }
  }

  .m-auto {
    @media (max-width: 950px) {
      margin: auto;
    }
  }

  .inicio {
    max-width: 250px;
    @media (max-width: 950px) {
      p {
        text-align: center;
      }
      justify-content: center;
      margin-left: 0 !important;
    }
  }
`;
