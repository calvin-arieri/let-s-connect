import "./homePage.css";
import ImageSlider from "./slideshow";

function HomePage() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1485731226153-303323e1c49b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cGxlcyUyMGluJTIwJTNCb3ZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "beach",
    },
    {
      url: "https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y291cGxlcyUyMGluJTIwJTNCb3ZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "boat",
    },
    {
      url: "https://images.unsplash.com/photo-1510635874686-2761923552fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvdXBsZXMlMjBpbiUyMCUzQm92ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "forest",
    },
    // { url: "http://localhost:3000/image-4.jpg", title: "city" },
    // { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "700px",
    margin: "0 auto",
  };
  return (
    <div className="entirePage">
      <div className="aboutSection">
        <div className="content">
          <h1>Lets's Connect</h1>
          <p>
            Tired of being alone? Let's connect is your answer. We bring together individuals who are looking for any kind of companionship.
            With just a click away, you might meet your new favorite person and sway away in love! Love is a fire. But whether it is going
            to warm your hearth or burn down your house, you can never tell...
          </p>
        </div>
      </div>

      <div className="imageSlider" style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      {/* <div className="images">
          <Slideshow />
          <img
            src="https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"


            alt=""
          />
        </div> */}

      {/* <div id="article">
        <p>
          <h2>
            <h1>Research has proven</h1>
            Online dating has become the norm, with 30% of U.S. adults having used an online dating app or website. That's a staggering 90
            million people! But it's not just the number of people using dating apps that's impressive. According to a recent survey, 75% of
            online daters are looking for a long-term relationship, and 25% of them have found their spouse or partner through an online
            dating app. This means that dating apps are not just a way to pass the time, but a real opportunity to find true love.The same
            problem is in different countries
          </h2>
        </p>
        <p>
          <h1>Through this app</h1>
          <h2>
            Online dating has been made easier. Once you enter your details you match will be looked for and set to interact. If you dont
            like the match you can look at all profiles. You can also see what they have posted.To get starter with us{" "}
            <NavLink to="add_details" />
          </h2>
        </p>
      </div> */}
    </div>
  );
}

export default HomePage;
