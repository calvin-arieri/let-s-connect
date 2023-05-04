import ProfilesDisplay from "../displayProfiles";
import Suggestion from '../components/Suggestion'
import { useState,useEffect} from "react";
import UpdateProfile from "../components/UpdateProfile";

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
        if(profile.userName === pass_searchName){
            return(profile)
        }
    })
    
    return(
        <div>
            <div className="user">
                <nav>
                    <label>Enter user Name</label>
                    <input type="text" onChange={(event)=>{setSearch_userName(event.target.value)}}/>
                    <button onClick={receive_userName}>submit username</button>
                    <a href="#suggestion">Suggestion</a>
                    <a href="#other_profiles">Other profiles</a>                   
                    <a href="#update_profile">Change preference</a>
                    
                </nav>
            </div>
            {current_userDetail.map(profile_1 => {
                return(
                    <div key={profile_1.id}>
                <Suggestion maximum_age={profile_1.maxAge} minimum_age={profile_1.minAge} location={profile_1.location} preferred_gender={profile_1.pGender} interest={profile_1.interest} type_relationship={profile_1.type} current_user={profile_1.userName}/> 
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