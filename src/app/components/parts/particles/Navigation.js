import React from "react";
import { NavLink} from "react-router-dom";

const ClickHandler = () => {
  document.querySelector('body').classList.toggle('nav-opened');
}

const Navigation = () => {
  return ( 
    <nav>
      <div
        className="nav-btn"
        onClick={(e) => ClickHandler()}>
        <i className="bx bx-menu"></i>  
      </div>
      <ul>
        <li>
          <NavLink
            exact to='/'>
            <i className="bx bx-globe"></i> 
            <span>Main</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to='/calculator'>
            <i className="bx bx-calculator"></i> 
            <span>Calculator</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            activeClassName="active"
            to='/markdown'>
            <span>Markdown</span>
          </NavLink>
        </li> */}
        <li>
          <NavLink
            activeClassName="active"
            to='/krestiki'>
            <i className="bx bx-border-all"></i> 
            <span>Krestiki</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to='/timer'>
            <i className="bx bx-timer"></i> 
            <span>Timer</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to='/todo'>
            <i className="bx bx-list-check"></i> 
            <span>Todo</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to='/blog'>
             <i className="bx bx-library"></i> 
            <span>Blog</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to='/task-planner'>
            <i className="bx bx-calendar"></i> 
            <span>Task planner</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to='/other'>
            <i className="bx bx-dots-horizontal-rounded"></i> 
            <span>Other</span>
          </NavLink>
        </li>
      </ul>
    </nav>
   );
}
 
export default Navigation;
