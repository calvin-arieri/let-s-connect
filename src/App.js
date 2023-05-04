import "./App.css";
import UpdateProfile from "./components/UpdateProfile";
//import ProfilesDisplay from "./components/displayProfiles";

function App() {
  //   function handleSignUp() {
  //   // Add your sign-up logic here
  //   console.log("User signed up successfully!");
  // }

  return (
    <div className="App">
      <UpdateProfile />
      {/* <ProfilesDisplay /> */}
      {/* <Suggestion
        maximum_age={30}
        minimum_age={18}
        location="NAIROBI"
        preferred_gender={"female"}
        interest={"PARTYING"}
        type_relationship={"long-term"}
      /> */}
    </div>
  );
}

export default App;
