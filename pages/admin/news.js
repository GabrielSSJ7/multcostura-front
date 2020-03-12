import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Router } from "../../routes";

import GalleryImages from "../../src/components/admin/news/GalleryImages";
import Template from "../../src/components/templates/Admin";
import Sidebar from "../../src/components/admin/Sidebar";
import {
  Container,
  Button,
  Hr,
  Input
} from "../../src/static/styled-components/base";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";

import setApi from "../../src/api";

export default function News() {
  const [news, setNews] = useState([]);
  const [snackBar, setSnackBar] = useState({
    result: "success",
    open: false,
    message: ""
  });
  const [search, setSearch] = useState("");
  useEffect(() => {
    function async() {
      setApi()
        .get("/news")
        .then(response => {
          setNews(response.data);
        })
        .catch(err => {});
    }
    async();
  }, []);

  function handleClose() {
    setSnackBar({
      ...snackBar,
      open: false
    });
  }

  useEffect(() => {
    function async() {
      setApi()
        .get(`/news?search=${search}`)
        .then(response => {
          if (response.data.length > 0) {
            setNews(response.data);
          } else {
            setNews([]);
            setSnackBar({
              open: true,
              result: "error",
              message: "Nenhuma notícia encontrada"
            });
          }
        });
    }
    async();
  }, [search]);
  return (
    <Template>
      <Sidebar />
      <Snackbar
        open={snackBar.open}
        autoHideDuration={3500}
        onClose={handleClose}
      >
        <Alert severity={snackBar.result}>{snackBar.message}</Alert>
      </Snackbar>
      <Container>
        <h1
          className="main-title"
          style={{
            textAlign: "center",
            color: "rgb(35,43,111)"
          }}
        >
          Todas as notícias
        </h1>
        <Hr />
        <Row>
          <Button onClick={() => Router.pushRoute("/admin/news/add-news")}>
            Adicionar nova notícia
          </Button>
        </Row>
        <Row>
          <Input
            value={search}
            type="text"
            name="search"
            id="search"
            placeholder="Pesquise pelo nome"
            onChange={e => setSearch(e.target.value)}
          />
        </Row>
        <Row style={{ flexWrap: "wrap", justifyContent: "flex-start", margin: "auto" }}>
          {news.map(news => (
            <CardContainer
              onClick={() =>
                Router.pushRoute("/admin/news/edit-news/" + news._id)
              }
            >
              <Row style={{ padding: 0 }}>
                <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", background: "lightgrey" }}>
                  {news.gallery.images.length > 0 ? <Image style={{ position: "relative" }} width="100%" height="100%" src={news.gallery.images[0]} /> : <p style={{fontSize: ".8rem", textAlign: "center"}}>Nenhuma imagem enviada</p>}
                </div>                  
                <Column style={{ flex: 1, justifyContent: "flex-start" }}>
                  <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px"}}>
                    <span>{news.date}</span>
                    <span>{news.title}</span>
                  </div>

                  <span style={{ fontSize: '.8rem', color: 'grey' }}>{news.description}</span>                  
                </Column>
              </Row>
            </CardContainer>
          ))}
        </Row>
      </Container>
    </Template>
  );
}

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding: 15px;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`;

const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('${props => props.src}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: ${props => props.width};
    height: ${props => props.height};
    transition: 0.4s;
    position: relative;
    cursor: pointer;
    p {
      opacity: 0;
      transition: .2s;
      text-align: center;
    }
    :hover {
      opacity: .8;
      p {
        opacity: 1;
        color: black;
        background: white;
        padding: 5px;
      }
    }
`;

const CardContainer = styled.div`
	flex: 1;
  min-width: 250px;
	max-height: 300px;
  height: 250px;
	overflow: hidden;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	flex-wrap: no-wrap;
	margin-bottom: 10px;
	margin-right: 10px;
	img {
		width: 100%;
		max-width: 230px;
		display: block;
		margin: auto
	}
	:hover {
		box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	}
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

}
`;
