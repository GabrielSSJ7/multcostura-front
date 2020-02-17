import React from "react";
import styled from "styled-components";

export default function GalleryImages({ images, removeImage, uploading }) {
  return (
    <ImagesContainer>
      {!images.length ? (
        <p>Nenhuma imagem foi enviada</p>
      ) : (
        images.map((img, i) => (
          <Image
            src={img}
            width="150px"
            height="150px"
            key={i}
            onClick={() => removeImage(i)}
          >
            <p>Clique aqui para excluir</p>
          </Image>
        ))
      )}
    </ImagesContainer>
  );
}

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
    margin: 10px;
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

const ImagesContainer = styled.div`
  display: flex;
  max-height: 400px;
  overflow: auto;
  height: 400px;
  flex-wrap: wrap;
`;
