import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Upload({
  file,
  handleChange,
  deleteImage,
  imageURL,
  labelInputFile,
  id,
  name,
  key,
  labelWidth,
  labelHeight,
  maxWidth,
  cleanFileInput,
  btnDelete,
  border
}) {
  return (
    <>
      <input
        type="file"
        style={{
          width: "0.1px",
          height: "0.1px",
          opacity: 0,
          overflow: "hidden",
          position: "absolute",
          zIndex: -1
        }}
        name={name}
        id={id}
        onChange={handleChange}
        key={key}
      />
      <div
        style={{
          border: !border ? "1px dotted lightgrey" : '',
          padding: "50px 10px",
          cursor: "pointer",
          textAlign: "center",
          width: labelWidth,
          height: labelHeight,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <label style={{ cursor: "pointer", width: labelWidth,
          height: labelHeight, }} htmlFor={id}>
          <span
            style={{
              display: file ? "none" : imageURL ? "none" : "flex",
              flexDirection: "column "
            }}
          >
            <FontAwesomeIcon
              icon={faArrowUp}
              style={{ width: "32px", margin: "auto", display: "block" }}
            />{" "}
            <br />
            <hr style={{ width: "100%" }} />
            {labelInputFile}
          </span>
          {file ? (
            <img
              style={{ maxWidth }}
              src={file ? URL.createObjectURL(file) : ""}
            />
          ) : (
            <>
              {imageURL ? (
                !btnDelete ? (
                  <ButtonDelImg onClick={deleteImage}>Excluir Imagem</ButtonDelImg>
                ) : null
              ) : null}
              <img style={{ maxWidth }} src={imageURL} />
            </>
          )}
        </label>
        {file ? (
          <FontAwesomeIcon
            icon={faTrash}
            style={{
              width: "16px",
              position: "absolute",
              borderRadius: "10px",
              padding: "3px",
              background: "rgb(129, 22, 27)",
              color: "white",
              right: "13px",
              top: "10px",
              cursor: "pointer",
              zIndex: "9"
            }}
            onClick={() => cleanFileInput(name)}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

const ButtonDelImg = styled.button`
  background-color: #960d03;
  color: white;
  padding: 8px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  position: absolute;
  width: 75px;
  right: 0;
  top: 0px;
  font-size: 8px;
  z-index: 9;
  cursor: pointer;
`;
