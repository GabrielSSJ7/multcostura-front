import React, { useState, useEffect } from "react";
import setApi from "../../src/api";

import Template from "../../src/components/templates/Admin";
import { Container, Hr } from "../../src/static/styled-components/base";
import Sidebar from "../../src/components/admin/Sidebar";
import ListManufacturers from "../../src/components/admin/manufacturers/ListManufacturers";
import AddManufacturer from "../../src/components/admin/manufacturers/AddManufacturer";

function Manufacturers() {
  
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
            Fabricantes
          </h1>
          <Hr />
          <div style={{ marginTop: "50px", padding: "0 15px" }}>
            <ListManufacturers />
          </div>
          <div style={{ marginTop: "50px", padding: "0 15px" }}>
            <AddManufacturer />
          </div>
        </div>
      </Container>
    </Template>
  );
}

export default Manufacturers;
