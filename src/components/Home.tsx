import { NavLink, Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { useRef, useState } from "react";

export const Home = () => {
  // styleを定義した変数に対する型宣言
  const activeStyle: React.CSSProperties = {
    color: "red",
    fontWeight: "bold",
    backgroundColor: "blue"
  };

  const createWindow = () => {
    window.open(
      "https://38p14.csb.app/users/5",
      "",
      "width=600,height=400,left=200,top=200"
    );
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
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
        {/* Routeタグのpathに対応しないLinkタグ */}
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
        <li>
          <Link to="/sns">SNS</Link>
        </li>
        <li>
          <Link to="/blog">BLOG</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/user/yamada">Yamada</Link>
        </li>
        <li>
          <Link to="/user/tanaka">Tanaka</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/rediretedhome">rediretedhome</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">Top</Link>
        </li>
        <li>
          <Link to="/users/1">ユーザ1</Link>
        </li>
        <li>
          <Link to="/users/2">ユーザ2</Link>
        </li>
        <li>
          <Link to="/users/3">ユーザ3</Link>
        </li>
        <li>
          <Link to="/users/4">ユーザ4</Link>
        </li>
        <li>
          <Link to="/users/5">ユーザ5</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/formusers">Form</Link>
        </li>
      </ul>
      <input type="button" value="aaa" onClick={() => createWindow()} />
    </nav>
  );
};
