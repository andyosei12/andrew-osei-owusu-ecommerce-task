import { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import PrimaryButton from "../components/PrimaryButton";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
  selectCurrencySymbol,
} from "../store/selctors";
import styles from "../styles/Cart.module.css";

class Cart extends Component {
  constructor() {
    super();
  }

  render() {
    const { cartItems, cartTotal, cartItemsQty, currency } = this.props;
    const tax = (21 / 100) * cartTotal;
    return (
      <section>
        <h1 className={styles.title}>Cart</h1>
        {cartItems.map((cartItem) => (
          <div key={cartItem.cartProductId} className={styles.cartContent}>
            <CartItem cartItem={cartItem} large />
          </div>
        ))}
        <section className={styles.cartSummary}>
          <div className="flex gap-1 text-xs mb-1">
            <h3 className="text-400 w-3">Tax 21%:</h3>
            <h3 className="text-700">{`${currency}${tax.toFixed(2)}`}</h3>
          </div>
          <div className="flex gap-1 text-xs mb-1">
            <h3 className="text-400 w-3">Quantity:</h3>
            <h3 className="text-700">{cartItemsQty}</h3>
          </div>
          <div className="flex gap-1 text-xs mb-1">
            <h3 className="text-600 w-3">Total:</h3>
            <h3 className="text-700">{`${currency}${(cartTotal + tax).toFixed(
              2
            )}`}</h3>
          </div>
          <PrimaryButton>Order</PrimaryButton>
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotal(state),
  cartItemsQty: selectCartItemsCount(state),
  currency: selectCurrencySymbol(state),
});

export default connect(mapStateToProps)(Cart);
