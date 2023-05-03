import "./App.css";
<<<<<<< HEAD
=======
import Suggestion from "./components/Suggestion";
//import ProfilesDisplay from "./components/displayProfiles";



>>>>>>> 4c6bf3eb5b0a0a5425dcba3f195dde41c6fc7638

function App() {
  //   function handleSignUp() {
  //   // Add your sign-up logic here
  //   console.log("User signed up successfully!");
  // }

<<<<<<< HEAD
  return (
    <div className="App">
      {

      
    </div>
  );
=======

  return <div className="App">
    {/* <ProfilesDisplay /> */}
    <Suggestion maximum_age={30} minimum_age={18} location="NAIROBI" preferred_gender={"female"} interest={"PARTYING"} type_relationship={"long-term"}/>    
  </div>;
>>>>>>> 4c6bf3eb5b0a0a5425dcba3f195dde41c6fc7638
}

export default App;
