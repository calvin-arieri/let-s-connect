import "./App.css";
import Suggestion from "./components/Suggestion";
import SignUp  from "./components/SignUp";
import FilterProfile from "./components/FilterProfiles";
import HomePage from "./components/HomePage";
import Posts from "./components/Posts";
//import ProfilesDisplay from "./components/displayProfiles";




function App() {
  //   function handleSignUp() {
  //   // Add your sign-up logic here
  //   console.log("User signed up successfully!");
  // }


  return <div className="App">
    {/* <ProfilesDisplay /> */}
    <FilterProfile />
    <HomePage />
    <Posts />
    <Suggestion />
    <SignUp />
    {/* <Suggestion maximum_age={30} minimum_age={18} location="NAIROBI" preferred_gender={"female"} interest={"PARTYING"} type_relationship={"long-term"}/>     */}
  </div>;
}

export default App;
