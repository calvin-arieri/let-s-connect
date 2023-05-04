import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div>
            <nav className="NAV1">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='add_details'>Add your details</NavLink>
                <NavLink to='find_patner'>Find A partner?</NavLink>
            </nav>

        </div>
    )
}

export default NavBar;