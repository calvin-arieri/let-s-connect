import React, { useState } from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css';

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = () => {
    setIsSignedUp(true);
    alert('Account available!');
  };

  return (
    <div className="App">
      {isSignedUp ? (
        <Login />
      ) : (
        <SignUp handleSignUp={handleSignUp} />
      )}
    </div>
  );
}

export default App;