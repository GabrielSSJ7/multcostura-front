import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Router, Link } from "../../../routes";

import setApi from "../../../src/api";

import EditGalleryImages from "../../../src/components/admin/news/EditGalleryImages";
import EditGalleryVideos from "../../../src/components/admin/news/EditGalleryVideos";
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
import loadingGif from "../../../src/static/images/loading.gif";

import InputMask from "react-input-mask";

export default function EditNews({ id }) {
  const [news, setNews] = useState({});
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [dis, setDis] = useState(false)
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: ""
  });
  useEffect(() => {
    async function async() {
      setApi()
        .get("/news/" + id)
        .then(response => {
          setNews(response.data);
          setForm({ ...response.data });
        })
        .catch(err => {
          setSnackBar({
            open: true,
            message: err.response
              ? err.response.data.toString()
              : err.toString()
          });
        });

      _getImages();
    }
    async();
  }, []);

  useEffect(() => {
      if (form.description.length >= 200) {
        setDis(true);
        setSnackBar({
          open: true,
          result: "error",
          message: "A descrição deve ter no máximo 200 caractéres"
        })
      } else {
        setDis(false)
      }
  }, [form.description])

  function _getImages() {
    getImages(id, function(err, r) {
      if (err) {
        setSnackBar({
          result: "error",
          open: true,
          message: err.response ? err.response.data.toString() : err.toString()
        });
        return;
      }
      setVideos(r.gallery.videos);
      setImages(r.gallery.images);
    });
  }

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [snackBar, setSnackBar] = useState({
    result: "success",
    open: false,
    message: ""
  });

  function handleChange(e) {
    
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function editNews() {
    setApi()
      .put("/news/" + id, { ...form })
      .then(response => {
        setSnackBar({
          open: true,
          result: "success",
          message: "Notícia editada com sucesso!"
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

  function deleteNews() {
    setApi()
      .delete("/news/" + id)
      .then(response => {
        setSnackBar({
          open: true,
          result: "success",
          message: `Notícia ${form.title} excluída com sucesso`
        });
        Router.pushRoute("/admin/news");
      })
      .catch(err => {
        setSnackBar({
          result: "error",
          open: true,
          message: err.response ? err.response.data.toString() : err.toString()
        });
      });
  }

  function removeImage(index) {
    setApi({ model: "news", type: "images", index })
      .delete("/gallery/" + id)
      .then(response => {
        setSnackBar({
          open: true,
          result: "success",
          message: "A imagem foi excluida com sucesso!"
        });
        _getImages();
      })
      .catch(err => {
        setSnackBar({
          open: true,
          result: "error",
          message: err.response ? err.response.data.toString() : err.toString()
        });
      });
  }
  function removeVideo(index) {
    setApi({ model: "news", type: "videos", index })
      .delete("/gallery/" + id)
      .then(response => {
        setSnackBar({
          open: true,
          result: "success",
          message: "O video foi excluido com sucesso!"
        });
        _getImages();
      })
      .catch(err => {
        setSnackBar({
          open: true,
          result: "error",
          message: err.response ? err.response.data.toString() : err.toString()
        });
      });
  }
  function onSuccess() {
    _getImages();
    setSnackBar({
      open: true,
      result: "success",
      message: "Os arquivos foram enviados com sucesso"
    });
  }
  function onError(e) {
    setSnackBar({
      open: true,
      result: "error",
      message: e.toString()
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
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1
            className="main-title"
            style={{
              textAlign: "center",
              color: "rgb(35,43,111)"
            }}
          >
            Editar {form.title}
          </h1>
        </div>
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
            rows="5"
            style={{ border: dis ? '2px solid red' : '', outline: 'none', resize: 'none'}}
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

          <Button style={{ opacity: dis ? ".8" : "1"}} onClick={editNews} disabled={dis}>Editar</Button>
          {!galleryOpen ? (
            <Button onClick={() => setGalleryOpen(true)}>
              Atualizar Galeria de fotos e vídeos
            </Button>
          ) : (
            ""
          )}
          {galleryOpen ? (
            <div>
              <EditGalleryImages
                images={images}
                removeImage={removeImage}
                onSuccess={onSuccess}
                onError={onError}
                headers={{ model: "news", type: "images", id }}
              />{" "}
              <EditGalleryVideos
                images={videos}
                removeVideo={removeVideo}
                onSuccess={onSuccess}
                onError={onError}
                headers={{ model: "news", type: "videos", id }}
              />{" "}
            </div>
          ) : (
            ""
          )}
          <Button onClick={deleteNews}>Excluir esta notícia</Button>
        </Form>
      </Container>
    </Template>
  );
}

function getImages(id, cb) {
  setApi({ model: "news" })
    .get(`/news/${id}`)
    .then(response => {
      cb(null, response.data);
    })
    .catch(err => {
      cb(err);
    });
}

EditNews.getInitialProps = ({ query }) => {
  return { id: query.id };
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: space-between;
`;
