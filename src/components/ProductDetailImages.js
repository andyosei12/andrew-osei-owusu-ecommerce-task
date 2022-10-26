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
              className={styles["productImagesSmall"]}
              onClick={this.changeImageHandler.bind(null, idx)}
            >
              <div className={styles["imgContainerBox"]} />
              <img src={image} alt={productName} />
            </div>
          ))}
        </div>

        <div className={styles["productImagesLarge"]}>
          <div className={styles["imgContainerBox"]} />
          <img src={images[imageIdx]} alt={productName} />
        </div>
      </>
    );
  }
}

export default ProductDetailImages;
