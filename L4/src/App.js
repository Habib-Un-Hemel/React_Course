import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import {createBrowserRouter} from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";


const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
