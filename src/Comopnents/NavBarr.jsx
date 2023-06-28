import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function NavBarr({ imagen }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{background: "rgba(17, 82, 20)"}}
    >
      <div className="container-fluid">
        <button className="navbar-brand" type="button">
          <img
            src={imagen}
            style={{ width: "70px", height: "50px" }}
            alt="Logo"
          />
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="./index.html"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Capacitaciones
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="./tierra.html">
                    Tierra
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./productos.html">
                    Productos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./fertilizantes.html">
                    Fertilizantes
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBarr;
