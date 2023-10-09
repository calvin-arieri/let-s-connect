import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignupAndUpdate/SignUp";
import FinalHomePage from "./pages/FinalHomePage";
import FindPartner from "./pages/FindPartner";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<FinalHomePage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="find_partner" element={<FindPartner />} > 
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
