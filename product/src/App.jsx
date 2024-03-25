import "./index.scss";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
const Card = React.lazy(() => import("cart/Cart"));
import { StoreProvider, useStore } from "store/store";
import Tab from './Tab'
const App = () => (
  <StoreProvider>

  <div>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: product</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
    <Tab />
      <Suspense fallback={<div>Loading....</div>}>
        <Card />
      </Suspense>
    </div>
  </div>
  </StoreProvider>

);
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
