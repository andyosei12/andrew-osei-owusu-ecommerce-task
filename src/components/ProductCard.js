import { Component } from "react";
import { connect } from "react-redux";
import { selectCurrencySymbol } from "../store/selctors";
import { ReactComponent as CartIcon } from "../assets/carticon.svg";
import styles from "../styles/ProductCard.module.css";
import { Link } from "react-router-dom";
import { addToCart } from "../store/cart-slice";

class ProductCard extends Component {
  constructor() {
    super();
  }

  addProductToCartHandler = () => {
    const { product, addItemToCart } = this.props;
    const selectedAttributes = {};
    if (product.attributes.length > 0) {
      product.attributes.forEach((element) => {
        selectedAttributes[element.name] = element.items[0].value;
      });
    }
    const item = {
      productInfo: product,
      selectedAttributes,
      cartProductId: product.id + Object.values(selectedAttributes).join(""),
    };

    addItemToCart(item);
  };

  render() {
    const { product, currencySymbol, categoryName } = this.props;
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
            <CartIcon />
          </button>
        </div>
        <Link to={`/${categoryName}/${product.id}`}>
          <div className="mt-2">
            <h1 className={styles["product--name"]}>{product.name}</h1>
            <h1>{`${currencySymbol + amount}`}</h1>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencySymbol: selectCurrencySymbol(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart(item) {
    dispatch(addToCart(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
