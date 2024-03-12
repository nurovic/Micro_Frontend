import "./index.css";
import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import 'tailwindcss/tailwind.css'
const Card = React.lazy(() => import("cart/Cart")) 
const App = () => (
  <div>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: product</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div className="w-64 h-72 bg-blue-200">CSS: Tailwind</div>
      <Suspense
      fallback={<div>Loading....</div>}
      >

      <Card />
        </Suspense>
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
