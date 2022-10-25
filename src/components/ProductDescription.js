import { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrencySymbol } from "../store/selctors";
import parse from "html-react-parser";

import styles from "../styles/ProductDetails.module.css";
import PrimaryButton from "./PrimaryButton";
import ProductDescriptionAttributes from "./ProductDescriptionAttributes";
import { addToCart } from "../store/cart-slice";

class ProductDescription extends Component {
  constructor() {
    super();
    this.state = {
      selectedAttributes: null,
    };
  }

  selectAttributeChangeHandler = (name, attribute) => {
    this.setState((state) => {
      return {
        selectedAttributes: {
          ...state.selectedAttributes,
          [name]: attribute.value,
        },
      };
    });
  };

  addSelectedAttributesValue = () => {
    return Object.values(this.state.selectedAttributes).join("");
  };

  addProductToCartHandler = () => {
    const { productInfo, addItemToCart } = this.props;
    const item = {
      productInfo,
      selectedAttributes: this.state.selectedAttributes,
      cartProductId: productInfo.id + this.addSelectedAttributesValue(),
    };

    addItemToCart(item);
    this.setState({
      selectedAttributes: null,
    });
  };

  render() {
    const {
      productInfo: { name, brand, attributes, description, inStock },
      price,
      currency,
    } = this.props;

    return (
      <section style={{ width: "35%" }}>
        <div className={styles["product-description"]}>
          <hgroup>
            <h1 className={styles["product--brand"]}>{brand}</h1>
            <h1 className={styles["product--name"]}>{name}</h1>
          </hgroup>
          {/* Attributes */}
          <div className="mt-2">
            <ProductDescriptionAttributes
              attributes={attributes}
              onChangeSelectAttribute={this.selectAttributeChangeHandler}
              selectedAttributes={this.state.selectedAttributes}
            />
          </div>
          <div className="mt-2">
            <h1 className={styles["price__heading"]}>Price:</h1>
            <h1
              className={styles["price--amount"]}
            >{`${currency}${price[0].amount}`}</h1>
          </div>
          {inStock && (
            <PrimaryButton
              py="1rem"
              px="8rem"
              onClick={this.addProductToCartHandler}
            >
              Add to Cart
            </PrimaryButton>
          )}

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

export const mapDispatchToProps = (dispatch) => ({
  addItemToCart(item) {
    dispatch(addToCart(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);
