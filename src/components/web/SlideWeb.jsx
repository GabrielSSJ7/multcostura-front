import React from 'react'
import styled from 'styled-components'
import Slider from '../utils/Slider'

export default function SlideWeb ({ fixed, images }) {
	return fixed ? <Wrapper><Slide width="100%" height="400px" src={images} /></Wrapper> : <>{images.length > 0 ? <Slider height="400px" images={images} slideWidth="100%" arrows autoSlide /> : ''}</>
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