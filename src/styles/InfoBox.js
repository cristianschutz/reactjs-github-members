import styled from "styled-components";

const InfoBox = styled.div`
  align-content: center;
  align-items: center;
  border: 1px solid #515151;
  display: flex;
  flex-direction: column;
  height: 260px;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 140px 20px 20px;
  position: relative;
  transition: all 0.3s ease-in-out;
  width: 100%;
  z-index: 1;

  &:before {
    background: #f5f5f5;
    bottom: 0;
    content: "";
    display: block;
    height: auto;
    left: 0;
    position: absolute;
    top: 80px;
    width: 100%;
    z-index: -1;
  }

  figure {
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.2);
    height: 80px;
    left: 50%;
    margin: 0;
    overflow: hidden;
    position: absolute;
    top: 40px;
    transform: translateX(-50%);
    width: 80px;

    img {
      border-radius: 50%;
      display: block;
      margin: 0;
      width: 100%;
    }
  }

  time {
    display: block;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
  }

  h6 {
    color: #333;
    font-size: 20px;
    font-weight: 400;
    margin: 0 0 20px;
    text-align: center;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0 auto;
    padding: 0;
    width: 240px;

    li {
      align-items: center;
      background: #fff;
      color: #000;
      display: flex;
      flex-direction: row;
      font-size: 13px;
      font-weight: 700;
      height: 30px;
      justify-content: center;
      text-align: center;
      white-space: nowrap;
      width: 50%;

      small {
        font-size: 11px;
        font-weight: 300;
        margin-left: 3px;
      }

      &:first-child {
        border-radius: 30px 0 0 30px;
        margin-right: 1px;
      }

      &:last-child {
        border-radius: 0 30px 30px 0;
      }
    }
  }

  button {
    background: transparent;
    border: 1px solid #333;
    color: #333;
    display: block;
    height: 40px;
    line-height: 40px;
    font-weight: 500;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    width: 100%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #000;
      color: #fff;
    }
  }

  &:after {
    clear: both;
    display: table;
  }

  &:hover {
    box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.2);
    border-color: #000;
  }
`;

export default InfoBox;
