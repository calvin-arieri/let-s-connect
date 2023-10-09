import { NavLink } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <div>
      <nav className="navBar">
        <p>Let's Connect</p>
        <ul>
          <li>
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                fontSize: "larger",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "white")}
              onMouseOut={(e) => (e.target.style.color = "black")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="add_details"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                fontSize: "larger",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "white")}
              onMouseOut={(e) => (e.target.style.color = "black")}
            >
              Add your details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="find_partner"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                fontSize: "larger",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "white")}
              onMouseOut={(e) => (e.target.style.color = "black")}
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
