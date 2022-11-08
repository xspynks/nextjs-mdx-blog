import styled from "styled-components";

const Button = styled.div`
  width: max-content;
  height: max-content;
  margin: 24px auto;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4d35e;
  color: #0d1521;
  border: #fff1bf solid;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #344966;
    color: #f4d35e;
    border: #f4d35e solid;
  }
`;

export default Button;
