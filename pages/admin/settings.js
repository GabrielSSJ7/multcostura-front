import React, { useState, useEffect } from "react";
import Template from "../../src/components/templates/Admin";
import { Container, Hr, Button } from "../../src/static/styled-components/base";
import Sidebar from "../../src/components/admin/Sidebar";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

import setApi from "../../src/api";

function Reseller() {
  const [settings, setSettings] = useState({});
  const [snackBar, setSnackBar] = useState({
    result: "success",
    open: false,
    message: "",
  });
  function getSettings() {
    setApi()
      .get("/settings")
      .then((response) => {
        console.log("[admin/settings] ", response.data);
        setSettings(response.data[0]);
      })
      .catch((err) => {
        console.log("[admin/settings] ", err);
      });
  }

  useEffect(() => {
    getSettings();
  }, []);

  function FiltersCheckBoxes({ settings }) {
    const [filters, setFilters] = useState([]);
    useEffect(() => {
      setFilters(settings.desativatedFilters);
    }, []);

    function onChangeCheckBox(event) {
      const target = event.target;
      const newFilters = filters.map((f, i) => {
        if (f.name == target.name) return { ...f, status: !f.status };

        return f;
      });

      setFilters(newFilters);
    }

    function handleClose() {
      setSnackBar({
        ...snackBar,
        open: false,
      });
    }

    function save() {
      console.log("[admin/settings] ", filters);

      setApi()
        .put("/settings/" + settings._id, { desativatedFilters: filters })
        .then((response) => {
          getSettings()
          setSnackBar({
            result: "success",
            open: true,
            message: "Configurações salvas com sucesso",
          });
        })
        .catch((err) => {
          setSnackBar({
            result: "success",
            open: true,
            message: err.response ? err.response.data : err.toString(),
          });
        });
    }

    return filters ? (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {filters.map((f) => (
            <div style={{ margin: "5px", display: "flex", width: "25%" }}>
              <input
                type="checkbox"
                checked={f.status}
                onChange={onChangeCheckBox}
                name={f.name}
              />
              <label htmlFor="filtro">
                {f.name
                  .replace(/([A-Z])/g, " $1")
                  .trim()
                  .toLowerCase()}
              </label>
            </div>
          ))}
        </div>
        <Snackbar
          open={snackBar.open}
          autoHideDuration={3500}
          onClose={handleClose}
        >
          <Alert severity={snackBar.result}>{snackBar.message}</Alert>
        </Snackbar>
        <Button style={{ width: "100%" }} onClick={save}>
          Salvar
        </Button>
      </div>
    ) : (
      <div />
    );
  }

  return (
    <Template>
      <Sidebar />
      <Container>
        <div style={{ width: "100%" }}>
          <h1
            className="main-title"
            style={{
              textAlign: "center",
              color: "rgb(35,43,111)",
            }}
          >
            Configurações
          </h1>
          <Hr />
        </div>
        <div style={{ width: "50%" }}>
          <h4 className="main-title" style={{ textAlign: "center" }}>
            Ativar/Desativar Filtros
          </h4>
        </div>
        <div style={{ marginLeft: "5%", width: "90%" }}>
          <FiltersCheckBoxes settings={settings} />
        </div>
      </Container>
    </Template>
  );
}

export default Reseller;
