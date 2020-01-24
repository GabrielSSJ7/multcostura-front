import React, { useState, useEffect} from 'react';
import styled from 'styled-components'



export default function teste() {
    const [toggle, setToggle] = useState(false);
    const [image, setImage] = useState('');
    function changeImg () {
        if (toggle) {
            const imageA = require(`../src/static/images/success.png`)
            setImage(imageA)
            setToggle(false)
            return
        }
        const imageB = require(`../src/static/images/logo-colorido.png`)
        setImage(imageB)
        setToggle(true)
    }
  return (
    <><Img image={image}  />
        <button onClick={changeImg}>MUDAR</button>
    </>
  );
}


const Img = styled.div`
    width: 300px;
    height: 300px;
    background-image: url(${props => props.image})
`