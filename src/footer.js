import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [review, setReview] = useState("");
  const [reviewsList, setReviewsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviewsList([...reviewsList, review]);
    setReview("");
  };

  return (
    <footer className="footer">
<div className="footer__links" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
  <div className="linkcolumns">
    <a href="/" style={{ textDecoration: "none", color: "white", fontWeight: "bold", fontSize: "larger" }}>Home</a>
  </div>
  <div className="linkcolumns">
    <a href="/about" style={{ textDecoration: "none", color: "white", fontWeight: "bold", fontSize: "larger" }}>About Us</a>
  </div>
  <div className="linkcolumns">
    <a href="/contact" style={{ textDecoration: "none", color: "white", fontWeight: "bold", fontSize: "larger" }}>Developer Contacts</a>
  </div>
  <div className="linkcolumns">
    <a href="mailto:customer-service@letsconnect.com" style={{ textDecoration: "none", color: "white", fontWeight: "bold", fontSize: "larger" }}>Email</a>
  </div>
  <div className="linkcolumns">
    <a href="/customer-service" style={{ textDecoration: "none", color: "white", fontWeight: "bold", fontSize: "larger" }}>Customer Service</a>
  </div>
  <div className="linkcolumns">
    <a href="/report" style={{ textDecoration: "none", color: "white", fontWeight: "bold", fontSize: "larger" }}>Report</a>
  </div>
</div>
      <div className="footer__info">
        <div className="footer__social-icons">
          <a href="https://www.instagram.com/">
            <img src="https://rb.gy/umw75" alt="Instagram" style={{ width: "1cm", height: "1cm", marginRight: "10px" }} />
          </a>
          <a href="https://www.linkedin.com/">
            <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/51-linkedin-512.png" alt="LinkedIn" style={{ width: "1cm", height: "1cm", marginRight: "10px" }} />
          </a>
          <a href="https://twitter.com/">
            <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" alt="Twitter" style={{ width: "1cm", height: "1cm", marginRight: "10px" }} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Let's Connect. All rights reserved.</p>
        <div className="footer__contact">
          <div className="footer__item">
            <span>Email:</span>
            <a href="mailto:info@letsconnect.com">info@letsconnect.com</a>
          </div>
          <div className="footer__item">
            <span>Phone:</span>
            <a href="tel:077777777777">077777777777</a>
          </div>
          <div className="footer__item">
            <span>Location:</span>
            <span>33,Runda</span>
          </div>
        </div>
      </div>
      <div className="footer__review">
        <form className="footer__form" onSubmit={handleSubmit}>
          <label htmlFor="review">Write a review:</label>
          <textarea
            id="review"
            name="review"
            rows="4"
            cols="50"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="footer__reviews">
          <h3>Reviews:</h3>
          {reviewsList.map((review, index) => (
            <p key={index}>{review}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;