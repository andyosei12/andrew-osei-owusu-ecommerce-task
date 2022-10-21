/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
  selectCurrencySymbol,
} from "../store/selctors";
import { toggleMiniCartOpen } from "../store/ui-slice";
import styles from "../styles/MiniCart.module.css";
import CartItem from "./CartItem";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

class MiniCart extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      cartItems,
      toggleCartOpen,
      cartTotal,
      currency,
      cartItemsQuantity,
    } = this.props;

    return (
      <>
        <div className={styles.cartOverlay} onClick={toggleCartOpen} />
        <div className={styles.miniCartContainer}>
          <div className={styles.cartItemContainer}>
            <h3>My Bag: {cartItemsQuantity} Items</h3>
            <div>
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.cartProductId} cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className={styles.cartTotal}>
            <h3>Total</h3>
            <h3>{`${currency}${cartTotal.toFixed(2)}`}</h3>
          </div>
          <div className={styles.cartActions}>
            <SecondaryButton py="1rem" px="3.3rem" fontSize="1.1rem">
              View Bag
            </SecondaryButton>
            <PrimaryButton py="1rem" px="3.3rem" fontSize="1.1rem">
              Checkout
            </PrimaryButton>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
  currency: selectCurrencySymbol,
  cartItemsQuantity: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartOpen() {
    dispatch(toggleMiniCartOpen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
