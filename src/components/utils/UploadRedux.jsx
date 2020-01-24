import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Creators } from "../../ducks/upload";

const reactCtx = React.createContext({});

export default function Upload({ onRef, imageURL, labelInputFile, id }) {
  const ctx = useContext(reactCtx);
  const dispatch = useDispatch();
  const { file, key } = useSelector(state => state.Upload);
  useEffect(() => {
    if (onRef) onRef(ctx);
  }, []);

  useEffect(() => {
    console.log(file)
    return () => {
      
    };
  }, [file]);

  function handleChange(event) {
    const file = event.target.files[0];
    if (file) {
      dispatch(Creators.changeFile(file));
    } else {
      dispatch(Creators.changeFile(null));
    }
  }

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
        name="icon"
        id="icon"
        onChange={handleChange}
        key={key}
      />
      <label
        htmlFor="icon"
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
