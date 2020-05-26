import React from 'react'
import styled from 'styled-components'
import Slider from '../utils/Slider'

export default function SlideWeb ({ fixed, images, balls }) {
	return fixed ? <Wrapper height="600px"><Slide width="100%"  src={images} /></Wrapper> : <>{images.length > 0 ? <Slider height="600px" images={images} slideWidth="600%" arrows autoSlide  balls={balls} /> : ''}</>
}

const Wrapper = styled.div`
  width: 100%;
  height: ${props => props.height};
  overflow: hidden;
  display: -webkit-box;
  position: relative;
`;

const Slide = styled.div`
	background-image: url('${props => props.src}');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: ${props => props.width};
	height: ${props => props.height};
	transform: translateX(${props => props.translate}px);
	transition: transform 0.4s ease-in-out;
	position: relative;
`;
