import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { Link } from "../../../routes";

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: -webkit-box;
  position: relative;
`;

const Slide = styled.div`
	background-image: url('${props => props.src}');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	height: 400px;
	transform: translateX(${props => props.translate}px);
	transition: transform 0.4s ease-in-out;
	position: relative;
`;

const ArrowLeft = styled.span`
  position: absolute;
  z-index: 9;
  left: 0;
  margin-left: 40px;
  cursor: pointer;
  top: 50%;
  margin-top: -10px;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 30px solid white;
`;
const ArrowRight = styled.span`
  position: absolute;
  z-index: 9;
  right: 0;
  margin-right: 40px;
  cursor: pointer;
  width: 0;
  height: 0;
  top: 50%;
  margin-top: -10px;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 30px solid white;
`;

export default ({ link, images, autoSlide, slideCtrl, balls, arrows }) => {
  const [index, setIndex] = useState(1);
  const [translate, setTranslate] = useState(0);
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        next();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [index]);

  useEffect(() => {
    setIndex(slideCtrl);
    if (slideCtrl != index)
      setTranslate(getSlideWidth() - slideCtrl * getSlideWidth());
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
    if (index == images.length) {
      setTranslate(1);
      setIndex(1);
    } else {
      setTranslate(getSlideWidth() - (index + 1) * getSlideWidth());

      setIndex(index => index + 1);
    }
  }
  function getSlideWidth() {
    return document.querySelector(".slide")
      ? document.querySelector(".slide").clientWidth
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
      <Wrapper>
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
                  className="slide"
                  key={i}
                  src={img}
                  translate={translate}
                />
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
            margin: "10px auto"
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => suckBalls(i + 1)}
              style={{
                width: "8px",
                height: "8px",
                background: index == i + 1 ? "black" : "transparent",
                border: "1px solid black",
                borderRadius: "100%",
                marginRight: "10px",
                cursor: "pointer"
              }}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
