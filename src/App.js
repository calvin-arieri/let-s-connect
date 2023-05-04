import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import NavBar from "./pages/NavBar";
import FinalHomePage from "./pages/FinalHomePage";
import SignUp from "./components/SignUp";
import FindPartner from "./pages/FindPartner";
// import SignUp  from "./components/SignUp";
// import FilterProfile from "./components/FilterProfiles";
import HomePage from "./components/HomePage";
import Posts from "./components/Posts";
import ProfilesDisplay from "./displayProfiles";
import UpdateProfile from "./components/UpdateProfile";


function App() {
  return( <div className="App">
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<FinalHomePage />} /> 
          <Route path='add_details' element={<SignUp />} />
          <Route path='find_partner' element={<FindPartner />} >
            <Route exact path='with_id/' element={<UpdateProfile />} />
            <Route path= 'no_id'  element={<ProfilesDisplay />} />
          </Route>  
        </Routes>
    </main>
   </BrowserRouter>   
    {/* <Suggestion maximum_age={30} minimum_age={18} location="NAIROBI" preferred_gender={"female"} interest={"PARTYING"} type_relationship={"long-term"}/>     */}
  </div>);
}

export default App;
