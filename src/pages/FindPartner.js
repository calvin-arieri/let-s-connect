import ProfilesDisplay from "../displayProfiles";
import Suggestion from '../components/Suggestion'
import { useState,useEffect} from "react";
import Post from "../components/Posts";
import UpdateProfile from "../components/UpdateProfile";

function FindPartner() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
      fetch("https://lets-connect-bryn.onrender.com/profiles")
        .then((res) => res.json())
        .then((data) => setProfiles(data))
        .catch((err) => console.log(err));
    }, []);

    return(
        <div>
            <div className="user">
                <nav>
                    <label>Enter user Name</label>
                    <input type="text" />
                    <a href="#suggestion">Suggestion</a>
                    <a href="#other_profiles">Other profiles</a>
                    <a href="#post">Posts</a>
                    <a href="#update_profile">Change preference</a>
                    <a href="">Post</a>
                </nav>
            </div>
            <Suggestion maximum_age={30} minimum_age={18} location="NAIROBI" preferred_gender={"female"} interest={"PARTYING"} type_relationship={"long-term"}/> 
            <ProfilesDisplay />
            <Post />
            <UpdateProfile />

        </div>
    )
}

export default FindPartner;