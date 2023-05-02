import './App.css';
import PostForm from './components/PostForm';
//import HomePage from './components/HomePage';
//import SignUp from './components/SignUp';
import Post from './components/Posts';

function App() {

//   function handleSignUp() {
//   // Add your sign-up logic here
//   console.log("User signed up successfully!");
// }
  
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Post /> 
      <PostForm />  
   {/* <SignUp handleSignUp={handleSignUp}/> */}
    </div>
  );
}

export default App;
