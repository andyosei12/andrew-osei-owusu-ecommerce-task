import { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addToCart, removeFromCart } from "../store/cart-slice";
import { selectCurrencySymbol } from "../store/selctors";
import styles from "../styles/CartItem.module.css";
import CartProductAttributes from "./CartProductAttributes";

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
    } = this.props;

    const price = productInfo.prices.filter(
      (price) => price.currency.symbol === currency
    );

    return (
      <div className={styles.cartItemContainer}>
        <div className={styles.cartItemInfo}>
          <h3 className="text-300 text-sm">{productInfo.brand}</h3>
          <h3 className="text-300 text-sm">{productInfo.name}</h3>
          <h3 className="text-500 text-sm mt-1">{`${currency}${(
            price[0].amount * quantity
          ).toFixed(2)}`}</h3>
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
        <div className={styles.cartItemImg}>
          <img src={productInfo.gallery[0]} alt={productInfo.name} />
        </div>
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
