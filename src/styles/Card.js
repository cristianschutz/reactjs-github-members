import styled from "styled-components";

export const Card = styled.div`
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  height: auto;
  max-width: 95%;
  width: 800px;
`;

export const CardHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #f4f4f4;

  svg {
    width: 25px;
    margin-right: 10px;
    position: relative;
    bottom: -7px;
  }

  label {
    align-items: center;
    color: #222;
    display: flex;
    font-size: 12px;
    font-weight: 300;
  }

  input {
    display: block;
    border: 0;
    height: 30px;
    font-size: 12px;
    border: 1px solid #f2f2f2;
    color: #333;
    margin-left: 5px;
    padding: 0 10px;
    width: 150px;

    &:focus {
      outline: none;
    }
  }
`;

export const CardBody = styled.div`
  padding: 10px 20px;
`;
