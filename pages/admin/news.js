import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FileInput from "rc-upload";

import GalleryImages from "../../src/components/admin/news/GalleryImages";
import Template from "../../src/components/templates/Admin";
import Sidebar from "../../src/components/admin/Sidebar";
import { Container } from "../../src/static/styled-components/base";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function News() {
  const [images, setImages] = useState([
    "https://vimg.xvideosporno.blog.br/contents/videos_screenshots/1000/1629/240x180/52.jpg",
    "https://pornobrasil.blog.br/wp-content/uploads/2019/03/buceta.jpg",
    "https://img-hw.xvideos-cdn.com/videos/thumbslll/c7/96/14/c79614873e65aa605930f49bb3412481/c79614873e65aa605930f49bb3412481.15.jpg",
    "https://img-hw.xnxx-cdn.com/videos/thumbslll/4e/8e/cd/4e8ecd8a80a876d0ea38b971e9fa1c05/4e8ecd8a80a876d0ea38b971e9fa1c05.1.jpg",
    "https://xvideos10.blog.br/wp-content/uploads/2017/10/ninfeta-tomando-gozada-cremosa-dento-da-buceta.jpg"
  ]);
  function onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  }
  return (
    <Template>
      <Sidebar />
      <Container>
        <GalleryImages images={images} />

        <Row>
          <LabelInput htmlFor="news-gallery">
            <FontAwesomeIcon icon={faArrowUp} size="2x" />
            Arraste ou clique para enviar as imagens
          </LabelInput>
          <FileInput
            id="news-gallery"
            name="news-gallery"
            style={{ width: "0", height: "0" }}
          />
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

const LabelInput = styled.label`
  display: flex;
  flex-direction: column;
  color: grey;
  align-items: center;
  width: 100%;
  border: 1px dotted grey;
  cursor: pointer;
  padding: 50px;
  text-align: center;
`;
