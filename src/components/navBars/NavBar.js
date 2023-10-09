import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div>
      <nav className="navBar">
        <p>Let's Connect</p>
        <ul>
          <li>
            <NavLink   to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="add_details"
            >
              Add your details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="find_partner"
            >
              Find A partner
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
