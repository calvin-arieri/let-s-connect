import './App.css';
import Create from './components/SignUp';

function App() {
  //   function handleSignUp() {
  //   // Add your sign-up logic here
  //   console.log("User signed up successfully!");
  // }

//   function handleSignUp() {
//   // Add your sign-up logic here
//   console.log("User signed up successfully!");
// }
  
  return (
    <div className="App">
   <Create />
   {/* <SignUp handleSignUp={handleSignUp}/> */}
    </div>
  );
}

export default App;
