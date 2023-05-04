import { useState, useRef } from "react";
import "./SignUp.css"

function SignUp() {
  const [formState, setFormState] = useState({
    fname: "",
    lname: "",
    age: "",
    location: "",
    interest: "",
    photo: "",
    userName: "",
    gender: "",
    type: "",
    email: "",
    password: "",
  });

  // const interestRef = useRef();
  const userNameRef = useRef();
  // const typeRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleUserNameChange = (event) => {
    setFormState((prevState) => ({ ...prevState, userName: userNameRef.current.value }));
  };


  const handleSubmit = (event) => {
  event.preventDefault();
      // Add new profile
      const newProfile = {
        fName: formState.fname,
        lname: formState.lname,
        age: formState.age,
        location: formState.location,
        interest: formState.interest,
        photo: formState.photo,
        userName: formState.userName,
        gender: formState.gender,
        type: formState.type,
        email: formState.email,
        password: formState.password,
      }

      fetch("https://lets-connect-bryn.onrender.com/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProfile),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // JSON data returned from server
        })
    };


  return (
    <div>
      <div className="container">
        <h3>LET'S CONNECT SIGN UP FORM</h3>

        <form className="FORM1">
          <div className="input-space">
            <input
              placeholder="First Name"
              type="text"
              name="fname"
              value={formState.fname}
              onChange={handleChange}
            />
          </div>
          <div className="input-space">
            <input
              placeholder="Last Name"
              type="text"
              name="lname"
              value={formState.lname}
              onChange={handleChange}
            />
          </div>
          <div className="input-space">
            <input
              placeholder="Email"
              type="text"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-space2">
            <input
              placeholder="social media link"
              type="text"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <div className="input-space">
            <input
              placeholder="Photo"
              type="text"
              name="photo"
              value={formState.photo}
              onChange={handleChange}
            />
          </div>
          <div className="input-space1">
            <select name="location" value={formState.location} onChange={handleChange}>
              <option value="">Select location;</option>
            <option value="NAIROBI">NAIROBI</option>
            <option value="KISUMU">KISUMU</option>
            <option value="ELDORET">ELDORET</option>
            <option value="MOMBASA">MOMBASA</option>
          </select>
        </div>
          <div className="input-space">
            <input
              placeholder="Age"
              type="text"
              name="age"
              value={formState.age}
              onChange={handleChange}
            />
          </div>
          <div className="input-space1">
            <select name="gender" value={formState.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
          <div className="input-space1">
            <select name="Prefgender" value={formState.Prefgender} onChange={handleChange}>
              <option value="">Select Gender Preference</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
              <option value="both">Both</option>
          </select>
        </div>
        <div className="input-space1">
          <select name="interest" value={formState.interest} onChange={handleChange}>
            <option value="" className="SELECT">Select Interest</option>
            <option value="SPORTS">SPORTS</option>
            <option value="COOKING">COOKING</option>
            <option value="READING">READING</option>
            <option value="MOVIES">MOVIES</option>
            <option value="GAMING">GAMING</option>
            <option value="PARTYING">PARTYING</option>
          </select>
        </div>
        <div className="input-space">
          <input
            placeholder="Username"
            type="text"
            ref={userNameRef}
            onChange={handleUserNameChange}
          />
        </div>
        
         <div className="input-space1">
            <select name="type" value={formState.type} onChange={handleChange}>
              <option value="">Choose relationship type:</option>
            <option value="long-term">long-term</option>
            <option value="short-term">short-term</option>
          </select>
        </div>
        

         <button className="button1" onClick={handleSubmit}>
      <span>Sign Up</span>
      <span className="button__border"></span>
      <span className="button__background"></span>
    </button>
        </form>


      </div>
      
    </div>
    
  );
  
}

export default SignUp;



