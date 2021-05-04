import React from "react";
//import IconButton from '@material-ui/core/IconButton';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./Header.css";
//////

import Logo from "../../Assets/pawprint1.png";
export default function ButtonAppBar({ menu }) {
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
