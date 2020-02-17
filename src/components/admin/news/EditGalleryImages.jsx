import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import FileInput from "rc-upload";
import Dropzone, { useDropzone } from "react-dropzone";

import GalleryImages from "./GalleryImages";
import setApi from "../../../api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";

import loadingGif from "../../../static/images/loading.gif";
import { validateImage } from '../../../utils/images'

export default function EditGalleryImages({
  images,
  removeImage,
  onSuccess,
  onError,
  headers
}) {
  const [uploading, setUp] = useState(false);

  const onDrop = useCallback(async acceptedFiles => {
    setUp(true);
    let error = false
    for (let file in acceptedFiles) {
      if (validateImage(process.env.imageExtensionPermitted, 10000, acceptedFiles[file])) {
        const formData = new FormData();
        formData.append("img", acceptedFiles[file]);

        await setApi({ ...headers }).post("/gallery", formData);
        error = false
        onSuccess();
      } else {
        onError(`Extensão do arquivo ${acceptedFiles[file].name} é inválido. Extensões permitidas ${process.env.imageExtensionPermitted.toString()}, com no máximo 10MB`)
        error = true
      }
    }
      
    setUp(false);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <Row>
        <h3 className="main-title" style={{ color: "rgb(129, 22, 27)" }}>
          Galeria de Imagens
        </h3>
      </Row>
      <Row>
        <GalleryImages images={images} removeImage={removeImage} uploading={uploading} />
      </Row>

      <Row>
        {uploading ? (
          <Loading src={loadingGif} />
        ) : (
          <LabelInput {...getRootProps()}>
            <input {...getInputProps()} />
            <p>
              Arraste e solte os arquivos ou clique aqui para enviar as imagens
            </p>
          </LabelInput>
        )}
      </Row>
    </>
  );
}

const Loading = styled.img`
  width: 32px;
  height: 32px;
  display: block;
  margin: auto;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  padding: 15px;
`;

const LabelInput = styled.div`
  display: flex;
  flex-direction: column;
  color: grey;
  align-items: center;
  width: 100%;
  border: 3px dotted grey;
  cursor: pointer;
  padding: 50px;
  text-align: center;
  :hover {
    border: 3px dotted lightblue;
  }
`;
