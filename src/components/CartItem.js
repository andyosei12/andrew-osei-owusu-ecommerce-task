import { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrencySymbol } from "../store/selctors";
import styles from "../styles/CartItem.module.css";
import CartProductAttributes from "./CartProductAttributes";

class CartItem extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      cartItem: { productInfo, selectedAttributes },
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
          <h3 className="text-500 text-sm mt-1">{`${currency}${price[0].amount}`}</h3>
          <div>
            <CartProductAttributes
              attributes={productInfo.attributes}
              selectedAttributes={selectedAttributes}
            />
          </div>
        </div>
        <div className={styles.cartItemQty}>
          <button>+</button>
          <h3>Qty</h3>
          <button>-</button>
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

export default connect(mapStateToProps)(CartItem);