import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Router, Link } from "../../../../routes";
import { Button } from "../../../static/styled-components/base";
import { getMachines } from "../../../utils/machines";
import { Creators as MachineCreators } from "../../../ducks/machines";
import { Creators as UtilCreators } from "../../../ducks/utils";

export default function ListMachines() {
  const [hideBtns, setHideBtns] = useState(true);
  

  const { message, messageType, messageColor } = useSelector(
    state => state.Utils
  );
  const { machines } = useSelector(state => state.Machine);
  const dispatch = useDispatch();

  useEffect(() => {
    function _getMachines() {
      getMachines(function(err, machines) {
        if (err) {
          dispatch(UtilCreators.changeMessage(err));
          dispatch(UtilCreators.changeType(false));
          dispatch(UtilCreators.changeColor("red"));
          return;
        }
        dispatch(MachineCreators.loadMachines(machines));
      });
    }
    _getMachines();
  }, []);

  return (
    <>
      {hideBtns ? (
        <>
          <Button onClick={() => {}}>Filtrar por categorias</Button>

          <Button>Filtrar por fabricantes</Button>
        </>
      ) : null}
      <Container>
        {machines.map(machine => (
          <Link
            as={`/admin/machine/${machine.id.toString()}`}
            href={`/admin/machines/machine?id=${machine.id.toString()}`}
          >
            <CardContainer>
              <img src={machine.images[0]} />
              <div>
                <Title> {machine.name} </Title>
                <Subtitle>{machine.description}</Subtitle>
              </div>
              <Description>{machine.mainFeatures}</Description>
            </CardContainer>
          </Link>
        ))}
      </Container>
    </>
  );

  function navigateToMachine(id) {
    Router.push("/admin/machine/machine", "/machine/machine/[id]");
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
