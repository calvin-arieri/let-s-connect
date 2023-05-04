import react from "react"
import { useState, useEffect } from "react";


function Suggestion({maximum_age, minimum_age, location, preferred_gender, interest, type_relationship,}) {
    const [profiles, setProfiles] = useState([]);
    //console.log(typeof minimum_age)
    useEffect(() => {
      fetch("https://lets-connect-bryn.onrender.com/profiles")
        .then((res) => res.json())
        .then((data) => setProfiles(data))
        .catch((err) => console.log(err));
    }, []);

    const SuggestedProfiles = profiles.filter((profile_filter) => {
//console.log(typeof Number(profile_filter.age))
        if(minimum_age>=Number(profile_filter.age) , maximum_age<= Number(profile_filter.age) , location === profile_filter.location && preferred_gender === profile_filter.pGender && interest === profile_filter.interest && type_relationship === profile_filter.type){
            return(profile_filter)
        }        
    })

    return (
        <div id="suggestion">
          <div className="top">
          <img style={{ maxHeight: '100px', maxWidth: '100px' }} src="https://rb.gy/8oavh" />{" "}
          <h1>These are your matches</h1>
          </div>
          
          <div className="profileCard">
            {SuggestedProfiles.map((profile) => (
              <div key={profile.id} className="card" >
                
                <img src={profile.photo} alt={profile.fName} />
               
                <div className="card-content">
                <h3>{profile.fName}</h3>
                  <p>Location: {profile.location}</p>
                  <p>Age: {profile.age}</p>
                  <p>Gender: {profile.gender}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Suggestion;