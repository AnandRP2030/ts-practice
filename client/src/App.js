"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
function App() {
    const [count, setCount] = (0, react_1.useState)(0);
    return (<>
      <react_router_dom_1.Link to="/todo">
        <button>Todo App </button>
      </react_router_dom_1.Link>
    </>);
}
exports.default = App;
