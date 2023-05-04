import { useEffect, useState } from "react";
import "./updateProfile.css";
function UpdateProfile() {
  const [profiles, setProfiles] = useState([]);
  const [fName, setFName] = useState(profiles.fName);
  const [lname, setLName] = useState(profiles.lname);
  const [email, setEmail] = useState(profiles.email);
  const [password, setPassword] = useState(profiles.password);
  const [location, setLocation] = useState(profiles.location);
  const [interest, setInterest] = useState(profiles.interest);
  const [pGender, setPGender] = useState(profiles.pGender);
  const [type, setType] = useState(profiles.type);
  const [photo, setPhoto] = useState(profiles.photo);

  useEffect(() => {
    fetch("https://lets-connect-bryn.onrender.com/profiles/1")
      .then((r) => r.json())
      .then((profile) => setProfiles(profile));
  }, []);

  console.log(profiles);

  function updating(e, id) {
    e.preventDefault();
    const updateProfile = {
      fName: fName,
      lname: lname,
      email: email,
      password: password,
      location: location,
      interest: interest,
      pGender: pGender,
      type: type,
      photo: photo,
    };

    console.log(updateProfile);

    fetch(`https://lets-connect-bryn.onrender.com/profiles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProfile),
    })
      .then((res) => res.json())
      .then((profiles) => setProfiles(profiles));
  }

  return (
    <div className="updateProfile">
      {/* <div className="updatePhoto">
        <img src="//placehold.it/100" className="avatar img-circle" alt="avatar" />
        <h6>Upload a different photo...</h6>
        <input type="file" className="form-control"></input>
        <br />
        <button>Update Image</button>
      </div> */}

      <div className="updateInfo">
        {/* <img src="//placehold.it/100" className="avatar img-circle" alt="avatar" />
        <input type="file" className="form-control"></input> */}
        <form>
          <label for="photo">Image Link</label>
          <br />
          <input type="text" id="photo" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} />
          <br />
          <label for="fName">First Name</label>
          <br />
          <input type="text" id="fName" name="fName" value={fName} onChange={(e) => setFName(e.target.value)} />
          <br />
          <label for="lname">Last Name</label>
          <br />
          <input type="text" id="lname" name="lname" value={lname} onChange={(e) => setLName(e.target.value)} />
          <br />
          <label for="email">Email</label>
          <br />
          <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label for="password">Enter Old Password</label>
          <br />
          <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <label for="password">Enter New Password</label>
          <br />
          <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <label for="location">New Location</label>
          <br />
          <select name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="nairobi">NAIROBI</option>
            <option value="mombasa">MOMBASA</option>
            <option value="kisumu">KISUMU</option>
            <option value="eldoret">ELDORET</option>
          </select>
          <br />
          <label for="interest">Interests</label>
          <br />
          <select name="interest" id="interest" value={interest} onChange={(e) => setInterest(e.target.value)}>
            <option value="sports">SPORTS</option>
            <option value="cooking">COOKING</option>
            <option value="reading">READING</option>
            <option value="movies">MOVIES</option>
            <option value="gaming">GAMING</option>
            <option value="parting">PARTING</option>
          </select>
          <br />
          <label for="pGender">Prefered Gender</label>
          <br />
          <select name="pGender" id="pGender" value={pGender} onChange={(e) => setPGender(e.target.value)}>
            <option value="male">MALE</option>
            <option value="female">FEMALE</option>
            <option value="both">BOTH</option>
          </select>
          <br />
          <label for="type">Relationship Type</label>
          <br />
          <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="longterm">LONG-TERM</option>
            <option value="shortterm">SHORT-TERM</option>
            <option value="friendship">FRIENDSHIP</option>
          </select>
          <br />
          <button onClick={(e) => updating(e, 1)}>Save Changes</button>
          <br />
          <button>Delete Profile</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
