import React from "react";
//import IconButton from '@material-ui/core/IconButton';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./Nav.css";
//////

import Logo from "../assets/logo.svg";
export default function ButtonAppBar({ menu }) {
  if (menu === undefined) {
    menu = [
      {
        text: "Inicio",
        url: "/diego",
        active: false,
      },
      {
        text: "Registro",
        url: "/diego",
        active: false,
      },
      {
        text: "Adoptar",
        url: "/diego",
        active: true,
      },
      {
        text: "Apadrinar",
        url: "/diego",
        active: false,
      },
      {
        text: "Reportar",
        url: "/diego",
        active: false,
      },
      {
        text: "Perdida",
        url: "/diego",
        active: false,
      },
      {
        text: "Login",
        url: "/diego",
        active: false,
      },
    ];
  }
  return (
    <div className={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="o-nav-adopt">
          <img src={Logo} alt="logo" />
          <div className="o-options">
            {menu.map((ele, i) => (
              <a
                className={ele.active ? "o-active-menu" : ""}
                key={i}
                href={ele.url}
              >
                {ele.text}
              </a>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
