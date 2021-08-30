import React from "react";
import { NavLink} from "react-router-dom";
import "boxicons";

const Navigation = () => {
  return ( 
    <nav>
      <div className="nav-btn">
        <box-icon
          color="hsl(28, 90%, 60%)"
          name='menu'>
        </box-icon>
      </div>
      <ul>
        <li>
          <NavLink
            exact to='/'>
            <box-icon
              color="hsl(28, 90%, 60%)"
              name='globe'>
            </box-icon>
            <span>Main</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to='/calculator'>
            <box-icon
              color="hsl(28, 90%, 60%)"
              name='calculator'
              type='solid'>
            </box-icon>
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
            <box-icon
              color="hsl(28, 90%, 60%)"
              name='border-all'>
            </box-icon>
            <span>Krestiki</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to='/timer'>
            <box-icon
              color="hsl(28, 90%, 60%)"
              name='timer'>
            </box-icon>
            <span>Timer</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to='/todo'>
            <box-icon
              color="hsl(28, 90%, 60%)"
              name='list-check'>
            </box-icon>
            <span>Todo</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to='/blog'>
             <box-icon
              color="hsl(28, 90%, 60%)"
              name='library'>
            </box-icon> 
            <span>Blog</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="active"
            to='/other'>
            <box-icon
              color="hsl(28, 90%, 60%)"
              name='dots-horizontal-rounded'>
            </box-icon>
            <span>Other</span>
          </NavLink>
        </li>
      </ul>
    </nav>
   );
}
 
export default Navigation;
