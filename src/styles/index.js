import styled from "styled-components";

export const RowSelect = styled.div`
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

export const Line = styled.div`
  flex: 1;
  background: #81161b;
  height: 2px;
  min-width: 50px;
`;

export const Item = styled.p`
  margin: 0;
`;

export const CardContainer = styled.div`
flex: 1;
  min-width: 250px;
  max-width: 250px;
max-height: 300px;
overflow: hidden;
cursor: pointer;
display: flex;
flex-direction: column;
padding: 15px;
flex-wrap: no-wrap;
margin-bottom: 10px;
margin-right: 10px;
img {
  width: 100%;
  max-width: 230px;
  display: block;
  margin: auto;
}
:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

}
`;
