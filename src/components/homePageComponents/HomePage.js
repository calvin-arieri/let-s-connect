import { NavLink } from "react-router-dom";
import MoreInfo from "./MoreInfo";
import "./homePage.css";
import ImageSlider from "./slideshow/slideshow";
import 'animate.css';
import Footer from "../footerComponent/footer";

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
  ];
  const containerStyles = {
    width: "500px",
    height: "700px",
    margin: "0 auto",
  };
  return (
    <div> 
      <div >
        <h1 className="top-bar animate__slideInLeft">Let's Connect</h1>
      </div>

      <div className="welcome-section">
        <div>
          <div>
            <p>
              Tired of being alone? Let's connect is your answer. We bring together individuals who are looking for any kind of
              companionship. With just a click away, you might meet your new favorite person and sway away in love! Love is a fire. But
              whether it is going to warm your hearth or burn down your house, you can never tell...
            </p>
          </div>
          <div>
            <NavLink to="/signup">Get Started</NavLink>
          </div>
        </div>
        <div>
            <ImageSlider slides={slides} />
        </div>
      </div>
      <div>
        {/* <MoreInfo /> */}
        <Footer />
      </div>      
    </div>
  );
}

export default HomePage;





