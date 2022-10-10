import { Component } from "react";
import styles from "../styles/ProductCard.module.css";

class ProductCard extends Component {
  constructor() {
    super();
  }

  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <div>
        <div className={styles["img-container"]}>
          <img src={product.gallery[0]} alt={product.name} />
        </div>
        <div className="mt-2">
          <h1 className={styles["product--name"]}>{product.name}</h1>
          <h1>Price</h1>
        </div>
      </div>
    );
  }
}

export default ProductCard;
