import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";
import { Link } from "react-router-dom";
import cerveza from "../../images/cerveza.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/">
            <img src={cerveza} width="70px"></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="Home">
                <Link
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    textDecoration: "none",
                    padding: "1rem",
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="Cerveza">
                <NavLink
                  style={{
                    color: "#808080",
                    textDecoration: "none",
                    padding: "1rem",
                  }}
                  to="/category/cervezas"
                >
                  Cervezas
                </NavLink>
              </li>
              <li className="Destilado">
                <NavLink
                  style={{
                    color: "#808080",
                    textDecoration: "none",
                    padding: "1rem",
                  }}
                  to="/category/destilados"
                >
                  Destilados
                </NavLink>
              </li>
              <li className="Vino">
                <NavLink
                  style={{
                    color: "#808080",
                    textDecoration: "none",
                    padding: "1rem",
                  }}
                  to="/category/vinos"
                >
                  Vinos
                </NavLink>
              </li>
            </ul>
            <NavLink to="/cart" className={"carrito"}>
              <CartWidget />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
