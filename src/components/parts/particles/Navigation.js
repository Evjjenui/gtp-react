import React from "react";
import { NavLink} from "react-router-dom";

const Navigation = () => {
  return ( 
    <ul className="nav">
      <li>
        <NavLink activeClassName="active" exact to='/'>Main</NavLink>
      </li>
      <li>
        <NavLink to='/calculator'>Calculator</NavLink>
      </li>
      <li>
        <NavLink to='/markdown'>Markdown</NavLink>
      </li>
      <li>
        <NavLink to='/krestiki'>Krestiki</NavLink>
      </li>
      <li>
        <NavLink to='/timer'>Timer</NavLink>
      </li>
      <li>
        <NavLink to='/todo'>Todo</NavLink>
      </li>
      <li>
        <NavLink to='/other'>Other</NavLink>
      </li>
      <li>
        <NavLink to='/blog'>Blog</NavLink>
      </li>
      <li>
        <NavLink to='/task-planner'>Task planner</NavLink>
      </li>
    </ul>
   );
}
 
export default Navigation;
