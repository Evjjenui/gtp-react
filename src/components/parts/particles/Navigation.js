import React from "react";
import { NavLink} from "react-router-dom";

const Navigation = () => {
  return ( 
    <ul className="nav">
      <li>
        <NavLink exact to='/'>Main</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to='/calculator'>Calculator</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to='/markdown'>Markdown</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to='/krestiki'>Krestiki</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to='/timer'>Timer</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to='/todo'>Todo</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to='/other'>Other</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to='/blog'>Blog</NavLink>
      </li>
    </ul>
   );
}
 
export default Navigation;
