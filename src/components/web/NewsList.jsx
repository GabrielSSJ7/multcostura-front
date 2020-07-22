import React, { useEffect, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Row, Column } from "../../static/styled-components/base";
import loading from "../../static/images/loading.gif";

export default function NewsList({ news }) {
  const [visLoad, setVisLoad] = useState(true);
  const [openDiag, setOpenDiag] = useState(false);
  const [openDiagVideos, setOpenDiagVideos] = useState(false);
  const [newsForDiag, setNewsForDiag] = useState({
    gallery: { images: [], videos: [] },
  });
  const [currentImg, setCurrentImg] = useState(0);
  const [currentVid, setCurrentVid] = useState(0);
  const [translate, setTranslate] = useState();
  useEffect(() => {
    if (news) setVisLoad(false);
  }, [news]);

  useLayoutEffect(() => {
    setTranslate(window.innerWidth);
    window.addEventListener("resize", () => {
      setTranslate(window.innerWidth);
    });
  });

  function handleClose() {
    setNewsForDiag({ gallery: { images: [], videos: [] } });
    setOpenDiag(false);
  }

  function handleCloseVideos() {
    setNewsForDiag({ gallery: { images: [], videos: [] } });
    setOpenDiagVideos(false);
  }

  return (
    <Column className="mainColumn" style={{ width: "80%", margin: "0 auto" }}>
      {visLoad ? (
        <img
          src={loading}
          style={{
            width: "32px",
            height: "32px",
            margin: "auto",
            display: "block",
          }}
        />
      ) : (
        <>
          <PageTitle style={{ marginTop: "5%", marginBottom: "3%" }}>
            Feira e Eventos
          </PageTitle>
          <Row style={{ flexWrap: "wrap" }}>
            {news.map((n) => (
              <News
                key={n._id}
                news={n}
                openDiagVideos={() => {
                  setOpenDiagVideos(true);
                  setNewsForDiag(n);
                }}
                openDiag={() => {
                  setOpenDiag(true);
                  setNewsForDiag(n);
                }}
              />
            ))}
          </Row>
          <style>{`
		  	.MuiDialog-paperWidthSm {
		  		width: 100% !important;
		  		max-width: 99999px !important;
		  	}

		  	.currentImg {
		  	  height: auto;
		      width: auto;
		      max-height: 100%;
		      max-width: 100%;
		      margin-left: auto;
		      margin-right: auto;
		      display: block;
		  	}

		  	@media(max-width: 650px) {
		  		.currentImg {
		  			max-height: 300px !important;
		  		}
		  	}

		  	@media(max-width: 650px) {
		  		.newsCard {
		  			width: 100% !important;
		  		}		
			}

			@media(max-width: 1024px) {
		  		.mainColumn {
		  			width: 95% !important;
		  		}
			}
		  	`}</style>

          <Dialog
            open={openDiag}
            onClose={handleClose}
            style={{ maxWidth: "80%", margin: "auto" }}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              <Row jc="space-between">
                <Column>
                  <p style={{ color: "#707070", marginBottom: "0" }}>
                    {newsForDiag.date}
                  </p>
                  <p style={{ color: "#707070", marginTop: "0" }}>
                    {newsForDiag.title}
                  </p>
                </Column>

                <p
                  onClick={handleClose}
                  style={{
                    background: "#3037C9 0% 0% no-repeat padding-box",
                    borderRadius: "19px",
                    opacity: 1,
                    width: "38px",
                    height: "38px",
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                    color: "white",
                    margin: 0,
                    cursor: "pointer",
                    fontSize: "26px",
                  }}
                >
                  X
                </p>
              </Row>
            </DialogTitle>

            {translate > 665 ? (
              <DialogContent style={{ display: "flex", flexDirection: "row" }}>
                <Column flex="3">
                  <img
                    src={newsForDiag.gallery.images[currentImg]}
                    className="currentImg"
                  />
                </Column>
                <Column
                  flex="1"
                  style={{ padding: "0 15px", overflowY: "scroll" }}
                >
                  {newsForDiag.gallery.images.map((img, i) => (
                    <img
                      onClick={() => setCurrentImg(i)}
                      src={img}
                      key={i}
                      style={{
                        minWidth: "150px",
                        maxWidth: "300px",
                        paddingBottom: "15px",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </Column>
              </DialogContent>
            ) : (
              <DialogContent
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Column flex="3" style={{ minHeight: "300px" }}>
                  <img
                    src={newsForDiag.gallery.images[currentImg]}
                    className="currentImg"
                  />
                </Column>
                <Row
                  flex="1"
                  style={{ padding: "15px 15px", overflowX: "scroll" }}
                >
                  {newsForDiag.gallery.images.map((img, i) => (
                    <Img
                      height="80px"
                      width="150px"
                      onClick={() => setCurrentImg(i)}
                      src={img}
                      key={i}
                      style={{
                        minWidth: "150px",
                        maxWidth: "100%",
                        paddingBottom: "15px",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </Row>
              </DialogContent>
            )}
          </Dialog>

          <Dialog
            style={{ maxWidth: "3000px" }}
            open={openDiagVideos}
            onClose={handleCloseVideos}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Galeria de videos - {newsForDiag.title}
            </DialogTitle>
            {translate > 665 ? (
              <DialogContent style={{ display: "flex", flexDirection: "row" }}>
                <Column flex="3">
                  <video
                    src={newsForDiag.gallery.videos[currentVid]}
                    className="currentImg"
                    controls
                  />
                </Column>
                <Column
                  flex="1"
                  style={{ padding: "0 15px", overflowY: "scroll" }}
                >
                  {newsForDiag.gallery.videos.map((img, i) => (
                    <video
                      onClick={() => setCurrentVid(i)}
                      src={img}
                      key={i}
                      style={{
                        minWidth: "150px",
                        maxWidth: "300px",
                        paddingBottom: "15px",
                        cursor: "pointer",
                      }}
                      preload="metadata"
                    />
                  ))}
                </Column>
              </DialogContent>
            ) : (
              <DialogContent
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Column flex="3" style={{ minHeight: "300px" }}>
                  <video
                    src={newsForDiag.gallery.videos[currentVid]}
                    className="currentImg"
                    controls
                  />
                </Column>
                <Row
                  flex="1"
                  style={{ padding: "15px 15px", overflowX: "scroll" }}
                >
                  {newsForDiag.gallery.videos.map((img, i) => (
                    <video
                      height="150px"
                      width="150px"
                      onClick={() => setCurrentVid(i)}
                      src={img}
                      key={i}
                      style={{
                        minWidth: "150px",
                        maxWidth: "100%",
                        paddingBottom: "15px",
                        cursor: "pointer",
                      }}
                      preload="metadata"
                    />
                  ))}
                </Row>
              </DialogContent>
            )}
          </Dialog>
        </>
      )}
    </Column>
  );
}

function News({ news, openDiagVideos, openDiag }) {
  return (
    <Row className="newsCard">
      <Column
        style={{
          background: "#D6D6D6 0% 0% no-repeat padding-box",
          width: "40%",
        }}
        jc="center"
      >
        <img
          src={news.gallery.images[0]}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Column>
      <Column
        style={{ paddingLeft: "12px", position: "relative", width: "60%" }}
      >
        <NewsTitle>{news.date}</NewsTitle>
        <NewsTitle>{news.title}</NewsTitle>
        <Text>
          {news.description.length > 81
            ? news.description.substr(0, 81) + '...'
            : news.description}
        </Text>
        <Row style={{}}>
          <Btn onClick={openDiag}>Fotos</Btn>
          <Btn onClick={openDiagVideos}>Videos</Btn>
        </Row>
      </Column>
    </Row>
  );
}

const Thumbnail = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 100%;
`;

const Btn = styled.span`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  background: #d6d6d6 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  letter-spacing: 0;
  color: #ffffff;
  flex: 1;
  height: 33px;
  margin-right: 3px;
`;

const Text = styled.p`
  text-align: justify;
  font-size: 1rem;
  font-family: Segoe UI;
  letter-spacing: 0;
  color: #707070;
  opacity: 1;

  @media (max-width: 900px) {
    font-size: 0.8rem;
  }
`;

const NewsTitle = styled.span`
  text-align: left;
  font-size: 18px;
  font-family: Segoe UI;
  font-weight: bold;
  letter-spacing: 0;
  color: #707070;
  opacity: 1;
`;

const PageTitle = styled.h1`
  text-align: left;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0;
  color: #5b5b5b;
  opacity: 1;
`;

const Img = styled.div`
	background-image: url('${(props) => props.src}');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	transform: translateX(${(props) => props.translate}px);
	transition: transform 0.4s ease-in-out;
	position: relative;
`;
