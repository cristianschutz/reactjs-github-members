import React from "react";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
