import React, { useState, useEffect } from "react";
import styled from "styled-components";

import setApi from "../../../src/api";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Template from "../../../src/components/templates/Admin";
import Sidebar from "../../../src/components/admin/Sidebar";
import {
  Container,
  Button,
  Input,
  TextArea,
  Hr
} from "../../../src/static/styled-components/base";

import InputMask from "react-input-mask";

export default function AddNews() {
  const [snackBar, setSnackBar] = useState({
    result: "success",
    open: false,
    message: ""
  });
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: ""
  });
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function addNews() {
    setApi()
      .post("/news", { ...form })
      .then(response => {
        setForm({
          title: "",
          description: "",
          date: ""
        });
        setSnackBar({
          open: true,
          result: "success",
          message: "Notícia criada com sucesso!"
        });
      })
      .catch(err => {
        setSnackBar({
          open: true,
          result: "error",
          message: err.response ? err.response.data.toString() : err.toString()
        });
      });
  }

  function handleClose() {
    setSnackBar({
      ...snackBar,
      open: false
    });
  }
  return (
    <Template>
      <Snackbar
        open={snackBar.open}
        autoHideDuration={3500}
        onClose={handleClose}
      >
        <Alert severity={snackBar.result}>{snackBar.message}</Alert>
      </Snackbar>
      <Sidebar />

      <Container>
        <h1
          className="main-title"
          style={{
            textAlign: "center",
            color: "rgb(35,43,111)"
          }}
        >
          Adicionar Notícia
        </h1>
        <Hr />
        <Form>
          <Input
            placeholder="Título"
            onChange={handleChange}
            name="title"
            id="title"
            value={form.title}
          />
          <TextArea
            placeholder="Descrição"
            onChange={handleChange}
            name="description"
            id="description"
            value={form.description}
          />

          <InputMask
            placeholder="Data"
            className="form-control"
            mask="99/99/9999"
            name="date"
            maskChar={null}
            onChange={handleChange}
            value={form.date}
          />

          <Button onClick={addNews}>Adicionar</Button>
        </Form>
      </Container>
    </Template>
  );
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: space-between;
`;
