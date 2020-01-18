import React from "react";
import { NavLink } from "react-router-dom";
const SignedOutLinks = () => {
  return (
    <ul className="right">
       <li>
        <NavLink to="/">
          Information
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <i class="material-icons">notifications_active</i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <i class="material-icons">local_post_office</i>
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
