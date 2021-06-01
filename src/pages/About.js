import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          ‘Pizza House’ At the point when Pizza House's organizer Karan off the
          shorelines of Oahu following multi day of surfing with his college
          pals in the mid 20s, he did what worked out easily for him. He went
          hunting down a delicious burger, a hot container of fries and a virus
          drink. After twenty years, in 2019, it was that feeling of place and
          fulfillment he was attempting to reproduce when he took a little piece
          of the Pizza House's and thudded it down right in the territory of
          Southern California. Today, Pizza House’s still is consistent with
          Karan’s unique experience and his unique vision. Also, however our
          menu has developed to incorporate plates of mixed greens, soups and
          delicate tacos, despite everything we hold fast to the fundamental
          rationality that new sustenance, well disposed administration and a
          laid back air is the ideal end to a hard day of work or play. We trust
          you taste it in each chomp. Furthermore, we trust that whether you’re
          a ravenous surfer or occupied salesman, you stroll into ‘Organization
          Name’ s and state to yourself, as Tony did those numerous years back,
          “Ahh…this is the place I need to be.”
        </p>
      </div>
    </div>
  );
}

export default About;
