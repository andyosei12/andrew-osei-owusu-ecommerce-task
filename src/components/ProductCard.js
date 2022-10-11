import { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrencySymbol } from "../store/selctors";
import { ReactComponent as CartIcon } from "../assets/carticon.svg";
import styles from "../styles/ProductCard.module.css";

class ProductCard extends Component {
  constructor() {
    super();
  }

  addProductToCartHandler = () => {
    console.log("will add product to cart");
  };

  render() {
    const { product, currencySymbol } = this.props;
    const price = product.prices.filter(
      (price) => price.currency.symbol === currencySymbol
    );
    const { amount } = price[0];

    return (
      <div
        className={styles.container}
        data-product__active={product.inStock}
        style={{ opacity: `${!product.inStock ? 0.35 : 1}` }}
      >
        <div className={styles["img-container"]}>
          <div className={styles["img-container--box"]} />
          <img src={product.gallery[0]} alt={product.name} />
          {!product.inStock && <h3>Out of stock</h3>}
          <button
            className={styles["product__cart-icon"]}
            onClick={this.addProductToCartHandler}
          >
            <CartIcon fill="#fff" />
          </button>
        </div>
        <div className="mt-2">
          <h1 className={styles["product--name"]}>{product.name}</h1>
          <h1>{`${currencySymbol + amount}`}</h1>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = createStructuredSelector({
  currencySymbol: selectCurrencySymbol,
});

export default connect(mapStateToProps)(ProductCard);
