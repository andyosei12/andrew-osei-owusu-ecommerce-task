/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../store/selctors";
import { toggleMiniCartOpen } from "../store/ui-slice";
import styles from "../styles/MiniCart.module.css";
import CartItem from "./CartItem";

class MiniCart extends Component {
  constructor() {
    super();
  }

  render() {
    const { cartItems, toggleCartOpen } = this.props;
    return (
      <>
        <div className={styles.cartOverlay} onClick={toggleCartOpen} />
        <div className={styles.miniCartContainer}>
          <h3>My Bag: 3 Items</h3>
          <div>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.productInfo.id} cartItem={cartItem} />
            ))}
          </div>
          <div>
            <h3>Total</h3>
            <h3>Amount</h3>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartOpen() {
    dispatch(toggleMiniCartOpen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
