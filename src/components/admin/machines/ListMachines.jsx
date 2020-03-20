import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Router, Link } from "../../../../routes";
import { Button, Select, Input } from "../../../static/styled-components/base";
import { getMachines, getOptions } from "../../../utils/machines";
import { Creators as MachineCreators } from "../../../ducks/machines";
import { Creators as UtilCreators } from "../../../ducks/utils";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export default function ListMachines() {
  const [state, setState] = useState({
    category: null,
    manufacturer: null,
    search: ""
  });
  const [categories, setCategories] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const { machines } = useSelector(state => state.Machine);
  const dispatch = useDispatch();

  const [snackBar, setSnackBar] = useState({
    result: "success",
    open: false,
    message: ""
  });
  function handleClose() {
    setSnackBar({
      ...snackBar,
      open: false
    });
  }

  useEffect(() => {
    async function asyncFunc() {
      getMachines(
        function(err, machines) {
          if (err) {
            setSnackBar({
              result: "error",
              open: true,
              message: err
            });
            dispatch(MachineCreators.loadMachines([]));
            return;
          }
          dispatch(MachineCreators.loadMachines(machines));
        },
        {
          category: state.category,
          manufacturer: state.manufacturer,
          search: state.search
        }
      );
    }
    asyncFunc();
    return () => {};
  }, [state]);

  useEffect(() => {
    function asyncFunc() {
      getMachines(function(err, machines) {
        if (err) {
          setSnackBar({
            result: "error",
            message: err,
            open: true
          });
          return;
        }
        dispatch(MachineCreators.loadMachines(machines));
      });
      getOptions(function(err, data) {
        if (err) {
          setSnackBar({
            result: "error",
            open: true,
            message: err
          });
          return;
        }
        setCategories(data.categories.data);
        setManufacturers(data.manufacturers.data);
      });
    }
    asyncFunc();
  }, []);

  return (
    <>
      <Snackbar
        open={snackBar.open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity={snackBar.result}>{snackBar.message}</Alert>
      </Snackbar>

      <div style={{ width: "100%", display: "block", margin: "auto" }}>
        <Input
          value={state.search}
          type="text"
          name="search"
          id="search"
          placeholder="Pesquise pelo nome"
          onChange={e => setState({ ...state, search: e.target.value })}
        />
        <Select
          value={state.category}
          onChange={e => setState({ ...state, category: e.target.value })}
        >
          <option value="">Escolha uma categoria</option>
          {categories.map(category => (
            <option
              selected={state.category == category.id ? category.id : false}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </Select>

        <Select
          value={state.manufacturer}
          onChange={e => setState({ ...state, manufacturer: e.target.value })}
        >
          <option value="">Escolha um fabricante</option>
          {manufacturers.map(manu => (
            <option
              selected={state.manufacturer == manu.id ? manu.id : false}
              value={manu.id}
            >
              {manu.name}
            </option>
          ))}
        </Select>
      </div>

      <Container>
        {machines.map(machine => (
          <Link
            href={`/admin/machines/machine?id=${machine.id.toString()}`}
          >
            <CardContainer>
              <img src={machine.images[0]} />
              <div>
                <Title> {machine.name} </Title>
                <Subtitle>{machine.description}</Subtitle>
              </div>
              {/* <Description>{machine.mainFeatures}</Description> */}
            </CardContainer>
          </Link>
        ))}
      </Container>
    </>
  );

  function navigateToMachine(id) {
    Router.push(`/admin/machines/machine?id=${id}`);
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardContainer = styled.div`
	min-width: 250px;
	max-width: 250px;
	max-height: 300px;
	overflow: hidden;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	flex-wrap: no-wrap;
	margin-bottom: 10px;
	margin-right: 15px;
	img {
		width: 100%;
		max-width: 230px;
		display: block;
		margin: auto
	}
	padding: 15px;
	:hover {
		box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	}
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

}
`;
const Title = styled.p`
  font-size: 22px;
  margin: 0 15px;
`;
const Subtitle = styled.p`
  color: lightgrey;
  margin: 0 15px;
`;
const Description = styled.p`
  color: grey;
  margin: 15px 15px;
`;
