import { Component } from "react";

import styles from "../styles/ProductDetails.module.css";

class ProductDetailImages extends Component {
  constructor() {
    super();
    this.state = {
      imageIdx: 0,
    };
  }

  changeImageHandler = (idx) => {
    this.setState({
      imageIdx: idx,
    });
  };

  render() {
    const { images, name: productName } = this.props;
    const { imageIdx } = this.state;
    return (
      <>
        <div>
          {images.map((image, idx) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <div
              key={idx}
              className={styles["product__images--small"]}
              onClick={this.changeImageHandler.bind(null, idx)}
            >
              <div className={styles["img-container--box"]} />
              <img src={image} alt={productName} />
            </div>
          ))}
        </div>

        <div className={styles["product__images--large"]}>
          <div className={styles["img-container--box"]} />
          <img src={images[imageIdx]} alt={productName} />
        </div>
      </>
    );
  }
}

export default ProductDetailImages;
