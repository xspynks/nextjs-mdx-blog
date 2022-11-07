import styled from "styled-components";

const Button = styled.div`
  width: 166px;
  height: 40px;
  background-color: #f4d35e;
  color: #0d1521;
  border: #fff1bf solid;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #0d1521;
    color: #f4d35e;
    border: #f4d35e solid;
  }
`;

export default Button;
