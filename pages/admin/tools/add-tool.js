import React from "react";
import Sidebar from '../../../src/components/admin/Sidebar'
import { Container, Hr, Button } from "../../../src/static/styled-components/base";
import Template from '../../../src/components/templates/Admin'
import AddTool from '../../../src/components/admin/tools/AddTool'

export default function NewTool() {
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
            Peça
          </h1>
          <Hr />
          <div style={{ marginTop: "50px", padding: "0 15px" }}>
           <AddTool />
          </div>
        </div>
      </Container>
    </Template>
  );
}
