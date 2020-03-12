import styled from "styled-components";

export const Container = styled.div`
  margin-left: 220px;
  width: 100%;
`;


export const Title = styled.h1`
  text-align: left;
  font: Bold 30px/37px ;
  letter-spacing: 0;
  color: #5B5B5B;
  opacity: 1;
`

export const Row = styled.div`
  display: flex;
  flex: ${props => props.flex};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ait};
  flex-wrap: ${props => props.fw}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => props.flex};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ait};
  flex-wrap: ${props => props.fw};

`

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  :hover {
    border: 1px solid #960d03;
  }
  transition: .2s;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 100%;
  :hover {
    opacity: 0.8;
  }
  transition: 0.2s;
  background-color: #960d03;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const DivMessage = styled.div`
  padding: 10px;
  margin-top: 15px;
  background: #ff5647;
  width: 250px;
  border-radius: 10px;
  p {
    color: white !important;
  }
  opacity: ${props => props.show};
  transition: 0.5s;
`;

export const Hr = styled.hr`
  width: 50%;
`;

export const UploadImageContainer = styled.div`
  img {
    max-width: 320px;
  }
`;
