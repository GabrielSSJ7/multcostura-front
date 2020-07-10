import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "../../api";
import { Creators } from "../../ducks/machines";
import {
  Column,
  Row,
  Select,
  Title,
} from "../../static/styled-components/base";

export default function Filters({ type }) {
  const { machinesForFilters, filters: filtersChoosed, machines } = useSelector(
    (state) => state.Machine
  );
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});
  const [filtersSelecteds, setFiltersSelecteds] = useState({});
  const [settings, setSettings] = useState([]);

  function settingFilters(machines) {
    let _filters = {};
    let _filtersSelected = {};
    machines.forEach((machine, a) => {
      const specKeys = machine.specifications
        ? Object.keys(machine.specifications)
        : [];
      if (specKeys.length > 0) {
        specKeys.forEach((k, i) => {
          if (checkFilterActivated(settings, k)) {
            _filtersSelected = {
              ..._filtersSelected,
              [k]: null,
            };
            if (machine.specifications[k]) {
              _filters = {
                ..._filters,
                [k]: _filters[k]
                  ? _filters[k].includes(machine.specifications[k])
                    ? _filters[k]
                    : [..._filters[k], machine.specifications[k]]
                  : [machine.specifications[k]],
              };
            }
          }
        });
      }
    });
    return {
      _filters,
      _filtersSelected,
    };
  }

  function checkFilterActivated(filters, name) {
    let status = false;
    //console.log("[Filters] checkFilterActivated", filters, name);
    filters.forEach((f) => {
      //console.log("[Filters] checkFilterActivated", f, name);
      if (f.name == name) status = f.status;
    });
    return status;
  }

  function getSettings(cb = function () {}) {
    axios()
      .get("/settings")
      .then((response) => {
        const s = response.data[0].desativatedFilters;
        //console.log("[Filters] ", s)
        cb(s);
      })
      .catch((err) => {});
  }

  useEffect(() => {
    getSettings(function (s) {
      setSettings(s);
      if (type == "categories" || type == "manufacturer") {
        const _ = settingFilters(machines, sÎ);
        setFiltersSelecteds(_._filtersSelected);
        dispatch(Creators.loadFilters(_._filtersSelected));
        setFilters(_._filters);
      }
    });
  }, []);

  useEffect(() => {
    console.log(
      "[Filters] changing machines",
      machines.length,
      machines.length >= 1
    );
    setFilters({});
    setFiltersSelecteds({});
    if (machines.length >= 1) {
      const _ = settingFilters(machines, settings);
      setFilters(_._filters);
    } else {
      setFilters({});
      setFiltersSelecteds({});
    }
    return () => {};
  }, [machines]);

  function handleChange(e) {
    if (e.target.value == 0) {
      dispatch(
        Creators.loadFilters({ ...filtersSelecteds, [e.target.name]: null })
      );
      setFiltersSelecteds({ ...filtersSelecteds, [e.target.name]: null });
      return;
    }
    if (e.target.value != 0) {
      dispatch(
        Creators.loadFilters({
          ...filtersSelecteds,
          [e.target.name]: e.target.value,
        })
      );
      setFiltersSelecteds({
        ...filtersSelecteds,
        [e.target.name]: e.target.value,
      });
    }
  }
  function handleDelete(i) {
    if (i) {
      const keys = Object.keys(filtersSelecteds);
      setFiltersSelecteds({ ...filtersSelecteds, [keys[i]]: null });
      dispatch(Creators.loadFilters({ ...filtersSelecteds, [keys[i]]: null }));
    } else {
      const keys = Object.keys(filtersSelecteds);
      let _filtersSelected = {};
      keys.forEach((k, i) => {
        _filtersSelected = {
          ..._filtersSelected,
          [k]: null,
        };
      });

      dispatch(Creators.loadFilters(_filtersSelected));
      setFiltersSelecteds(_filtersSelected);
    }
  }

  function renderSelect() {
    const keys = Object.keys(filters);
    const elements = [];
    keys.sort().forEach((k, i) => {
      elements.push(
        <Select
          key={i}
          name={k}
          onChange={handleChange}
          value={filtersSelecteds[k] == null ? 0 : filtersSelecteds[k]}
          style={{
            flex: 1,
            minWidth: "200px",
            marginRight: "5px",
            color: filtersSelecteds[k] == null ? "black" : "red",
          }}
        >
          <option value={0}>
            {k
              .replace(/([A-Z])/g, " $1")
              .trim()
              .toLowerCase()}
          </option>
          {filters[k].map((f) => {
            return <option value={f}>{f}</option>;
          })}
        </Select>
      );
    });

    return elements;
  }

  function renderFilterSelecteds() {
    const keys = Object.keys(filtersSelecteds);
    const elements = [];
    keys.forEach((k, i) =>
      filtersSelecteds[k]
        ? elements.push(
            <Tag onClick={() => handleDelete(i)}>
              {filtersSelecteds[k]}{" "}
              <span style={{ color: "grey", marginLeft: "2px" }}>X</span>
            </Tag>
          )
        : null
    );
    if (elements.length > 0)
      elements.push(
        <Tag onClick={() => handleDelete(null)}>LIMPAR FILTROS</Tag>
      );
    return elements;
  }

  return (
    <Row
      style={{
        flex: 2,
        flexWrap: "wrap",
        padding: "10px",
        justifyContent: "center",
      }}
    >
      {renderSelect().length > 0 ? (
        <Column style={{ alignItems: "center" }}>
          {/*<Title>Filtros</Title>*/}
          <Row style={{ flexWrap: "wrap" }} jc="space-between">
            {" "}
            {renderSelect()}{" "}
          </Row>
          <Row>{renderFilterSelecteds()}</Row>
        </Column>
      ) : null}
    </Row>
  );
}

const Tag = styled.span`
  border-radius: 15px;
  background: lightgrey;
  padding: 5px 10px;
  -webkit-transition: 0.2s;
  font-size: 75%;
  margin-right: 5px;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
  }
`;
