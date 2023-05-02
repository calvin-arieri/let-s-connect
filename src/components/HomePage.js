function HomePage() {
  return (
    <div className="entirePage">
      <div className="signin">
        <p>Have an account already?</p>
        <button>Signin</button>
      </div>
      <div className="details">
        <div className="aboutSection">
          <h1>Lets's Connect</h1>
          <p>
            Tired of being alone? Let's connect is your answer. We bring together individuals who are looking into any kind of romantic
            relationship together. With a click away, you might meet your match made in heaven!
          </p>
          <button>Join Let's Connect</button>
        </div>
        <div className="images">
          <img
            src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
