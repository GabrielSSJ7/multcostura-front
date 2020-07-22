import React, { useEffect, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import setApi from "../../api";

import { useSelector, useDispatch } from "react-redux";

import { Creators } from "../../ducks/machines";

import loading from "../../static/images/loading.gif";

export default function ListProd({ id, type, search }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { machines, machinesForFilters, filters } = useSelector(
    (state) => state.Machine
  );
  const [prods, setProds] = useState([]);
  const [indexPag, setIndexPag] = useState(0);
  const [listProdsPag, setListProdsPag] = useState([]);
  const [visLoading, setVisLoading] = useState(false);
  const [screenW, setScreenW] = useState(0);
  useLayoutEffect(() => {
    setScreenW(window.innerWidth);
    window.addEventListener("resize", function () {
      setScreenW(window.innerWidth);
      console.log("largura >>", window.innerWidth);
    });
  }, []);
  async function f() {
    if (search) {
      console.log("search", search);
      let machines = { data: [] };
      let tools = { data: [] };
      try {
        machines = await setApi().get(
          `/machine?search=${search}&filters=${JSON.stringify(filters)}`
        );
        listP = machines.data;
      } catch (e) {}

      try {
        tools = await setApi().get(`/tools?search=${search}`);
        listP = tools.data;
      } catch (e) {}
      setProds(machines.data.concat(tools.data));
      dispatch(Creators.loadMachines(machines.data.concat(tools.data)));
      dispatch(
        Creators.loadMachinesForFilters(machines.data.concat(tools.data))
      );
      setListProdsPag(groupBy(machines.data.concat(tools.data), 10));
      setVisLoading(false);
    } else {
      //console.log(type)
      if (type != "tools") {
        setApi()
          .get(`machine?${type}=${id}&filters=${JSON.stringify(filters)}`)
          .then((res) => {
            dispatch(Creators.loadMachines(res.data));
            dispatch(Creators.loadMachinesForFilters(res.data));
            setProds(res.data);
            setListProdsPag(groupBy(res.data, 10));
            setVisLoading(false);
          })
          .catch((err) => {
            setVisLoading(false);
          });

        return;
      }

      setApi()
        .get("/tools")
        .then((response) => {
          dispatch(Creators.loadMachines(response.data));
          //dispatch(Creators.loadMachinesForFilters(response.data))
          setProds(response.data);
          setListProdsPag(groupBy(response.data, 10));
          //setListProdsPag(groupBy(response.data, 10))
          setVisLoading(false);
        })
        .catch((err) => {
          setVisLoading(false);
        });
    }
  }
  useEffect(() => {
    setVisLoading(true);

    f();
  }, [id, type]);

  // useEffect(() => {
  // 	setListProdsPag(groupBy(machines, 10))
  // }, [machines])

  useEffect(() => {
    if (type != "tools" && !search) {
      setVisLoading(true);
      setApi()
        .get(`machine?${type}=${id}&filters=${JSON.stringify(filters)}`)
        .then((res) => {
          dispatch(Creators.loadMachines(res.data));
          //dispatch(Creators.loadMachinesForFilters(res.data))
          setProds(res.data);
          setListProdsPag(groupBy(res.data, 10));
          setVisLoading(false);
        })
        .catch((err) => {
          dispatch(Creators.loadMachines([]));
          setProds([]);
          setListProdsPag(groupBy([], 10));
          setVisLoading(false);
        });

      return;
    }
  }, [filters]);

  function groupBy(arr, n) {
    var group = [];
    for (var i = 0, end = arr.length / n; i < end; ++i)
      group.push(arr.slice(i * n, (i + 1) * n));
    return group;
  }

  return (
    <Column style={{ width: "80%", margin: "0 auto" }}>
      {visLoading ? (
        <img
          src={loading}
          style={{ width: "32px", margin: "auto", display: "block" }}
        />
      ) : listProdsPag.length > 0 ? (
        <Column>
          <h1>{search ? "Resultado da sua busca" : ""}</h1>
          <Row className="media-r" style={{ flexWrap: "wrap" }}>
            {listProdsPag[indexPag].map((prod) => (
              <Column
                key={prod.id}
                style={{
                  width: `${(screenW - (screenW / 100) * 20) / 3 - 40}px`,
                  cursor: "pointer",
                  margin: "15px",
                  border: "1px solid #DFDFDF",
                  marginBottom: "15px",
                }}
                className="media-p"
                onClick={() =>
                  router.push({ pathname: "/produto", query: { id: prod.id } })
                }
                ait="center"
              >
                <Img
                  src={prod.images.length > 0 ? prod.images[0] : ""}
                  width="100%"
                  height="280px"
                />
                <div
                  style={{
                    background: "#EEEEEE",
                    padding: "3px 10px",
                    maxWidth: "85%",
                    marginTop: "10px",
                    width: "85%",
                  }}
                >
                  <Name>{prod.name}</Name>
                </div>

                <p
                  style={{
                    maxWidth: "80%",
                    fontFamily: "arial",
                    lineHeight: "25px",
                    minHeight: "90px",
                  }}
                >
                  {prod.mainFeatures.length > 40
                    ? prod.mainFeatures.substr(0, 100) + "..."
                    : prod.mainFeatures}
                </p>
                <Line />

                <RedButton>Ver mais</RedButton>
              </Column>
            ))}
          </Row>
          <Row jc="center" ait="center">
            <PagItem
              onClick={() => {
                indexPag < 0 ? "" : setIndexPag(indexPag - 1);
              }}
            >
              {"<"}
            </PagItem>
            {listProdsPag.map((a, i) => (
              <PagItem
                key={i}
                current={indexPag == i}
                onClick={() => setIndexPag(i)}
              >
                {i}
              </PagItem>
            ))}
            <PagItem
              onClick={() => {
                listProdsPag.length == indexPag + 1
                  ? ""
                  : setIndexPag(indexPag + 1);
              }}
            >
              {">"}
            </PagItem>
          </Row>
        </Column>
      ) : (
        <Name style={{ margin: "auto" }}>Nenhum resultado encontrado</Name>
      )}
    </Column>
  );
}

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${(props) => props.flex};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ait};
  flex-wrap: ${(props) => props.fw};
  @media (max-width: 700px) {
    width: 100% !important;
    align-items: center;
  }
`;
export const Row = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ait};
  flex-wrap: ${(props) => props.fw};
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const RowMedia = styled(Row)`
  @media (max-width: 700px) {
    justify-content: center;
  }
`;
const Name = styled.p`
  text-align: center;
  font-family: Segoe UI;
  letter-spacing: 0;
  color: #000000;
  opacity: 1;
`;

const PagItem = styled.p`
  cursor: pointer;
  padding: 5px;
  transition: 0.2s;
  color: ${(props) => (props.current ? "red" : "#5B5B5B")};
  :hover {
    opacity: 0.8;
  }
`;

const Line = styled.div`
  background: #aaaaaa;
  width: 85%;
  height: 1px;
  margin-top: 5px;
  margin-bottom: 25px;
`;

const RedButton = styled.div`
  border: none;
  background: #81161b;
  color: white;
  height: 37px;
  width: 123px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin-bottom: 15px;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
  }
`;

const Img = styled.div`
	background-image: url('${(props) => props.src}');
	// background-size: cover;
	background-size: 80%;
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
