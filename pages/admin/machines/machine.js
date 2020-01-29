import React from "react";

import Template from "../../../src/components/templates/Admin";
import Sidebar from "../../../src/components/admin/Sidebar";
import { Container } from "../../../src/static/styled-components/base";
import EditMachine from "../../../src/components/admin/machines/EditMachine";

export default function Machine({ id }) {
  return (
    <Template>
      <Sidebar />
      <Container>
        <div style={{ width: "100%" }}>
          <EditMachine id={id}/>
        </div>
      </Container>
    </Template>
  );
}

Machine.getInitialProps = async ({ query }) => {
  return { id: query.id };
};
