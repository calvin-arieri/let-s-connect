import ProfilesDisplay from "../components/profileDisplayComponents/displayProfiles";
import Suggestion from '../components/profileDisplayComponents/Suggestion'
import { useState,useEffect} from "react";
import UpdateProfile from "../components/SignupAndUpdate/UpdateProfile";

function FindPartner() {
    const [profiles, setProfiles] = useState([]);
    const [search_userName, setSearch_userName] = useState('All')
    const [pass_searchName, setpass_SearchName_] =useState('All')

    useEffect(() => {
      fetch("https://lets-connect-bryn.onrender.com/profiles")
        .then((res) => res.json())
        .then((data) => setProfiles(data))
        .catch((err) => console.log(err));
    }, []);

    function receive_userName() {
        setpass_SearchName_(search_userName)
    }
    // eslint-disable-next-line 
    const current_userDetail = profiles.filter(profile =>{
        if(profile.userName === "marto"){
            return(profile)
        }
    })
    
    return(
        <div>
            {current_userDetail.map(profile_1 => {
                return(
                    <div key={profile_1.id}>
                <Suggestion maximum_age={profile_1.maxAge} minimum_age={profile_1.minAge} location={profile_1.location} preferred_gender={profile_1.pGender} interest={profile_1.interest} type_relationship={profile_1.type} /> 
                <ProfilesDisplay current_user2={profile_1.userName}/>
                <h2 style={{fontSize:"60px"} } >Your Profile</h2>
                <UpdateProfile firstName={profile_1.fName} lastName={profile_1.lname} picture={profile_1.photo} id={profile_1.id}/>
                </div>
                )
            }
            )
            }
        </div>
    )
}

export default FindPartner;