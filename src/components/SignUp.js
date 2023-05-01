import  { useRef } from "react";
import  { useState } from "react";

function SignUp({ handleSignUp }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState('');
  const [location, setLocation] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [interest, setInterest] = useState('');
  

  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const photoRef = useRef('');
  const locationRef = useRef('');
  const dateOfBirthRef = useRef('');
  const genderRef = useRef('');
  const interestRef = useRef('');

  const handleClick = () => {
    handleSignUp();
    console.log(
      name,
      email,
      password,
      photo,
      location,
      dateOfBirth,
      gender,
      interest
    );
  };

  const handleNameChange = () => {
    setName(nameRef.current.value);
  };

  const handleEmailChange = () => {
    setEmail(emailRef.current.value);
  };

  const handlePasswordChange = () => {
    setPassword(passwordRef.current.value);
  };

  const handlePhotoChange = () => {
    setPhoto(photoRef.current.value);
  };

  const handleLocationChange = () => {
    setLocation(locationRef.current.value);
  };

  const handleDateOfBirthChange = () => {
    setDateOfBirth(dateOfBirthRef.current.value);
  };

  const handleGenderChange = () => {
    setGender(genderRef.current.value);
  };

  const handleInterestChange = () => {
    setInterest(interestRef.current.value);
  };
  
  const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
};

const myData = [
  {
    "fName": "calvin",
    "lname": "Arieri",
    "d.O.B": "02-05-2004",
    "location": "Nairobi",
    "interest": "Gaming",
    "minAge": 18,
    "maxAge": 25,
    "photo": "",
    "userName": "calvin_arieri",
    "gender": "male",
    "pGender": "female",
    "type": "Long-term",
    "email": "morebucalvin@gmail",
    "password": "************",
    "id": 1
  }
];

postData('http://localhost:3000/profiles', myData)
  .then(data => {
    console.log(data); // JSON data returned from server
  })
  .catch(error => {
    console.error(error);
  });

 return (
    <div>
      <div className="container">
            <h1>SIGN UP</h1>

        <div className="input-space">
          <input
            placeholder="First Name"
            type="text"
            ref={nameRef}
            onChange={handleNameChange}
          />
        </div>
        <div className="input-space">
          <input
            placeholder="Last Name"
            type="text"
            ref={nameRef}
            onChange={handleNameChange}
          />
        </div>
        <div className="input-space">
          <input
            placeholder="Email"
            type="text"
            ref={emailRef}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-space">
          <input
            placeholder="Password"
            type="password"
            ref={passwordRef}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="input-space">
          <input
            placeholder="Photo"
            type="text"
            ref={photoRef}
            onChange={handlePhotoChange}
          />
        </div>
        <div className="input-space">
          <input
            placeholder="Location"
            type="text"
            ref={locationRef}
            onChange={handleLocationChange}
          />
        </div>
        <div className="input-space">
          <input
            placeholder="Date of Birth"
            type="text"
            ref={dateOfBirthRef}
            onChange={handleDateOfBirthChange}
          />
        </div>
        <div className="input-space">
          <select ref={genderRef} onChange={handleGenderChange}>
            <option value="">Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
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
        <button onClick={handleClick}>Sign Up</button>
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

