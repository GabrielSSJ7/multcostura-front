import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Template from "../../../components/Template";
import Nav from "../../../components/Admin/Nav";
import { Container, Hr, Button } from "../../../components/Admin/baseStyle";
import EditMachine from "../../../components/Admin/Machines/EditMachine/index";
import Message from "../../../components/Message";

export default function Machine({ id }) {
  const [machine, setMachine] = useState({});
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(false);
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("red");

  useEffect(() => {
    function _getMachine() {
      getMachine();
    }
    _getMachine();
  }, []);
  return (
    <Template>
      <Nav />
      <Container>
        <div style={{ width: "100%" }}>
          <EditMachine machine={machine} />
        </div>
      </Container>
    </Template>
  );

  function getMachine() {
    axios
      .get(`/machine/${id}`)
      .then(response => {
        console.log(response.data);
        setMachine(response.data);
      })
      .catch(err => {
        console.log("ERR => ", err);
        _setMessage(false, err.response ? err.response.data : "", true);
      });
  }
  function _setMessage(result, message, visible, color) {
    setResult(result);
    setMessage(message);
    setVisible(visible);
    setColor(color);
  }
}

Machine.getInitialProps = async ({ query }) => {
  console.log("query => ", query);
  return { id: query.id };
};
