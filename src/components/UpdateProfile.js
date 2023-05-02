function UpdateProfile() {
  return (
    <div className="updateProfile">
      <div className="updatePhoto">
        <img src="//placehold.it/50" class="avatar img-circle" alt="avatar" />
        <h6>Upload a different photo...</h6>
        <input type="file" class="form-control"></input>
      </div>
      <div className="updateInfo">
        <form action="">
          <label for="fName">First Name</label>
          <input type="text" id="fName" name="fName" />
          <br />
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lname" />
          <br />
          <label for="email">Email</label>
          <input type="text" id="email" name="email" />
          <br />
          <label for="password">Enter Old Password</label>
          <input type="text" id="password" name="password" />
          <br />
          <label for="password">Enter New Password</label>
          <input type="text" id="password" name="password" />
          <br />
          <label for="location">New Location</label>
          <input type="text" id="location" name="location" />
          <br />
          <label for="interest">Interests</label>
          <input type="text" id="interest" name="interest" />
          <br />
          <label for="pGender">Prefered Gender</label>
          <select name="pGender" id="pGender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="both">Both</option>
          </select>
          <br />
          <label for="type">Relationship Type</label>
          <select name="type" id="type">
            <option value="longterm">Long Term</option>
            <option value="shortterm">Short Term</option>
            <option value="friendship">Friendship</option>
            <option value="fwb">Friends With Benefits</option>
            <option value="other">Other</option>
          </select>
          <br />
          <button>Save Changes</button>
          <button>Delete Profile</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
