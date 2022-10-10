import { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrencySymbol } from "../store/selctors";
import styles from "../styles/ProductCard.module.css";

class ProductCard extends Component {
  constructor() {
    super();
  }

  render() {
    const { product, currencySymbol } = this.props;
    const price = product.prices.filter(
      (price) => price.currency.symbol === currencySymbol
    );
    const { amount } = price[0];

    return (
      <div>
        <div className={styles["img-container"]}>
          <img src={product.gallery[0]} alt={product.name} />
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
