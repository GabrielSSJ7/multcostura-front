import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SlideSmall from "../SlideSmall";

import leftArrow from "../../../static/images/seta_banner_esquerda.svg";
import rightArrow from "../../../static/images/Icon_seta_banner.svg";

export default function Section1({ prod }) {
  const [slideCtrl, setSlideCtrl] = useState(0);
  const [currentImage, setCurrentImage] = useState(prod.images[0]);
  const prev = () => {
    if (slideCtrl > 0) {
      setCurrentImage(prod.images[slideCtrl - 1])
      setSlideCtrl(slideCtrl - 1)
    } else {
      setCurrentImage(prod.images[prod.images.length - 1])
      setSlideCtrl(prod.images.length - 1)
    }

  }
  const next = () => {
    if (slideCtrl < prod.images.length - 1) {
      setCurrentImage(prod.images[slideCtrl + 1])
      setSlideCtrl(slideCtrl + 1)
    } else {
      setCurrentImage(prod.images[0])
      setSlideCtrl(0)
    }

  }
  return (
    <Row
      style={{
        width: "100%",
        flexWrap: "wrap-reverse",
        marginTop: "30px",
        minWidth: "350px",
      }}
    >
      <Column
        style={{
          width: "50%",
          minWidth: "350px",
          marginBottom: "50px",
          height: "600px",
          position: "relative",
        }}
        className="col-image-prod"
        ait="flex-end"
        jc="flex-start"
      >
        <MainImage src={currentImage} />
        <Arrow
          onClick={prev}
          style={{ bottom: "55%", left: "110px" }}
          src={leftArrow}
          id="prod-left-arrow"
        />
        <Arrow
          onClick={next}
          style={{ bottom: "55%", right: "-10px" }}
          src={rightArrow}
        />
        <div style={{ display: "flex", width: "80.2%", marginTop: "5px" }}>
          {prod.images.map((image, id) => (
            <Image 
              onClick={() => {
                setCurrentImage(image)
                setSlideCtrl(id)
              }}
              onMouseEnter={() => {
                setCurrentImage(image)
                setSlideCtrl(id)
              }}
              src={image} 
              key={id}
              selected={image == currentImage}
              style={{ 
                width: "85px", 
                margin: "0 2px", 
                height: "80px"
              }}
           />
          ))}
        </div>
      </Column>
      <Column
        style={{
          width: "45%",
          paddingTop: "40px",
          paddingLeft: "30px",
          minWidth: "250px",
        }}
        className="prod-name-div"
      >
        <MachineName>{prod.name}</MachineName>
        <Category
          onClick={() =>
            (window.location.href =
              "/produtos?type=categories&id=" + prod.category._id)
          }
        >
          {prod.category ? prod.category.name : ""}
        </Category>
        {prod.specifications ? (
          <Text
            style={{
              marginTop: "7px",
              marginBottom: "2px",
            }}
          >
            Modelo: {prod.specifications.modelo}
          </Text>
        ) : (
          ""
        )}
        <Text>{prod.mainFeatures}</Text>
        {prod.productRef ? (
          prod.productRef.length > 0 ? (
            <Column style={{ height: "32%" }}>
              <Text>Detalhes | Ideal para produzir </Text>
              <Row
                style={{
                  width: "95%",
                  height: "66.66%",
                  minHeight: "200px",
                }}
              >
                {prod.productRef.map((ref) => (
                  <Img
                    src={ref}
                    
                    width="32%"
                    style={{ marginRight: "1.3%" }}
                    height="66.66%"
                  />
                ))}
              </Row>
            </Column>
          ) : (
            ""
          )
        ) : (
          ""
        )}

        <Row
          jc="space-between"
          style={{ margin: "40px 0 0 ", maxWidth: "350px" }}
        >
          {prod.video ? (
            <Button onClick={() => setOpen(true)}>Vídeo</Button>
          ) : null}
          {prod.manual ? (
            <Button
              onClick={() => {
                window.open(prod.manual, "_blank");
              }}
            >
              Manual
            </Button>
          ) : null}
          {prod.folheto ? (
            <Button
              onClick={() => {
                window.open(prod.folheto, "_blank");
              }}
            >
              Folheto
            </Button>
          ) : null}
        </Row>
      </Column>
    </Row>
  );
}

const Image = styled.div`
  background-color: white;
  background-image: url(${props => props.src});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: left top;
  cursor: pointer;
  border: 1px solid ${props => props.selected ? 'blue' : '#DFDFDF'};
  :hover {
    opacity: .5;
  }
`

const Button = styled.div`
  height: 56px;
  background: #e3e3e3 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  text-align: left;
  /*font: Bold 20px/24px Myriad Pro;*/
  font-size: 20px;
  letter-spacing: 0;
  color: #5b5b5b;
  opacity: 1;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
  }
`;
export const Row = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ait};
  flex-wrap: ${(props) => props.fw};
  @media(max-width: 1100px) {
    .col-image-prod {
      justify-content: center !important;
      align-items: center !important;
      width: 100% !important;
     }

     #prod-left-arrow {
        left: -10px !important
     }

     .prod-wrapper {
        margin: 0!important;
        width: 63% !important;
     }
  }


  @media(max-width: 1100px) {
    .prod-wrapper {
      margin 0 35px 0 0 !important;
    }

    .prod-name-div {
      margin: auto !important;
      padding-left: 0 !important;
      width: 80% !important;
      margin-bottom: 50px !important;
    }
  }

  @media (max-width: 600px) {
    .prod-wrapper {
      margin 0 0 0 0 !important;
    }
  }

`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props) => props.flex};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ait};
  flex-wrap: ${(props) => props.fw};
`;

const MainImage = styled.div`
  background-color: white;
  background-image: url(${(props) => props.src});
  background-size: auto 85%;
  background-repeat: no-repeat;
  background-position: center;
  width: 80%;
  height: 500px;
  border: 1px solid #dfdfdf;
`;

const Text = styled.p`
  text-align: left;
  /*font: Regular 18px/24px Segoe UI;*/
  font-size: 18px;
  font-family: helvetica;
  font-weight: 200;
  letter-spacing: 0;
  color: #5b5b5b;
  opacity: 1;
  margin: 0;
  margin-top: 5px;
`;

const Arrow = styled.img`
  position: absolute;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    opacity: 0.6;
  }
`;

const MachineName = styled.h1`
  text-align: left;
  font-family: helvetica;
  font-weight: 200;
  font-size: 20px;
  letter-spacing: 0;
  color: #5b5b5b;
  opacity: 1;
  margin: 0;
  margin-bottom: 15px;
`;

const Category = styled.h1`
  margin: 0;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    opacity: 0.6;
  }
  text-align: left;
  /*font: Bold 30px/37px Myriad Pro;*/
  font-size: 30px;
  letter-spacing: 0;
  color: #242873;
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
	transition: transform 0.2s ease-in-out;

	position: relative;
	:hover {
		transform: scale(1.1); -webkit-transform: scale(1.1);
	}
`;
