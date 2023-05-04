import { useEffect, useState } from "react";

function ProfilesDisplay() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("https://lets-connect-bryn.onrender.com/profiles")
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="other_profiles">
      <div className="top">
      <img style={{ maxHeight: '100px', maxWidth: '100px' }} src="https://rb.gy/8oavh" />{" "}
      <h1>Here are the other profiles using the app</h1>
      </div>
      
      <div className="profileCard">
        {profiles.map((profile) => (
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

export default ProfilesDisplay;
