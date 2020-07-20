import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { Link } from "../../../routes";
import { useRouter } from "next/router";

const Image = styled.div`
  background-color: white;
  background-image: url(${(props) => props.src});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: left top;
  width: 100%;
  height: 100%;
  min-height: 120px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
  display: -webkit-box;
  position: relative;
  margin: ${(props) => props.margin};
  padding-bottom: 20px;
  min-height: 133px;
`;

const Slide = styled.div`
  background-repeat: no-repeat;
  background-color: #fff;
  border: ${(props) => (props.customContent ? "" : "1px solid #DFDFDF")};
  margin: auto;
  @media (min-width: 600px) {
    margin: 5px;
  }
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: translateX(${(props) => props.translate}px);
  transition: transform 0.4s ease-in-out;
  position: relative;
  img {
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  }
`;

const ArrowLeft = styled.span`
  :hover {
    opacity: 0.8;
  }
  transition: 0.2s;
  position: absolute;
  z-index: 9;
  left: 0px;
  margin-left: 40px;
  cursor: pointer;
  top: 50%;
  margin-top: -10px;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid #960d03;
`;
const ArrowRight = styled.span`
  :hover {
    opacity: 0.8;
  }
  transition: 0.2s;
  position: absolute;
  z-index: 9;
  right: 0;
  margin-right: 40px;
  cursor: pointer;
  width: 0;
  height: 0;
  top: 50%;
  margin-top: -10px;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #960d03;
`;

export default ({
  eventClick,
  wMargin,
  wrapperWidth,
  link,
  images,
  autoSlide,
  slideCtrl,
  balls,
  arrows,
  height,
  slideWidth,
  customContent,
  slideClass,
  wrapperClass,
}) => {
  const router = useRouter();
  useEffect(() => {
    console.log("images", images);
  }, [images]);
  const [index, setIndex] = useState(1);
  const [translate, setTranslate] = useState(0);
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        next();
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [index]);

  useEffect(() => {
    if (slideCtrl) {
      setIndex(slideCtrl);
      if (slideCtrl != index)
        setTranslate(getSlideWidth() - slideCtrl * getSlideWidth());
    }
  }, [slideCtrl]);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setTranslate(getSlideWidth() - index * getSlideWidth());
    });
  });
  function prev() {
    if (index == 1) return;
    setTranslate(getSlideWidth() - (index - 1) * getSlideWidth());
    setIndex(index - 1);
  }
  function next() {
    console.log("slide width >> ", getSlideWidth());
    if (index == images.length) {
      setTranslate(1);
      setIndex(1);
    } else {
      setTranslate(getSlideWidth() - (index + 1) * getSlideWidth());

      setIndex((index) => index + 1);
    }
  }
  function getSlideWidth() {
    return document.querySelector(slideClass ? "." + slideClass : ".slide")
      ? document.querySelector(slideClass ? "." + slideClass : ".slide")
          .clientWidth
      : 0;
  }
  function suckBalls(i) {
    setIndex(i);
    if (i != index) {
      setTranslate(getSlideWidth() - i * getSlideWidth());
    }
  }

  return (
    <>
      <Wrapper
        className={wrapperClass}
        margin={wMargin}
        width={wrapperWidth || "100%"}
        height={height || "400px"}
      >
        {images ? (
          <>
            {arrows ? (
              <>
                <ArrowLeft onClick={() => prev()}></ArrowLeft>
                <ArrowRight onClick={() => next()}></ArrowRight>
              </>
            ) : (
              <></>
            )}

            <>
              {images.map((img, i) => (
                <Slide
                  className={slideClass || "slide"}
                  key={i}
                  src={img}
                  translate={translate}
                  customContent={customContent}
                  height={"100%"}
                  width={slideWidth}
                  onClick={() => (eventClick ? eventClick(img) : {})}
                >
                  {!customContent ? (
                    <Image
                      src={img}
                      style={{ width: "100%", height: "100%" }}
                    />
                  ) : (
                    img
                  )}
                </Slide>
              ))}
            </>
          </>
        ) : (
          <p> no image</p>
        )}
      </Wrapper>
      {balls ? (
        <div
          id="bolas"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50%",
            justifyContent: "center",
            margin: "10px auto",
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => suckBalls(i + 1)}
              style={{
                width: "14px",
                height: "14px",
                background: index == i + 1 ? "#242873" : "rgba(255,255,255,.5)",
                border:
                  index == i + 1
                    ? "1px solid #242873"
                    : "1px solid rgba(255,255,255,.5)",
                borderRadius: "100%",
                marginRight: "10px",
                cursor: "pointer",
                marginTop: "-50px",
                zIndex: 9,
              }}
            />
          ))}
        </div>
      ) : (
        <>{balls}</>
      )}
    </>
  );
};
