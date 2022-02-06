import "./styles.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";

import { User } from "./components2/User";
import { Yamada } from "./components2/Yamada";
import { Tanaka } from "./components2/Tanaka";
import { Default } from "./components2/Default";

import { HomeRedirected } from "./components3/HomeRedirected";
import { Redirected } from "./components3/Redirected";

import { Users } from "./componentPathId/Users";
import { Form } from "./componentForm/Form";
import { SearchResult } from "./componentForm/SearchResult";

export default function App() {
  // styleを定義した変数に対する型宣言
  const activeStyle: React.CSSProperties = {
    color: "red",
    fontWeight: "bold",
    backgroundColor: "blue"
  };

  return (
    <>
      <li>
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : {})}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "activated" : "")}
        >
          Contact
        </NavLink>
      </li>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />}>
          <Route index element={<Default />} />
          <Route path="yamada" element={<Yamada />} />
          <Route path="tanaka" element={<Tanaka />} />
        </Route>
        <Route path="/rediretedhome" element={<HomeRedirected />} />
        <Route path="/redirected" element={<Redirected />} />

        <Route path="/users/:id" element={<Users />} />

        <Route path="/formusers" element={<Form />} />
        {/* クエリパラメーターを使うので、ワイルドカードを使う */}
        <Route path="/formresult/*" element={<SearchResult />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
