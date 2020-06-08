import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

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
  const [filtersElement, setFiltersElement] = useState([]);

  function configFilters() {
    let _filters = {};
    let _filtersSelected = {};

    if (machines.length > 1) {
      machines.forEach((machine, a) => {
        const specKeys = machine.specifications
          ? Object.keys(machine.specifications)
          : [];
        specKeys.forEach((k, i) => {
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
        });
      });
      setFiltersSelecteds(_filtersSelected);
      dispatch(Creators.loadFilters(_filtersSelected));
      setFilters(_filters);
    }
  }

  useEffect(() => {
    if (type == "categories" || type == "manufacturer") configFilters();
  }, []);

  useEffect(() => {
    if (type == "tools") {
      setFilters({});
      setFiltersSelecteds({});
    }
    if (type == "categories") {
      let _filters = {};
      if (machines.length >= 1) {
        machines.forEach((machine, a) => {
          const specKeys = machine.specifications
            ? Object.keys(machine.specifications)
            : [];
          specKeys.forEach((k, i) => {
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
          });
        });
        setFilters(_filters);
      }
    }
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

  // function filterMachines () {
  // 	const keys = Object.keys(filtersSelecteds)
  // 	let filtersAreEmpty = true

  // 	keys.forEach(k => {
  // 		if (filtersSelecteds[k]) filtersAreEmpty = false
  // 	})

  // 	if (!filtersAreEmpty) {
  // 		const machinesFiltereds = machinesForFilters.filter((m, i) => {
  // 			let r = false
  // 			keys.forEach(k => {
  // 				if (m.specifications[k]){
  // 					if (m.specifications[k] == filtersSelecteds[k])
  // 						r = true
  // 				}
  // 			})

  // 			return r
  // 		})
  // 		dispatch(Creators.loadMachines(machinesFiltereds))
  // 	} else {
  // 		dispatch(Creators.loadMachines(machinesForFilters))
  // 	}

  // }

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
    <Row style={{ flex: 2, flexWrap: "wrap", padding: "10px" }}>
      {renderSelect().length > 0 ? (
        <Column>
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
