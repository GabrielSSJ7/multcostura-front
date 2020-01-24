import styled from "styled-components";

export const Container = styled.div`
  margin-left: 220px;
  width: 100%;
`;

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
