const SignUp = () => {
    const[userName, setUserName] = useState('')
    // const[password, setPassword] = useState('')

    // const handleSubmit = () => {
    //     e.preventDefault()

    //     console.log(userName, password);
    // }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>sign up</h3>

            <label>UserName:</label>
            <input
              type="userName"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />

                  <label>Password:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button onSubmit={handleSubmit}></button>
        </form>
    )
};



