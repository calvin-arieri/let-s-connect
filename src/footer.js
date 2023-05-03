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
      <div className="footer__copy">
        
        <p> &copy; {new Date().getFullYear()} Let's Connect. All rights reserved.</p>
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
            <span>33 Mongolia Close, Runda</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;