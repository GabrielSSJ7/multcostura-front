import React, { useState, useEffect } from "react";
import axios from "axios";

import Template from "../../../src/components/templates/Admin";
import { Container, Hr, Button } from "../../../src/static/styled-components/base";
import Sidebar from "../../../src/components/admin/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons";

//import AddMachine from "../../../components/Admin/Machines/AddMachines/";
import ListMachine from "../../../src/components/admin/machines/ListMachines"

function Machines() {
  const [addMachineControll, setAddMachineControll] = useState(false);
  const [menuMachine, setMenuMachine] = useState(true);
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
            {!menuMachine ? (
              <Button
                style={{ width: "62px" }}
                onClick={() => selectOption("back")}
              >
                <FontAwesomeIcon icon={faArrowLeft} style={{ width: "16px" }} />
              </Button>
            ) : null}

            {menuMachine ? (
              <>
                <h3
                  className="main-title"
                  style={{ color: "rgb(129, 22, 27)" }}
                >
                  Opções
                </h3>
                <Button onClick={() => selectOption("edit")}>
                  Adicionar nova máquina
                </Button>
                <Button>Editar Máquinas</Button>
              </>
            ) : null}

            {/* {addMachineControll ? <AddMachine /> : null} */}
            <ListMachine />
          </div>
        </div>
      </Container>
    </Template>
  );
  function selectOption(option) {
    switch (option) {
      case "edit":
        setMenuMachine(false);
        setAddMachineControll(true);
        break;

      case "back":
        setMenuMachine(true);
        setAddMachineControll(false);
        break;
    }
  }
}

export default Machines;
