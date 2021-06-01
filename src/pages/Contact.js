import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name :</label>
          <input type="text" name="name" placeholder="Enter Full Name" />
          <label htmlFor="email">E-Mail :</label>
          <input type="email" name="email" placeholder="Enter Your email..." />
          <label htmlFor="message">Message :</label>
          <textarea
            rows="6"
            placeholder="Enter Your Re-view"
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
