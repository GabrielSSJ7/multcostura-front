import React from "react";
import styled from "styled-components";

import Icon from "../../static/images/triangle.png";
import IconSuccess from "../../static/images/success.png";

export default ({ message, color, result }) => (
  <DivMessage
    style={{
      backgroundColor: color,
      color: "white",
      textAlign: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <img
      src={result ? IconSuccess : Icon}
      style={{ width: "16px", marginRight: "5px" }}
    />
    <span style={{ marginTop: "5px" }}>{message}</span>
  </DivMessage>
);

const DivMessage = styled.div`
  padding: 10px;
  margin-top: 15px;
  background: #ff5647;
  width: 250px;
  border-radius: 10px;
  p {
    color: white !important;
  }
  opacity: ${props => props.show};
  transition: 0.5s;
`;
