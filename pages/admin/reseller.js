import React, { useState, useEffect } from "react";
import Template from "../../src/components/templates/Admin";
import { Container, Hr } from "../../src/static/styled-components/base";
import Sidebar from "../../src/components/admin/Sidebar";
import ListResellers from "../../src/components/admin/resellers/ListResellers";
import AddReseller from "../../src/components/admin/resellers/AddResellers";

function Reseller() {
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
            Revendedores
          </h1>
          <Hr />
          <div style={{ marginTop: "50px", padding: "0 15px" }}>
            <ListResellers />
          </div>
          <div style={{ marginTop: "50px", padding: "0 15px" }}>
            <AddReseller />
          </div>
        </div>
      </Container>
    </Template>
  );

  
}

export default Reseller;
