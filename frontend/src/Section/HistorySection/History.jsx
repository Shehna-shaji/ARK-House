import React from "react";
import historyimage from "../../assets/historyimage.png";
import './History.css';

const History = () => {
  return (
    <section className="history-section">
      <h5 className="history-title">Our history</h5>
      <div className="history-image-text">
        <figure>
          <img src={historyimage} className="history-img" />
        </figure>
        <article className="history-content">
          For over four decades, ARK House, founded by renowned architect John
          Smith in 1975, has been a leader in the industry known for its
          innovative designs and commitment to client satisfaction. The agency's
          early work, including the Smith Tower in Seattle, established Smith's
          reputation as a leading architect. Over the years, ARK House has
          completed numerous high-profile projects, including the iconic
          Guggenheim Museum in Bilbao, Spain. The agency's success is due to its
          commitment to sustainability and community engagement, as well as its
          adaptation to new trends and technologies. Today, ARK House continues
          to push boundaries in architecture while setting new standards for
          innovation and excellence.
        </article>
      </div>
    </section>
  );
};

export default History;
