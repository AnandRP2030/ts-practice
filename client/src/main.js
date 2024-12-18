"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
require("./index.css");
const App_tsx_1 = __importDefault(require("./App.tsx"));
const react_router_dom_1 = require("react-router-dom");
const todo_tsx_1 = __importDefault(require("./components/todo/todo.tsx"));
(0, client_1.createRoot)(document.getElementById("root")).render(<react_1.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<App_tsx_1.default />}/>
        <react_router_dom_1.Route path="/todo" element={<todo_tsx_1.default />}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>
  </react_1.StrictMode>);
