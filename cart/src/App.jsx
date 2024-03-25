import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Cart from "./cart";
import { StoreProvider } from "store/store";


const App = () => (
  <StoreProvider>
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: cart</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Cart />
  </div>
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
