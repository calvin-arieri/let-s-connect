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

  const handleInterestChange = (event) => {
    const { interest, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [interest]: value }));
  };

  const handleUserNameChange = (event) => {
    setFormState((prevState) => ({ ...prevState, userName: userNameRef.current.value }));
  };

  const handleTypeChange = (event) => {
    const { type, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [type]: value }));
  };

  const handleSubmit = (event) => {
  event.preventDefault();

  // Check if user already exists
  fetch("https://lets-connect-bryn.onrender.com/profiles")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const existingUser = data.profiles.find (
        (profile) =>
          profile.email === formState.email || profile.userName === formState.userName
      ); 
      if (existingUser) {
        alert("The user's account already exists");
        return;
      };

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
      };

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
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
};
//       const handleClick = (event) => {
//   event.preventDefault();
//   // Perform additional action here
// };

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
              placeholder="Password"
              type="password"
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
        {/* <div>
                  <label for="dob">Date of Birth:</label>
  <input type="date" id="dob" name="dob" max="2005-05-02" min="1953-05-02" required />
  
</div>
<div>
  <label for="min_age">Minimum Age:</label>
  <input type="number" id="min_age" name="min_age" min="18" max="70" required />
  </div>
<div>
  <label for="max_age">Maximum Age:</label>
  <input type="number" id="max_age" name="max_age" min="18" max="70" required />
  </div> */}
        
         <div className="input-space1">
            <select name="type" value={formState.type} onChange={handleChange}>
              <option value="">Choose relationship type:</option>
            <option value="long-term">long-term</option>
            <option value="short-term">short-term</option>
          </select>
        </div>
        
        {/* <button onClick={handleSubmit}><span>SignUp</span></button> */}
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

// import React from "react";
// import { useState } from "react";

// const SignUp = () => {
//     const[email, setEmail] = useState('')
//     const[password, setPassword] = useState('')

//     const handleSubmit = () => {
  
//         e.preventDefault()

//         console.log(email, password);
//     };

//     return (
//         <form className="signup" onSubmit={handleSubmit}>
//             <h3>sign up</h3>

//             <label>Enter Email:</label>
//             <input
//               type="text"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               name="email"
//             />

//                   <label>Password:</label>
//             <input
//               type="password"
//               onChange={(e) => setPassword(e.target.value)}
//               value="submit"
//             />
//                   {/* <p>Kindly Select your favourite sports</p>   */}
//       {/* <input type="checkbox" name="interests1" value="Football"/>I like playing Football  
//       <input type="checkbox" name="interests2" value="Music"/>I am a Music Lover
//       <input type="checkbox" name="interests3" value="Walking"/>I love Walking  
//       <input type="checkbox" name="interests4" value="Movies"/>I watch movies alot  
//       <input type="checkbox" name="interests5" value="Eating"/>I like eating
//       <input type="submit" value="submit">   */}
//             <button onSubmit={handleSubmit}>SUBMIT</button>
//         </form>
//     )
// };

 


// export default SignUp;

