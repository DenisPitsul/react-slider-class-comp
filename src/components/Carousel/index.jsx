import React, { Component } from "react";
import Slide from "./Slide";
import styles from "./Carousel.module.scss";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      isPlaying: false,
      delay: 5000,
    };
    this.intervalId = null;
  }

  changeSlide = () => {
    this.nextSlide();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.delay !== this.state.delay) {
      if (this.state.isPlaying) {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.changeSlide, this.state.delay);
      }
    }
    if (prevState.isPlaying !== this.state.isPlaying) {
      if (this.state.isPlaying) {
        this.intervalId = setInterval(this.changeSlide, this.state.delay);
      } else {
        clearInterval(this.intervalId);
      }
    }
  }

  prevSlide = () => {
    this.setState({
      currentIndex:
        (this.state.currentIndex - 1 + this.props.slides.length) %
        this.props.slides.length,
    });
  };

  nextSlide = () => {
    this.setState({
      currentIndex: (this.state.currentIndex + 1) % this.props.slides.length,
    });
  };

  onDelayChange = (event) => {
    this.setState({ delay: event.target.value * 1000 });
  };

  onPlayClick = () => {
    this.setState({ isPlaying: !this.state.isPlaying });
  };

  render() {
    const { slides } = this.props;

    return (
      <article className={styles.container}>
        <div className={styles.inputWrapper}>
          <span className={styles.inputCaption}>Delay: </span>
          <input
            className={styles.input}
            type="number"
            min={1}
            value={this.state.delay / 1000}
            onChange={this.onDelayChange}
          />
          <button className={styles.playButton} onClick={this.onPlayClick}>
            {this.state.isPlaying ? "Pause" : "Play"}
          </button>
        </div>
        <Slide {...slides[this.state.currentIndex]} />
        <div className={styles.buttonContainer}>
          <button className={styles.prevBtn} onClick={this.prevSlide}>
            {"<"}
          </button>
          <button className={styles.nextBtn} onClick={this.nextSlide}>
            {">"}
          </button>
        </div>
      </article>
    );
  }
}
export default Carousel;
