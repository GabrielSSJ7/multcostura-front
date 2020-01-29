import React from "react";
import Sidebar from '../../../src/components/admin/Sidebar'
import { Container, Hr, Button } from "../../../src/static/styled-components/base";
import Template from '../../../src/components/templates/Admin'
import AddMachine from '../../../src/components/admin/machines/AddMachine'

export default function NewMachine() {
  return (
    <Template>
      <Sidebar />
      <Container>
        <div style={{ width: "100%" }}>
          <h1
            className="main-title"
            style={{
              textAlign: "center",
              color: "rgb(35,43,111)"
            }}
          >
            Machine
          </h1>
          <Hr />
          <div style={{ marginTop: "50px", padding: "0 15px" }}>
           <AddMachine />
          </div>
        </div>
      </Container>
    </Template>
  );
}
