import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./playground.scss";

export const Actions = () => {
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);
  return (
    <motion.div
      className="actions"
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldShowActions ? 1 : 0 }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <button>
        <span className="fas fa-share-square">a</span>
      </button>
      <button>
        <span className="fas fa-share-square">b</span>
      </button>
      <button>
        <span className="fas fa-share-square">c</span>
      </button>
    </motion.div>
  );
};

export const Playground = () => {
  return (
    <div className="container-playground">
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
      <Actions />
    </div>
  );
};

Playground.propTypes = {};

const PlaygroundPage = () => {
  return <Playground />;
};

PlaygroundPage.propTypes = {};

export default PlaygroundPage;
