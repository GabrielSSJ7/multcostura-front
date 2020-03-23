import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import FileInput from "../../utils/FileInput";

import { Button } from "../../../static/styled-components/base";
import {
  getBannerFixed,
  saveBannerFixed,
  deleteBannerFixed
} from "../../../utils/banner";
import { validateImage } from '../../../utils/images'
import imageNotFound from "../../../static/images/image-404.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BannerFixed({ type }) {
  const imageMessageError = `Extensão do arquivo enviado é inválido. Extensões permitidas ${process.env.imageExtensionPermitted.toString()}, com no máximo 10MB`
  const [banner, setBanner] = useState(imageNotFound);
  const [bannerBase, setBannerBase] = useState(null)
  const [file, setFile] = useState(null);
  const [snackBar, setSnackBar] = useState({
    result: "success",
    open: false,
    message: ""
  });

  function handleChange(e) {
    if (validateImage(process.env.imageExtensionPermitted, 10000, e.target.files[0])) {
      setBanner(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    } else {
      setSnackBar({
        open: true,
        result: 'error',
        message: imageMessageError
      })
    }
  }

  function handleClose() {
    setSnackBar({
      ...snackBar,
      open: false
    });
  }
  useEffect(() => {
    function asynFunc() {
      getBannerFixed(type, function(err, d) {
        if (err) {
          setSnackbar({
            open: true,
            result: "error",
            message: err
          });
          return;
        }
        setBannerBase(d ? d : null)
        setBanner(d ? d : imageNotFound);
      });
    }

    asynFunc();

    return () => {};
  }, []);

  function saveBanner() {
    saveBannerFixed(type, file, function(err, r) {
      if (err) {
        setSnackBar({
          open: true,
          result: "error",
          message: err
        });

        return;
      }

      setSnackBar({
        open: true,
        result: "success",
        message: "Banner salvo com sucesso!"
      });
      setFile(null);
    });
  }

  function deleteBanner() {
    deleteBannerFixed(type, function(err, r) {
      if (err) {
        setSnackBar({
          open: true,
          result: "error",
          message: err
        });

        return;
      }
      setSnackBar({
        open: true,
        result: "success",
        message: "Banner excluido com sucesso!"
      });
      setFile(null);
      setBanner(imageNotFound);
    });
  }
  return (
    <Column>
      <div onClick={() => location.reload()} className="arrow-back" style={{ background:"#960d03", borderRadius: "5px", padding: "5px", maxWidth: "60px", marginLeft: "10px", marginBottom: "5px", display: 'flex', flexDirection: "row" }}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: "white" }} />
          <span style={{ color: "white" }}>Voltar</span>
        </div>
        <style>
          {`  

            .arrow-back {
              transition: .5s;
            }

            .arrow-back:hover {
              cursor: pointer;
              opacity: .8;
            }
          `}
        </style>
      <Row>
        <Wrapper>
          {banner != imageNotFound ? (
            <BtnDelete onClick={deleteBanner}>Excluir banner</BtnDelete>
          ) : (
            ""
          )}
          <Snackbar
            open={snackBar.open}
            autoHideDuration={2500}
            onClose={handleClose}
          >
            <Alert severity={snackBar.result}>{snackBar.message}</Alert>
          </Snackbar>

          <Slide src={banner} />
        </Wrapper>
      </Row>
      <Row>
        <FileInput
          handleChange={handleChange}
          labelInputFile="Enviar imagem"
          id="bannerFixed"
          name="bannerFixed"
          labelWidth="200px"
          labelHeight="80px"
          maxWidth="100px"
          file={file}
          cleanFileInput={() => {
            setFile(null);
            setBanner(bannerBase ? bannerBase : imageNotFound);
          }}
        />
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Button style={{ width: "50%" }} onClick={() => saveBanner()}>
          Salvar
        </Button>
      </Row>
    </Column>
  );
}

const BtnDelete = styled.div`
  background: #960d03;
  padding: 5px;
  position: absolute;
  z-index: 9;
  left: 10px;
  top: 0;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  font-size: 0.8rem;
  border-radius: 5px;
  transition: 0.3s;
  :hover {
    opacity: 0.9;
    padding: 5px 6px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: ${props => props.height};
  overflow: hidden;
  display: -webkit-box;
  position: relative;
  height: 400px;
`;

const Slide = styled.div`
	background-image: url('${props => props.src}');
  //background-size: 100%;
  //eight: 400px;
  width: 100%;
	background-position: center;
	background-repeat: no-repeat;
	width: ${props => props.width};
	height: ${props => props.height};
	transform: translateX(${props => props.translate}px);
	transition: transform 0.4s ease-in-out;
	position: relative;
`;
