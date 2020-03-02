import { createGlobalStyle } from "styled-components";

// import loadingImg from "../assets/loading.gif";

export default createGlobalStyle`
  body,
  html {
    padding: 0;
    margin: 0;
    min-height: 100%;
  }

  body {
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    color: #222;
    background: #f0f0f0
  }

  *, *::before, *::after {
      box-sizing: border-box;
  }

  a:hover {
    text-decoration: none;
  }

  button {
    box-shadow: none;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  html {
    position: relative;
  }
  
  body.loading {
    position: static;

    &:before {
      content: '';
      height: 100px;
      left: 50%;
      background-size: 100% auto;
      background-position: center;
      background-repeat: no-repeat;
      margin-left: -50px;
      margin-top: -50px;
      position: absolute;
      top: 50%;
      width: 100px;
      display: block;
      z-index: 999999;
      pointer-events: none;
    }

    &:after {
      content: '';
      height: 100%;
      left: 0;
      pointer-events: none;
      top: 0;
      position: absolute;
      background: rgba(0, 0, 0, 0.5);
      width: 100%;
      display: block;
      z-index: 99999;
    }
  }
`;
