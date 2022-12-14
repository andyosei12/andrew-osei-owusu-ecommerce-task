import { Component } from "react";
import { connect } from "react-redux";
import { selectCurrencySymbol } from "../store/selctors";
import parse from "html-react-parser";

import ProductDescriptionAttributes from "./ProductDescriptionAttributes";
import PrimaryButton from "./PrimaryButton";
import { addToCart } from "../store/cart-slice";
import styles from "../styles/ProductDetails.module.css";

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

  // adding the selected product attributes values
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
        <div className={styles.productDescriptionContainer}>
          <hgroup>
            <h1 className={styles.productBrand}>{brand}</h1>
            <h1 className={styles.productName}>{name}</h1>
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
            <h1 className={styles.priceHeading}>Price:</h1>
            <h1
              className={styles.priceAmount}
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

          <div className={styles.productDescription}>{parse(description)}</div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: selectCurrencySymbol(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart(item) {
    dispatch(addToCart(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDescription);
