import { Component } from "react";
import { connect } from "react-redux";
import { ReactComponent as EmptyCartIcon } from "../assets/carticon.svg";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartOpen,
} from "../store/selctors";
import { toggleMiniCartOpen } from "../store/ui-slice";
import MiniCart from "./MiniCart";
import styles from "../styles/CartIcon.module.css";
class CartIcon extends Component {
  constructor() {
    super();
  }

  toggleCartOpenHandler = () => {
    const { toggleCartOpen } = this.props;
    toggleCartOpen();
  };

  render() {
    const { cartOpen, cartItemsQuantity, cartItems } = this.props;

    return (
      <>
        <button
          className={styles.cartIconBtn}
          onClick={this.toggleCartOpenHandler}
        >
          {cartItems.length > 0 && (
            <h6 className={styles.cartIconCount}>{cartItemsQuantity}</h6>
          )}
          <EmptyCartIcon />
        </button>
        {cartOpen && <MiniCart />}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartOpen() {
    dispatch(toggleMiniCartOpen());
  },
});

const mapStateToProps = (state) => ({
  cartOpen: selectCartOpen(state),
  cartItemsQuantity: selectCartItemsCount(state),
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
