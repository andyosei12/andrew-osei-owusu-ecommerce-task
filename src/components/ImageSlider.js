import { Component } from "react";
import { ReactComponent as LeftIcon } from "../assets/left.svg";
import { ReactComponent as RightIcon } from "../assets/right.svg";
import styles from "../styles/SliderImage.module.css";

class ImageSlider extends Component {
  constructor() {
    super();

    this.state = {
      imageIndex: 0,
    };
  }

  imageSlideLeftHandler = () => {
    if (this.state.imageIndex > 0) {
      this.setState((state) => ({
        imageIndex: state.imageIndex - 1,
      }));
    }
  };

  imageSlideRightHandler = () => {
    const { gallery } = this.props;
    if (this.state.imageIndex <= gallery.length - 2) {
      this.setState((state) => ({
        imageIndex: state.imageIndex + 1,
      }));
    }
  };

  render() {
    const { large, gallery } = this.props;
    return (
      <div
        className={styles.sliderImg}
        style={{ width: `${large ? "20rem" : ""}` }}
      >
        <div className={styles.sliderImgContainer} />
        <img src={gallery[`${this.state.imageIndex}`]} alt={name} />
        {large && gallery.length > 1 && (
          <div className={styles.sliderContainer}>
            <button
              className={styles.sliderIcon}
              onClick={this.imageSlideLeftHandler}
            >
              <LeftIcon />
            </button>
            <button
              className={styles.sliderIcon}
              onClick={this.imageSlideRightHandler}
            >
              <RightIcon />
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ImageSlider;
