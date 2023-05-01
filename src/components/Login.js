import { useState, useRef } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleClick = () => {
    console.log(email, password);
    // handle login logic here
  };

  const handleEmailChange = () => {
    setEmail(emailRef.current.value);
  };

  const handlePasswordChange = () => {
    setPassword(passwordRef.current.value);
  };
  
  return (
    <div>
      <div className="container">
        <h1>LOGIN</h1>
        <div className="input-space">
          <input
            placeholder="Email"
            type="text"
            ref={emailRef}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-space">
          <input
            placeholder="Password"
            type="password"
            ref={passwordRef}
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
}

export default Login;


















// const Login = () => {
//     const[userName, setUserName] = useState('')
//     const[password, setPassword] = useState('')

//     const handleSubmit = () => {
//         e.preventDefault()

//         console.log(userName, password);
//     }

//     return (
//         <form className="signup" onSubmit={handleSubmit}>
//             <h3>Log in</h3>

//             <label>Enter User name:</label>
//             <input
//               type="text"
//               onChange={(e) => setUserName(e.target.value)}
//               value={userName}
//               name="firstName"
//             />

//                   <label>Password:</label>
//             <input
//               type="password"
//               onChange={(e) => setPassword(e.target.value)}
//               value="submit"
//             />
                
//             <button onSubmit={handleSubmit}>SUBMIT</button>
//         </form>
//     )
// };

// export default Login;