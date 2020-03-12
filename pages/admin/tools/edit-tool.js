import React from "react";

import Template from "../../../src/components/templates/Admin";
import Sidebar from "../../../src/components/admin/Sidebar";
import { Container } from "../../../src/static/styled-components/base";
import EditTool from "../../../src/components/admin/tools/EditTool";

export default function Machine({ id }) {
  return (
    <Template>
      <Sidebar />
      <Container>
        <div style={{ width: "100%" }}>
          <EditTool id={id}/>
        </div>
      </Container>
    </Template>
  );
}

Machine.getInitialProps = async ({ query }) => {
  return { id: query.id };
};
