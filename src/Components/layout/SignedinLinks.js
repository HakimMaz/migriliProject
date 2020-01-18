import React from "react";
import { NavLink } from "react-router-dom";
const SignedinLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/" className="btn-floating  grey ligthen -1">
          <i class="material-icons">person</i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <i class="material-icons">exit_to_app</i>
          Log Out
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedinLinks;
