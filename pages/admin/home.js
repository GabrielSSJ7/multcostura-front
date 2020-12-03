import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Template from "../../src/components/templates/Admin";
import { withAuthSync } from "../../src/utils/auth";
import Sidebar from "../../src/components/admin/Sidebar";
import { Container } from "../../src/static/styled-components/base";
import HomeSlide from "../../src/components/admin/institutional/Home";
import BannerFixed from "../../src/components/admin/institutional/BannerFixed";

function Home() {
  const [components, setComponents] = useState({
    home: <HomeSlide />,
    enterprise: <BannerFixed type="enterpriseBanner" />,
    news: <BannerFixed type="newsBanner" />,
    contact: <BannerFixed type="contactBanner" />,
    produtos: <BannerFixed type="produtos" />,
    pecas: <BannerFixed type="pecas" />,
    noticias: <BannerFixed type="noticias" />,
    bndes: <BannerFixed type="bndes" />
  });

  const [componentsKey, setComponentsKey] = useState("");
  const [show, setShow] = useState(false);

  function setMenu(key) {
    setShow(true);
    setComponentsKey(key);
  }
  return (
    <Template>
      <Sidebar />
      <Container>
        <h1
          className="main-title"
          style={{
            textAlign: "center",
            color: "rgb(35,43,111)"
          }}
        >
          Institucional
        </h1>
        <Hr />

        {!show ? (
          <Row style={{ width: "93%" }}>
            <Column style={{ width: "100%" }}>
              <h3 className="main-title" style={{ color: "rgb(129, 22, 27)" }}>
                Opções
              </h3>

              <h1>Slides</h1>
              <CardContainer onClick={() => setMenu("home")}>
                <Row style={{ margin: "5px", alignItems: "center" }}>
                  {/* <FontAwesomeIcon icon={faHome} size="4x" /> */}
                  <p style={{ margin: "0 20px" }}>Página inicial</p>
                </Row>
                <RedPartCardContainer className="red-part">
                  <p style={{ color: "white" }}>Gerenciar slide</p>
                </RedPartCardContainer>
              </CardContainer>

              <CardContainer onClick={() => setMenu("enterprise")}>
                <Row style={{ margin: "5px", alignItems: "center" }}>
                  {/* <FontAwesomeIcon icon={faHome} size="4x" /> */}
                  <p style={{ margin: "0 20px" }}>Página A Empresa</p>
                </Row>
                <RedPartCardContainer className="red-part">
                  <p style={{ color: "white" }}>Alterar banner fixo</p>
                </RedPartCardContainer>
              </CardContainer>

              <CardContainer onClick={() => setMenu("news")}>
                <Row style={{ margin: "5px", alignItems: "center" }}>
                  {/* <FontAwesomeIcon icon={faHome} size="4x" /> */}
                  <p style={{ margin: "0 20px" }}>Página Notícias</p>
                </Row>
                <RedPartCardContainer className="red-part">
                  <p style={{ color: "white" }}>Alterar banner fixo</p>
                </RedPartCardContainer>
              </CardContainer>

              <CardContainer onClick={() => setMenu("contact")}>
                <Row style={{ margin: "5px", alignItems: "center" }}>
                  {/* <FontAwesomeIcon icon={faHome} size="4x" /> */}
                  <p style={{ margin: "0 20px" }}>Página Contato</p>
                </Row>
                <RedPartCardContainer className="red-part">
                  <p style={{ color: "white" }}>Alterar banner fixo</p>
                </RedPartCardContainer>
              </CardContainer>

              <CardContainer onClick={() => setMenu("bndes")}>
                <Row style={{ margin: "5px", alignItems: "center" }}>
                  {/* <FontAwesomeIcon icon={faHome} size="4x" /> */}
                  <p style={{ margin: "0 20px" }}>BNDES</p>
                </Row>
                <RedPartCardContainer className="red-part">
                  <p style={{ color: "white" }}>Alterar banner fixo</p>
                </RedPartCardContainer>
              </CardContainer>

              <h1>Lançamentos</h1>
              <CardContainer onClick={() => setMenu("produtos")}>
                <Row style={{ margin: "5px", alignItems: "center" }}>
                  {/* <FontAwesomeIcon icon={faHome} size="4x" /> */}
                  <p style={{ margin: "0 20px" }}>Card Produtos</p>
                </Row>
                <RedPartCardContainer className="red-part">
                  <p style={{ color: "white" }}>Alterar prévia</p>
                </RedPartCardContainer>
              </CardContainer>
              <CardContainer onClick={() => setMenu("pecas")}>
                <Row style={{ margin: "5px", alignItems: "center" }}>
                  {/* <FontAwesomeIcon icon={faHome} size="4x" /> */}
                  <p style={{ margin: "0 20px" }}>Card Peças</p>
                </Row>
                <RedPartCardContainer className="red-part">
                  <p style={{ color: "white" }}>Alterar prévia</p>
                </RedPartCardContainer>
              </CardContainer>
              <CardContainer onClick={() => setMenu("noticias")}>
                <Row style={{ margin: "5px", alignItems: "center" }}>
                  {/* <FontAwesomeIcon icon={faHome} size="4x" /> */}
                  <p style={{ margin: "0 20px" }}>Card Notícias</p>
                </Row>
                <RedPartCardContainer className="red-part">
                  <p style={{ color: "white" }}>Alterar prévia</p>
                </RedPartCardContainer>
              </CardContainer>
            </Column>
          </Row>
        ) : (
            components[componentsKey]
          )}
      </Container>
    </Template>
  );
}

const CardContainer = styled.div`
	max-height: 300px;
  height: 100px;
	overflow: hidden;
	cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
	margin-bottom: 10px;
	margin-right: 15px;
  padding: 0 0 0 15px;
  transition: .5s;
	:hover {
    box-shadow: 0 5px 12px rgba(0,0,0,0.25);
    .red-part {
      
      opacity: .9;
    }
    padding: 0 2px;
    p {
      color: rgb(129, 22, 27);
    }

    span {
      color: rgb(129, 22, 27);
    }
	}
	box-shadow: 0 1px 2px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
`;

const RedPartCardContainer = styled.div`
  background: rgb(129, 22, 27);
  height: 20vh;
  width: 20%;
  justify-self: end;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  padding-left: 15px;
  align-items: center;
`;

const Hr = styled.hr`
  width: 50%;
`;

const Row = styled.div`
  display: flex;
  margin-top: 7%;
  margin-left: 30px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export default withAuthSync(Home);
