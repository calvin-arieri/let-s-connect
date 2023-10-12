import "./SignUp.css";

function SignUp() {

  return (
    <div>
      <div className="container">
        <h2>Welcome, hope you find a partner soon</h2>
        <form className="form1">
          <label for="fname">First Name</label>
          <input placeholder="First Name" type="text" name="fname"  />
          <label for="lname">Last Name</label>
          <input placeholder="Last Name" type="text" name="lname"  />
          <label>Phone number</label>
          <input type="tel" ></input>
          <label for="email">Email</label>
          <input placeholder="Email" type="text" name="email"  />
          <label htmlFor="password">password</label>
          <input type="password" />
          <label htmlFor="repeat-password">Re-enter password</label>
          <input type="password" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
