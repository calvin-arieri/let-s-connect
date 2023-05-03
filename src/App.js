import { useState } from 'react';
import './App.css';
// import Create from './components/SignUp';
// import ProfilesData from './components/Suggestions';
import SignUp from './components/SignUp';
import ProfilesData from './components/Suggestions';
// import FilterProfiles from "./FilterProfiles";

function App() {
  // const[profiles, setProfiles] = useState([]);
  // const[userName, setUserName] = useState([]);
//   function handleSignUp() {
//     const newProfile = profiles.filter(profile => profile.userName !== userName);
// setProfiles(newProfile);
//   // Add your sign-up logic here
//   console.log("User signed up successfully!");
// }
  
  return (
    <div className="App">


   <SignUp />
    </div>
  );
}

export default App;
