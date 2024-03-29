import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import Head from "next/head";
import { Link } from "../routes";
import { connect } from "react-redux";
import Splash from "../src/components/web/Splash";
import { Select, Column, Row } from "../src/static/styled-components/base";
import { Line as SLine, Item, CardContainer } from "../src/styles";
import Home from "../src/components/web/home/Home";
import Map from "../src/components/web/Map";
import SlideWeb from "../src/components/web/SlideWeb";
import Template from "../src/components/templates/Web";
import setApi from "../src/api";
import styled from "styled-components";


const RowSelect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  max-width: 40%;
  @media (max-width: 600px) {
    max-width: 93%;
  }
`;
const IndexPage = () => {
  const ref = React.createRef();

  const handleClick = () =>
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  const [resellers, setResellers] = useState([]);
  const [images, setImages] = useState([]);
  const [map, setMap] = useState(null);
  const [infobox, setInfobox] = useState();
  const [pageLoading, setPageLoading] = useState(true);
  const [state, setState] = useState({
    states: [],
    cities: [],
    state: {
      id: "Selecione um estado",
      name: null,
    },
    city: null,
    resellersFound: false,
  });

  async function onChangeState(e) {
    const value = e.target.value.split("-");
    setState({
      ...state,
      state: {
        id: value[0],
        name: value[1],
      },
      city: "Selecione uma cidade",
    });
  }

  function onChangeCity(e) {
    setState({
      ...state,
      city: e.target.value,
    });
  }
  async function setViewMap(state, city) {
    //const map = new Microsoft.Maps.Map(document.getElementById('map'), {})
    //const { map } = props
    if (map) {
      if (state || city) {
        Microsoft.Maps.loadModule("Microsoft.Maps.Search", function () {
          var searchManager = new Microsoft.Maps.Search.SearchManager(map);
          var requestOptions = {
            bounds: map.getBounds(),
            where: `${city ? city + ", " + state.id : state.name}`,
            callback: function (answer, userData) {
              map.setView({
                center: new Microsoft.Maps.Location(
                  answer.results[0].location.latitude,
                  answer.results[0].location.longitude
                ),
                zoom: 11,
              });
            },
          };
          searchManager.geocode(requestOptions);
        });
      }
    }
  }

  useEffect(() => {
    if (location.hash) {
      handleClick();
    }
  }, [ref]);

  useEffect(() => {
    async function async() {
      const response = await setApi().get("/dist/locates.json");

      setState({
        ...state,
        states: response.data.estados,
        cities: response.data.cidades,
      });
      setApi()
        .get("/institutional/homeBanners")
        .then((res) => {
          setImages(res.data);
        })
        .catch((err) => {});

      try {
        const response = await setApi().get("/reseller");
        setResellers(response.data);
        const revendedores = response.data;

        let map, infobox;
        async function loadMapScenario() {
          console.log("loading map scenario...");
          map = await new Microsoft.Maps.Map(
            document.getElementById("map"),
            {}
          );
          setMap(map);
          for (let revendedor in revendedores) {
            //Create an infobox at the center of the map but don't show it.
            infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
              visible: false,
            });

            //Assign the infobox to a map instance.
            infobox.setMap(map);

            //Create a pushpin at a random location in the map bounds.
            var randomLocation = Microsoft.Maps.TestDataGenerator.getLocations(
              1,
              map.getBounds()
            );

            var pin = new Microsoft.Maps.Pushpin({
              latitude: revendedores[revendedor].maps.lat,
              longitude: revendedores[revendedor].maps.lng,
              altitude: 0,
              altitudeReference: -1,
            });

            //Store some metadata with the pushpin.
            pin.metadata = {
              title: revendedores[revendedor].name,
              description:
                "Endereço: " +
                revendedores[revendedor].address +
                "<br/> Tel: " +
                revendedores[revendedor].phone +
                "<br/> E-mail: " +
                revendedores[revendedor].email,
            };

            //Add a click event handler to the pushpin.
            Microsoft.Maps.Events.addHandler(pin, "click", pushpinClicked);

            //Add pushpin to the map.
            map.entities.push(pin);
          }
        }

        function pushpinClicked(e) {
          //Make sure the infobox has metadata to display.
          if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
              location: e.target.getLocation(),
              title: e.target.metadata.title,
              description: e.target.metadata.description,
              visible: true,
            });
          }
        }

        setTimeout(() => {
          loadMapScenario();
        }, 1000);
      } catch (e) {
        console.log(e);
      }
    }
    async();
  }, []);

  useLayoutEffect(() => {
    setPageLoading(false);
    document.querySelector("body").scrollTo(1655, 0);
  }, []);

  /*async function loadMapScenario() {
      console.log("si")
      const map = await new Microsoft.Maps.Map(document.getElementById('map-contato'), {})
      setMultViewMap(map)
  }*/

  function setMultViewMap(map) {
    Microsoft.Maps.loadModule("Microsoft.Maps.Search", function () {
      var searchManager = new Microsoft.Maps.Search.SearchManager(map);
      var requestOptions = {
        bounds: map.getBounds(),
        where: `Rua Newton Prado, 71 Bom Retiro São Paulo SP`,
        callback: function (answer, userData) {
          var pushpin = new Microsoft.Maps.Pushpin(
            new Microsoft.Maps.Location(
              answer.results[0].location.latitude,
              answer.results[0].location.longitude
            ),
            {
              text: "M",
              title: "Multcostura",
              subTitle: "Rua Newton Prado, 71 Bom Retiro São Paulo SP",
            }
          );
          map.entities.push(pushpin);

          map.setView({
            center: new Microsoft.Maps.Location(
              answer.results[0].location.latitude,
              answer.results[0].location.longitude
            ),
            zoom: 17,
          });
        },
      };
      searchManager.geocode(requestOptions);
    });
  }

  return (
    <Template>
      <Column style={{ width: "100%" }}>
        <SlideWeb images={images.map((img) => img.image)} balls={true} />
        <Home />
        {/*Map map={map} resellers={resellers}/>*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <Row
            ref={ref}
            id="revendedores"
            style={{
              maxWidth: "800px",
              width: "80%",
              margin: "auto",
            }}
            jc="center"
          >
            <Line style={{ minWidth: "5px" }} />
            <H1 style={{}}>Encontre um revendedor próximo a você!</H1>
            <Line style={{ minWidth: "5px" }} />
          </Row>
          <p style={{ color: "#717171", opacity: 0.8, textAlign: "center" }}>
            Selecione a baixo seu estado e cidade para encontrar o revendedor
            mais próximo.
          </p>
          <RowSelect>
            <Select
              style={{
                margin: "0 5px",
                flex: 1,
                padding: "0",
                background: "#fff",
                height: "25px",
                fontSize: ".6rem",
                borderColor: "#707070",
              }}
              onChange={onChangeState}
              value={`${state.state.id}-${state.state.name}`}
            >
              <option value={"Selecione o estado"}>Selecione o estado</option>
              {state.states.map((st, i) => (
                <option key={i} value={`${st.id}-${st.estado}`}>
                  {st.estado}
                </option>
              ))}
            </Select>

            <Select
              style={{
                margin: "0 5px",
                padding: "0",
                flex: 1,
                background: "#fff",
                height: "25px",
                fontSize: ".6rem",
                borderColor: "#707070",
              }}
              onChange={onChangeCity}
              value={state.city}
            >
              <option value="Selecione a cidade">Selecione a cidade</option>
              {state.cities
                .filter((cit) => (cit.estadoId == state.state.id ? cit : false))
                .map((cit, i) => (
                  <option key={i} value={cit.id}>
                    {cit.cidade}
                  </option>
                ))}
            </Select>
            <button
              onClick={() => setViewMap(state.state, state.city)}
              style={{
                width: "90px",
                height: "25px",
                background:
                  "transparent linear-gradient(180deg, #242873 0%, #161848 100%) 0% 0% no-repeat padding-box",
                borderRadius: "4px",
                color: "white",
                cursor: "pointer",
              }}
            >
              BUSCAR
            </button>
          </RowSelect>
          <DivMap key="as" id="map" style={{}} />
        </div>

        <Row style={{ flexWrap: "wrap", maxWidth: "70%", margin: "auto" }}>
          {resellers
            .filter((resel) => {
              if (state) {
                if (
                  (new RegExp(state.state.id).test(resel.address) ||
                    new RegExp(state.state.name).test(resel.address)) &&
                  new RegExp(state.city).test(resel.address)
                ) {
                  return resel;
                } else {
                  if (
                    new RegExp(state.state.id).test(resel.address) ||
                    new RegExp(state.state.name).test(resel.address)
                  ) {
                    return resel;
                  }
                }
              }
            })
            .map((resel, i) => (
              <CardContainer key={i}>
                <Column>
                  <Item>{resel.name}</Item>
                  <hr style={{ width: "100%" }} />
                  <Item>{resel.address}</Item>
                  <Item>Tel: {resel.phone}</Item>
                  <Item>E-mail: {resel.email}</Item>
                </Column>
              </CardContainer>
            ))}
        </Row>
      </Column>
    </Template>
  );
};

const DivMap = styled.div`
  width: 92%;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 7px solid #dcdcdc;
  border-radius: 10px;
  height: 250px;

  @media (min-width: 600px) {
    height: 500px;
    width: 80%;
  }
`;

const H1 = styled.h1`
  color: #5b5b5b;
  text-align: center;
  font-size: 1rem;
  width: 80%;
  @media (min-width: 700px) {
    font-size: 2rem;
  }
`;

const Line = styled(SLine)`
  width: 5%;
  margin-top: 18px;

  @media (min-width: 700px) {
    margin-top: 38px;
  }
`;

IndexPage.getInitialProps = ({ reduxStore }) => {
  return {};
};

export default IndexPage;
