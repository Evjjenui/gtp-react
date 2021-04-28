import React from "react";
import { Link} from "react-router-dom";

const Navigation = () => {
  return ( 
    <ul className="nav">
      <li>
        <Link to='/'>Main</Link>
      </li>
      <li>
        <Link to='/calculator'>Calculator</Link>
      </li>
      <li>
        <Link to='/markdown'>Markdown</Link>
      </li>
      <li>
        <Link to='/krestiki'>Krestiki</Link>
      </li>
      <li>
        <Link to='/timer'>Timer</Link>
      </li>
      <li>
        <Link to='/todo'>Todo</Link>
      </li>
      <li>
        <Link to='/other'>Other</Link>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
    </ul>
   );
}
 
export default Navigation;
