import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Template from "../../../src/components/templates/Admin";
import Sidebar from "../../../src/components/admin/Sidebar";
import Slide from "../../../src/components/utils/Slider";
import {
  Container,
  Button,
  Select
} from "../../../src/static/styled-components/base";

import imageNotFound from "../../../src/static/images/image-404.jpg";

export default function Categories() {
  const [images, setImages] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [slideControl, setSlideControl] = useState(1);

  function addSlide() {
    const inputIndex = images.length;
    setImages([...images, imageNotFound]);
    setInputs([
      ...inputs,
      <input
        type="file"
        onChange={e => changeBannerImage(e.target.files[0], inputIndex)}
        id={inputIndex}
        key={inputIndex}
      />
    ]);
    setSlideControl(images.length + 1);
  }

  function changeBannerImage(file, index) {
    setImages(images =>
      images.map((image, ind) => {
        if (ind == index)
          return file ? URL.createObjectURL(file) : imageNotFound;
        return image;
      })
    );
    setSlideControl(index + 1)
  }

  function removeSlide(id) {
    console.log('remove slide: id => ', id)
    setImages(images => {
      images.splice(id, 1);
      console.log('remove slide: images => ', images)
      return images;
    });
    setInputs(inputs => {
      inputs.splice(id, 1);
      console.log('remove slide: inputs => ', inputs)
      return inputs;
    });
    setSlideControl(id + 1);
  }

  return (
    <Template>
      <Sidebar />
      <Container>
        <Column>
          {images.length == 0 ? (
            <></>
          ) : (
            <Slide slideCtrl={slideControl} images={images} />
          )}

          <Button
            style={{ width: "50%", margin: "15px auto", display: "block" }}
            onClick={addSlide}
          >
            Adicionar Slide
          </Button>

          <Select
            style={{ width: "50%", margin: "0 auto" }}
            value={slideControl}
            onChange={e => {
              console.log("inputs => ", inputs);
              console.log("slideControl =>", slideControl);
              console.log("images length =>", images.length);

              setSlideControl(e.target.value);
            }}
          >
            {images.map((e, i) => (
              <option value={i + 1}>Slide {i}</option>
            ))}
          </Select>
          <div>
            {inputs.length}
            {inputs.map((input, i) => (
              <>
                <p>Banner {i}</p>
                {input} <p onClick={() => removeSlide(i)}>Remover slide</p>
              </>
            ))}
          </div>

          <Button
            onClick={() => {
              console.log("images => ", images);
              console.log("inputs => ", inputs);
            }}
          >
            Console log
          </Button>
        </Column>
      </Container>
    </Template>
  );
}

function InputUpload ({ id, handleChange, file }) {
  return <div>
    <input type="file" onChange={handleChange} value={file} id={id} style={{ width: 0}} />
    <label htmlFor={id} style={{ width: "120px", border: "1px solid black" }}>Upload</label>
  </div>
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

Categories.getInitialProps = async ({ query }) => {
  return { category: query.category };
};
