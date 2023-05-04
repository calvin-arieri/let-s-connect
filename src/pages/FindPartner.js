import ProfilesDisplay from "../displayProfiles";
import Suggestion from '../components/Suggestion'
import { useState,useEffect} from "react";
import Post from "../components/Posts";
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
                    <a href="#post">Posts</a>
                    <a href="#update_profile">Change preference</a>
                    <a href="">Post</a>
                </nav>
            </div>
            <Suggestion maximum_age={current_userDetail.maxAge} minimum_age={current_userDetail.minAge} location={current_userDetail.location} preferred_gender={current_userDetail.pGender} interest={current_userDetail.interest} type_relationship={current_userDetail.type}/> 
            <ProfilesDisplay />
            <Post />
            <UpdateProfile firstName={current_userDetail.fName} lastName={current_userDetail.lname} picture={current_userDetail.photo} id={current_userDetail.id}/>

        </div>
    )
}

export default FindPartner;