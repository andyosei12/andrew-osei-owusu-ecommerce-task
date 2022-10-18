import { Component } from "react";
import styles from "../styles/CartItem.module.css";

class CartItem extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      cartItem: { productInfo },
    } = this.props;

    return (
      <div className={styles.cartItemContainer}>
        <div>
          <h3>{productInfo.brand}</h3>
          <h3>{productInfo.name}</h3>
          <h3>Price</h3>
          <h3>Attributes</h3>
        </div>
        <div>Qty</div>
        <div>img</div>
      </div>
    );
  }
}

export default CartItem;
