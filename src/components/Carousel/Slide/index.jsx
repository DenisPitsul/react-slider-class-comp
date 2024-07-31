import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Slide.module.scss";
import defImage from "./question-mark.jpg";

class Slide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { src, title, description } = this.props;

    return (
      <>
        <figure className={styles.currentSlide}>
          <figcaption>
            <img src={src} alt="Space" />
            <div className={styles.info}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </div>
          </figcaption>
        </figure>
      </>
    );
  }
}

Slide.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

// Slide.defaultProps = {
//   src: defImage,
//   title: "Unknown",
//   description: "There are no information about the photo",
// };

export default Slide;
