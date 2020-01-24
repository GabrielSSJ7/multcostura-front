import React from "react";
import Template from "../../src/components/templates/Admin";
import { withAuthSync } from "../../src/utils/auth";
import Sidebar from "../../src/components/admin/Sidebar";

class AdminHome extends React.Component {
  render() {
    return (
      <Template>
        <Sidebar />
      </Template>
    );
  }
}

export default withAuthSync(AdminHome);
