import React, { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Upload({file,  handleChange,  imageURL,  labelInputFile,  id,  name,key
}) {
  return (
    <>
      <input
        id={id}
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
        onChange={handleChange}
        key={key}
      />
      <label
        htmlFor={id}
        style={{
          border: "1px dotted lightgrey",
          padding: "5px 10px",
          cursor: "pointer"
        }}
      >
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
          <img src={file ? URL.createObjectURL(file) : ""} />
        ) : (
          <img src={imageURL} />
        )}
      </label>
    </>
  );
}
