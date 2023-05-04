import { NavLink } from "react-router-dom";

function FindPartner() {
    return(
        <div>
            <div>
                Thank you for joining us
            </div>
            <nav>
                <NavLink to ='find_partner/with_id'>Non member</NavLink>
                <NavLink to = 'find_partner/no_id'>Member</NavLink>
            </nav>
        </div>
    )
}

export default FindPartner;