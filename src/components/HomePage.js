import { NavLink } from "react-router-dom";
import "./homePage.css";
import React from "react";


function HomePage() {
  return (
    <div className="entirePage">
      <div className="details">
        <div className="aboutSection">
          <h1>Lets's Connect</h1>
          <p>
            <h2>
            Tired of being alone? Let's connect is your answer. We bring together individuals who are looking into any kind of romantic
            relationship together. With a click away, you might meet your match made in heaven!
            </h2>
          </p>

        </div>
        <div className="images">
          <img
            src="https://images.unsplash.com/photo-1620459879599-e69e6300402e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
      </div>
      <div id="article">
       
        <p>
          <h2>
          <h1>Research has proven</h1>
          Online dating has become the norm, with 30% of U.S. adults having used an online dating app or website.
          That's a staggering 90 million people! But it's not just the number of people using dating apps that's impressive.
          According to a recent survey, 75% of online daters are looking for a long-term relationship, and 25% of them have found their spouse or partner through an online dating app.
          This means that dating apps are not just a way to pass the time, but a real opportunity to find true love.The same problem is in different countries
          </h2>
        </p>
        <p>
          <h1>Through this app</h1>
          <h2>
            Online dating has been made easier. Once you enter your details you match will be looked for and set to interact. If you dont like the match you can look at all profiles.
            You can also see what they have posted.To get starter with us <NavLink to='add_details' />
          </h2>
        </p>
      </div>
    </div>
  );
}

export default HomePage;
