import './App.css';
import SignUp from './components/SignUp';

function App() {

  function handleSignUp() {
  // Add your sign-up logic here
  console.log("User signed up successfully!");
}
  
  return (
    <div className="App">
   

   <SignUp handleSignUp={handleSignUp}/>
    </div>
  );
}

export default App;
