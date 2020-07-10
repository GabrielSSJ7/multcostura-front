import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// import { Container } from './styles';

function Categories({ state }) {
  const { categories, setListController } = state;
  return (
    <Column>
      <Row key={10201210} ait="center" jc="space-around">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => setListController("main")}
        />{" "}
        <h1 style={{ textAlign: "center" }}>Categorias</h1>
      </Row>

      {categories.map((cat, i) => (
        <Column
          key={cat.id}
          jc="center"
          ait="flex-start"
          style={{ marginTop: "13px", padding: "0 15px" }}
        >
          <span
            style={{ fontSize: "1.1rem" }}
            onClick={() =>
              (window.location = "/produtos?type=categories&id=" + cat.id)
            }
          >
            {cat.name}
          </span>
          <hr style={{ width: "100%" }} />
        </Column>
      ))}
    </Column>
  );
}

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  top: 30px;
  left: 5px;
  z-index: 9;
  border-bottom: 8px solid white;
  position: absolute;
  box-shadow: 0px 10px 10px #00000029;
  opacity: ${(props) => (props.vis ? 1 : 0)};
`;

const DropDownItem = styled.div`
  background: white;
  position: relative;
  font-size: 16px;
  color: #5e5e5e;
  opacity: 0.8;
  z-index: 9;
  :last-child {
    border-bottom: none;
  }
`;

const DropDownMenu = styled.div`
  position: absolute;
  left: 0px;
  top: 38px;
  z-index: 99;
  background: white;
  box-shadow: 0px 10px 10px #00000029;
  display: flex;
  transform-origin: top;
  transform: ${(props) => (props.vis ? "scaleY(1)" : "scaleY(0)")};
  transition: transform 0.2s !important;
  flex-direction: column;
  max-height: 350px;
  flex-wrap: wrap;
  min-width: 150px;
  width: 699px;
  transition: 0.2s;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #81161b;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #81161b;
  }

  div {
    display: ${(props) => (props.vis ? "inherit" : "none")};
    color: ${(props) => props.color};
    padding: 10px;
    cursor: pointer;
    transition: 0.2s;
    :hover {
      color: white;
      background-color: #2d34b8;
      opacity: 0.8 !important;
    }
  }
`;

const ItemPC = styled.div`
  transition: 0.2s;
  position: relative;
  cursor: pointer;
  padding: 10px 15px;
  :hover {
    background: #dfdfdf;
    p {
      color: rgb(26, 96, 146);
    }
  }
  display: flex;
  alignitems: center;
  p {
    margin: 0;
    text-transform: uppercase;
    color: #535353;
    font-size: 14px;
  }
`;

const SimpleText = styled.p`
  margin: 0;
  margin-bottom: 5px;
  font-size: 11px;
  color: #5e5e5e;
`;

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #dfdfdf;
  width: 280px;
  height: 37px;
  padding: 0 10px;
  margin-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  margin-left: 0;
  border-radius: 1px;
  background-color: #1a6092;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  background: ${(props) => (props.bg ? props.bg : "white")};
  flex: ${(props) => props.flex};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ait};
  flex-wrap: ${(props) => props.fw};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => (props.bg ? props.bg : "white")};
  flex: ${(props) => props.flex};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ait};
  flex-wrap: ${(props) => props.fw};
`;

//Mobile
const LogoMobile = styled.img`
  height: 60px;
`;
const LogoMaior = styled.img`
  display: block;
  margin: auto;
  width: 80%;
`;
const SearchInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 3px;
  opacity: 1;
  height: 32px;
  width: 100%;
  margin-right: 3px;
`;
const SearchBtn = styled.span`
  height: 16px;
  background: #282d90 0% 0% no-repeat padding-box;
  box-shadow: 1px 1px 6px #00000029;
  border-radius: 3px;
  opacity: 1;
  cursor: pointer;
  color: white;
  padding: 10px;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;

export default Categories;
