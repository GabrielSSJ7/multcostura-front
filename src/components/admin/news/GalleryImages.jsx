import React from "react";
import styled from "styled-components";

export default function GalleryImages({ images }) {
  return (
    <ImagesContainer>
      {images.map((img, i) => (
        <Image src={img} width="150px" height="150px" key={i} />
      ))}
    </ImagesContainer>
  );
}

const Image = styled.div`
    background-image: url('${props => props.src}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: 10px;
    transition: 0.4s;
    position: relative;
`;

const ImagesContainer = styled.div`
  display: flex;

  height: 400px;
  flex-wrap: wrap;
`;
