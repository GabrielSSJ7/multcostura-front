import React from "react";
import styled from "styled-components";

export default function GalleryVideos({ images, removeVideo, uploading }) {
  return (
    <VideosContainer>
      {!images.length ? (
        <>{uploading ? <p>Enviando arquivos, aguarde...</p> : <p>Nenhum vídeo foi enviado</p>}</>
      ) : (
        images.map((vid, i) => (
          <VideoContainer>
            {" "}
            <p 
              style={{ 
                position: "absolute", 
                top: "100px", 
                background: "black", 
                color: "white", 
                padding: "10px",
                zIndex: "9",
                cursor: "pointer"
              }}
             onClick={() => removeVideo(i)}
            >
              Clique aqui para excluir
            </p>
            <Video
              width="220px"
              height="220px"
              src={vid}
              key={i}
              controls
             
            ></Video>
          </VideoContainer>
        ))
      )}
    </VideosContainer>
  );
}

const Video = styled.video`   
    position: relative;
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
    
    :hover {
      opacity: .8;
      
    }
`;

const VideoContainer = styled.div`
  position: relative;
  display: flex;
  height: 220px;
  justify-content:center;
  p {
    opacity: 0;
    transition: 0.2s;
    text-align: center;
    position: absolute;
    top: -10px;
  }

  :hover {
      p {
        opacity: 1;
        color: black;
        background: white;
        padding: 5px;
      }
    }
  }
`;

const VideosContainer = styled.div`
  display: flex;
  max-height: 400px;
  overflow: auto;
  height: 400px;
  flex-wrap: wrap;
`;
