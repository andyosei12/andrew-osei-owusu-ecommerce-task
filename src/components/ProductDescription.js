import { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrencySymbol } from "../store/selctors";
import parse from "html-react-parser";

import styles from "../styles/ProductDetails.module.css";
import PrimaryButton from "./PrimaryButton";
import ProductDescriptionAttributes from "./ProductDescriptionAttributes";

class ProductDescription extends Component {
  constructor() {
    super();
  }

  render() {
    const { name, brand, attributes, price, description, currency } =
      this.props;

    return (
      <section style={{ width: "35%" }}>
        <div className={styles["product-description"]}>
          <hgroup>
            <h1 className={styles["product--brand"]}>{brand}</h1>
            <h1 className={styles["product--name"]}>{name}</h1>
          </hgroup>
          {/* Attributes */}
          <div className="mt-2">
            <ProductDescriptionAttributes attributes={attributes} />
          </div>
          <div className="mt-2">
            <h1 className={styles["price__heading"]}>Price:</h1>
            <h1
              className={styles["price--amount"]}
            >{`${currency}${price[0].amount}`}</h1>
          </div>
          <PrimaryButton>Add to Cart</PrimaryButton>
          <div className={styles["product--description"]}>
            {parse(description)}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currency: selectCurrencySymbol,
});

export default connect(mapStateToProps)(ProductDescription);
