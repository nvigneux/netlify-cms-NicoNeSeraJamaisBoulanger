import React from "react";
import PropTypes from "prop-types";
import "./playground.scss";

export const Playground = () => {
  return (
    <div className="container">
      <article className="info">
        <header className="header">
          <span className="subtitle">React Animation</span>
          <h1 className="title">Reveal on Scroll-up</h1>
        </header>
        <section className="content">
          <p>
            Using Framer Motion, the actions bar at the bottom of the screen
            only fades in when scrolled up and fades out whenever we scroll
            down.
          </p>
        </section>
      </article>
      {/* <Actions /> */}
    </div>
  );
};

Playground.propTypes = {};

const PlaygroundPage = () => {
  return <Playground />;
};

PlaygroundPage.propTypes = {};

export default PlaygroundPage;
