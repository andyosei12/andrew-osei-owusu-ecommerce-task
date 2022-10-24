import { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addToCart, removeFromCart } from "../store/cart-slice";
import { selectCurrencySymbol } from "../store/selctors";
import styles from "../styles/CartItem.module.css";
import CartProductAttributes from "./CartProductAttributes";
import ImageSlider from "./ImageSlider";

class CartItem extends Component {
  constructor() {
    super();
  }

  addProductToCart = () => {
    const {
      addProductToCart,
      cartItem: { cartProductId },
    } = this.props;
    const item = {
      cartProductId,
    };
    addProductToCart(item);
  };

  removeProductFromCart = () => {
    const {
      removeProductFromCart,
      cartItem: { cartProductId },
    } = this.props;
    removeProductFromCart(cartProductId);
  };

  render() {
    const {
      cartItem: { productInfo, selectedAttributes, quantity },
      currency,
      ...otherProps
    } = this.props;

    const price = productInfo.prices.filter(
      (price) => price.currency.symbol === currency
    );

    return (
      <div className={styles.cartItemContainer}>
        <div className={styles.cartItemInfo}>
          <h3
            className={`${otherProps.large ? "text-600" : "text-300"} ${
              otherProps.large ? "text-md" : "text-sm"
            } mb-1`}
          >
            {productInfo.brand}
          </h3>
          <h3
            className={`${otherProps.large ? "text-400" : "text-300"} ${
              otherProps.large ? "text-md" : "text-sm"
            }`}
          >
            {productInfo.name}
          </h3>
          <h3
            className={`${
              otherProps.large ? "text-700" : "text-500"
            } text-sm mt-1`}
          >{`${currency}${(price[0].amount * quantity).toFixed(2)}`}</h3>
          <div>
            <CartProductAttributes
              attributes={productInfo.attributes}
              selectedAttributes={selectedAttributes}
            />
          </div>
        </div>
        <div className={styles.cartItemQty}>
          <button onClick={this.addProductToCart}>+</button>
          <h3>{quantity}</h3>
          <button onClick={this.removeProductFromCart}>-</button>
        </div>
        <ImageSlider gallery={productInfo.gallery} {...otherProps} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currency: selectCurrencySymbol,
});

const mapDispatchToProps = (dispatch) => ({
  addProductToCart(item) {
    dispatch(addToCart(item));
  },
  removeProductFromCart(id) {
    dispatch(removeFromCart(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
