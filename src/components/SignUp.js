import { useState, useRef } from "react";

function SignUp({ handleSignUp }) {
  const [formState, setFormState] = useState({
    fname: "",
    lname: "",
    dateOfBirth: "",
    location: "",
    interest: "",
    photo: "",
    userName: "",
    gender: "",
    type: "",
    email: "",
    password: "",
  });

  const interestRef = useRef();
  const userNameRef = useRef();
  const typeRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleInterestChange = (event) => {
    setFormState((prevState) => ({ ...prevState, interest: interestRef.current.value }));
  };

  const handleUserNameChange = (event) => {
    setFormState((prevState) => ({ ...prevState, userName: userNameRef.current.value }));
  };

  const handleTypeChange = (event) => {
    setFormState((prevState) => ({ ...prevState, type: typeRef.current.value }));
  };

  const handleSubmit = (event) => {
  event.preventDefault();

  // Check if user already exists
  fetch("http://localhost:3000/profiles")
    .then((response) => response.json())
    .then((data) => {
      const existingUser = data.profiles.find(
        (profile) =>
          profile.email === formState.email || profile.userName === formState.userName
      );
      if (existingUser) {
        alert("The user's account already exists");
        return;
      }

      // Add new profile
      const newProfile = {
        fName: formState.fname,
        lname: formState.lname,
        "d.O.B": formState.dateOfBirth,
        location: formState.location,
        interest: formState.interest,
        photo: formState.photo,
        userName: formState.userName,
        gender: formState.gender,
        type: formState.type,
        email: formState.email,
        password: formState.password,
      };

      fetch("http://localhost:3000/profiles", {
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
      const handleClick = (event) => {
  event.preventDefault();
  // Perform additional action here
};

  return (
    <div>
      <div className="container">
        <h1>SIGN UP</h1>

        <form onSubmit={handleSubmit}>
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
          <div className="input-space">
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
          <div className="input-space">
            <input
              placeholder="Location"
              type="text"
              name="location"
              value={formState.location}
              onChange={handleChange}
            />
          </div>
          <div className="input-space">
            <input
              placeholder="Date of Birth"
              type="text"
              name="dateOfBirth"
              value={formState.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className="input-space">
            <select name="gender" value={formState.gender} onChange={handleChange}>
              <option value="">Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
          <div className="input-space">
            <select name="  Prefgender" value={formState.Prefgender} onChange={handleChange}>
              <option value="">Choose Gender Preference</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
              <option value="both">both</option>
          </select>
        </div>
        <div className="input-space">
          <input
            placeholder="Interest"
            type="text"
            ref={interestRef}
            onChange={handleInterestChange}
          />
        </div>
        <div className="input-space">
          <input
            placeholder="Username"
            type="text"
            ref={userNameRef}
            onChange={handleUserNameChange}
          />
        </div>
        <div className="input-space">
          <input
            placeholder="Type"
            type="text"
            ref={typeRef}
            onChange={handleTypeChange}
          />
        </div>
        
        <button onClick={handleClick}>Sign Up</button>
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

