import React from "react";
import styled from "styled-components";

import { Container } from "../../src/static/styled-components/base";
import Template from "../../src/components/templates/Admin";
import Sidebar from "../../src/components/admin/Sidebar";
import AddCategory from "../../src/components/admin/categories/addCategory";
import ListCategories from "../../src/components/admin/categories/ListCategories";
export default function Categories() {
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
            Categorias
          </h1>
          <Hr />
          <Subcontainer style={{ marginTop: "50px" }}>
            <ListCategories />
          </Subcontainer>
          <Subcontainer style={{ marginTop: "50px" }}>
            <AddCategory />
          </Subcontainer>
        </div>
      </Container>
    </Template>
  );
}

export const Hr = styled.hr`
  width: 50%;
`;

export const Subcontainer = styled.div`
  padding: 0 15px;
`;

export const ImageContainer = styled.div`
  img {
    max-width: 120px;
  }
`;

export const DivListCategories = styled.div`
  max-height: 550px;
  overflow: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(129, 22, 27);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
