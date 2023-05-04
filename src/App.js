import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp";
import FinalHomePage from "./pages/FinalHomePage";
import FindPartner from "./pages/FindPartner";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<FinalHomePage />} />
            <Route path="add_details" element={<SignUp />} />
            <Route path="find_partner" element={<FindPartner />} />
          </Routes>
        </main>
      </BrowserRouter>
      {/* <Suggestion maximum_age={30} minimum_age={18} location="NAIROBI" preferred_gender={"female"} interest={"PARTYING"} type_relationship={"long-term"}/>     */}
    </div>
  );
}

export default App;
