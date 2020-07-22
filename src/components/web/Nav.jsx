import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";

import setApi from "../../api";
import Link from "next/link";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faList,
  faSearch,
  faHome,
  faBuilding,
  faHeadset,
  faNewspaper,
  faArrowLeft,
  faIndustry,
  faPhone,
  faEnvelope,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

import logoMaior from "../../static/images/logo-multcostura--horizontal.png";

import arrowUp from "../../static/images/arrow-up.png";
import arrowDown from "../../static/images/arrow-down.png";
import logo from "../../static/images/logo-multcostura-(oficial).png";
import whatsapp from "../../static/images/whatsapp.png";
import dollar from "../../static/images/dollar.svg";
import phone from "../../static/images/phone-icon.svg";
import email from "../../static/images/email-icon.svg";
import close from "../../static/images/close.png";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Nav() {
  const [categories, setCategories] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [hideDropMenu, setHideDropMenu] = useState(false);
  const [hideManufMenu, setHideManufMenu] = useState(false);
  const [translate, setTranslate] = useState(0);
  const [highDolar, setHighDolar] = useState(0);
  const [pctChange, setPctChange] = useState(false);
  const [search, setSearch] = useState("");
  const Router = useRouter();

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setTranslate(window.innerWidth);
    });
  });

  useEffect(() => {
    setTranslate(window.innerWidth);
    async function async() {
      setApi()
        .get("/categories")
        .then((response) => {
          setCategories(response.data);
        })
        .catch((err) => {});

      setApi()
        .get("/manufacturer")
        .then((response) => {
          setManufacturers(response.data);
        })
        .catch((err) => {});

      setApi()
        .get("https://economia.awesomeapi.com.br/all/USD-BRL")
        .then((response) => {
          console.log("response >>", response.data);
          setHighDolar(parseFloat(response.data.USD.high).toFixed(2));
          setPctChange(parseFloat(response.data.USB.pctChange) > 0);
        })
        .catch((err) => {});
    }
    async();
  }, []);

  return translate < 890 ? (
    <NavSm
      props={{
        hideDropMenu,
        hideManufMenu,
        setHideManufMenu,
        setHideDropMenu,
        categories,
        manufacturers,
        highDolar,
        pctChange,
      }}
    />
  ) : (
    <Column>
      <Column style={{ alignItems: "center", backgroundColor: "#1a6092" }}>
        {/* barra azul contato */}
        <Row
          style={{
            maxWidth: "300px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1a6092",
          }}
        >
          {/*<FontAwesomeIcon icon={faEnvelope} style={{ 
          color: "white", 
          marginRight: "15px",
          fontWeight: "bold"
        }}/>*/}
          <img
            src={email}
            style={{
              width: "14px",
              marginRight: "10px",
            }}
          />
          <p
            style={{
              backgroundColor: "#1a6092",
              color: "#fff",
              marginBottom: "5px",
              marginTop: "8px",
              fontSize: "14px",
            }}
          >
            contato@multcostura.com.br
          </p>
        </Row>
        {/* ================== */}
        {/* barra com busca */}
        <Row
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
            backgroundColor: "white",
          }}
        >
          <Row style={{ maxWidth: "920px", alignSelf: "center" }}>
            <div
              style={{
                flex: 1,
                cursor: "pointer",
                minWidth: "157px",
                width: "157px",
                maxWidth: "157px",
                marginLeft: "15px",
              }}
              onClick={() => (window.location = "/")}
            >
              <img
                style={{ width: "100%", maxWidth: "157px" }}
                src={logo}
                alt="logo multcostura"
              />
            </div>

            <Row
              style={{
                flex: 2,
                alignItems: "center",
                marginBottom: "11px",
                marginLeft: "5px",
              }}
            >
              <Input
                style={{ width: "100%" }}
                placeholder="Buscar produto..."
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(k) => {
                  if (k.key == "Enter")
                    window.location.href = "./produtos?search=" + search;
                }}
              />
              <Button
                onClick={() =>
                  (window.location.href = "./produtos?search=" + search)
                }
                style={{
                  height: "39px",
                  width: "51px",
                  borderRadius: "5px",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ color: "white" }}
                  size="2x"
                />
              </Button>
            </Row>

            <Row style={{ flex: 2, alignItems: "center", marginLeft: "30px" }}>
              <Row style={{ flex: 1 }}>
                <div style={{ width: "35.5px" }}>
                  <img src={phone} style={{ width: "100%" }} />
                </div>
                <Column style={{ marginLeft: "5px" }}>
                  <SimpleText>(11) 2693-7212</SimpleText>
                  <SimpleText>Atendimento</SimpleText>
                </Column>
              </Row>
              <Row style={{ flex: 1 }}>
                <div style={{ width: "35.5px" }}>
                  <img src={whatsapp} style={{ width: "100%" }} />
                </div>
                <Column style={{ marginLeft: "5px" }}>
                  <SimpleText>(11) 97472-3356</SimpleText>
                  <SimpleText>WhatsApp</SimpleText>
                </Column>
              </Row>

              <Row style={{ flex: 1 }}>
                <div style={{ width: "40.5px" }}>
                  <img src={dollar} style={{ width: "100%" }} />
                </div>
                <Column style={{ marginLeft: "5px" }}>
                  <SimpleText>
                    <span
                      style={{
                        color: pctChange ? "#20B138" : "red",
                      }}
                    >
                      {highDolar}
                    </span>
                    {pctChange ? (
                      <img src={arrowUp} style={{ width: "16px" }} />
                    ) : (
                      <img src={arrowDown} style={{ width: "13%" }} />
                    )}
                  </SimpleText>
                  <SimpleText>Dólar</SimpleText>
                </Column>
              </Row>
            </Row>
          </Row>
        </Row>
        {/* ================ */}

        {/* terceira barra */}
        <Row
          style={{
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
        >
          <Row style={{ maxWidth: "900px", alignSelf: "center" }}>
            <ItemPC onClick={() => Router.push("/")}>
              <p>home</p>
            </ItemPC>
            <ItemPC
              onMouseEnter={() => setHideManufMenu(true)}
              onMouseLeave={() => setHideManufMenu(false)}
            >
              <p>Nossas Marcas</p>
              <Triangle vis={hideManufMenu} />
              <DropDownMenu vis={hideManufMenu}>
                {manufacturers.map((man, i) => (
                  <DropDownItem
                    key={i}
                    onClick={() =>
                      Router.push({
                        pathname: "/produtos",
                        query: { type: "manufacturer", id: man.id },
                      })
                    }
                  >
                    {man.name}
                  </DropDownItem>
                ))}
              </DropDownMenu>
            </ItemPC>

            <ItemPC onClick={() => Router.push("/#revendedores")}>
              <p>revendedores</p>
            </ItemPC>
            <ItemPC
              onMouseEnter={() => setHideDropMenu(true)}
              onMouseLeave={() => setHideDropMenu(false)}
            >
              <p>Máquinas</p>
              <Triangle vis={hideDropMenu} />
              <DropDownMenu vis={hideDropMenu}>
                {categories
                  .sort((a, b) => {
                    if (a.position && b.position)
                      return a.position - b.position;
                    if (!a.position && !b.position) return 0;
                    return !b.position ? -1 : 1;
                  })
                  .map((cat, i) => (
                    <DropDownItem
                      key={cat.id}
                      onClick={() =>
                        Router.push("/produtos?type=categories&id=" + cat.id)
                      }
                    >
                      {cat.name}
                    </DropDownItem>
                  ))}
              </DropDownMenu>
            </ItemPC>
            <ItemPC onClick={() => Router.push("/produtos?type=tools")}>
              <p>Peças e acessórios</p>
            </ItemPC>
            <ItemPC onClick={() => Router.push("/noticias")}>
              <p>Notícias</p>
            </ItemPC>
            <ItemPC onClick={() => Router.push("/empresa")}>
              <p>Sobre nós</p>
            </ItemPC>
            <ItemPC onClick={() => Router.push("/contato")}>
              <p>Contato</p>
            </ItemPC>
          </Row>
        </Row>
      </Column>
    </Column>
  );
}

import MainDrawer from "./NavComponents/MainMenu";
import CategoriesDrawer from "./NavComponents/Categories";
import ManufacturersDrawer from "./NavComponents/Manufacturers";

//NAV MOBILE
function NavSm({
  props: {
    hideDropMenu,
    hideManufMenu,
    setHideManufMenu,
    setHideDropMenu,
    categories,
    manufacturers,
    highDolar,
    pctChange,
  },
}) {
  const Router = useRouter();
  const classes = useStyles();
  const [dola, setdola] = useState(5);
  const [left, setLeft] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [state, setState] = useState({
    categories: [],
    manufacturers: [],
  });

  useEffect(() => {
    setState((state) => ({
      ...state,
      categories,
      manufacturers,
    }));
  }, [categories, manufacturers]);

  const [listController, setListController] = useState("main");

  function CurrentList({ list }) {
    return (
      <>
        {list == "manufacturers" && (
          <ManufacturersDrawer state={{ ...state, setListController }} />
        )}
        {list == "categories" && (
          <CategoriesDrawer state={{ ...state, setListController }} />
        )}
        {list == "main" && (
          <MainDrawer
            state={{ ...state, setListController, highDolar, pctChange }}
          />
        )}
      </>
    );
  }

  const SideList = (side) => (
    <div className={classes.list} role="presentation">
      <List style={{ padding: 0 }}>
        <div
          style={{
            width: "100%",
            background: "#EDEDED",
            padding: "15px 0",
            boxShadow: "grey 1px 1px 10px",
          }}
        >
          <LogoMaior src={logoMaior} />
        </div>
        <CurrentList list={listController} />
      </List>
    </div>
  );
  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLeft(open);
  };
  return (
    <div>
      {!search ? (
        <Row
          jc="space-around"
          ait="center"
          style={{ background: "#EDEDED", width: "100%", height: "84px" }}
        >
          <span onClick={toggleDrawer("left", true)}>
            <FontAwesomeIcon icon={faList} size="2x" />
          </span>
          <LogoMobile src={logo} onClick={() => window.location = "/"} />
          <span onClick={() => setSearch(true)}>
            <FontAwesomeIcon icon={faSearch} size="2x" />
          </span>
        </Row>
      ) : (
        <Row
          jc="center"
          ait="center"
          style={{ background: "#EDEDED", width: "100%", height: "84px" }}
        >
          <img
            src={close}
            onClick={() => setSearch(false)}
            style={{ padding: "10px", width: "18px" }}
          />
          <SearchInput
            style={{ width: "70%", padding: "0 5px" }}
            placeholder="Buscar produto..."
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            onKeyDown={(k) => {
              if (k.key == "Enter")
                window.location.href = "./produtos?search=" + searchKey;
            }}
          />
          <SearchBtn
            onClick={() =>
              (window.location.href = "./produtos?search=" + searchKey)
            }
          >
            BUSCAR
          </SearchBtn>
        </Row>
      )}

      <Drawer open={left} onClose={toggleDrawer("left", false)}>
        <SideList />
      </Drawer>
    </div>
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
  border: 0;
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
