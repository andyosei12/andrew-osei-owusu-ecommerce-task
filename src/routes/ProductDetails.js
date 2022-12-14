import { Component } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import withRouter from "../wrappers/WithRouter";

import styles from "../styles/ProductDetails.module.css";
import ProductDetailImages from "../components/ProductDetailImages";
import ProductDescription from "../components/ProductDescription";
import { selectCurrencySymbol } from "../store/selctors";
import { connect } from "react-redux";
import Spinner from "../components/Spinner";

export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetailById($productId: String!) {
    product(id: $productId) {
      id
      name
      gallery
      brand
      description
      inStock
      attributes {
        items {
          displayValue
          value
        }
        type
        name
      }
      prices {
        currency {
          symbol
        }
        amount
      }
    }
  }
`;

class ProductDetails extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      router: { params },
      currency,
    } = this.props;
    return (
      <section className={styles.productDetails}>
        <Query query={GET_PRODUCT_DETAILS} variables={{ productId: params.id }}>
          {({ data, loading }) => {
            if (loading) {
              return <Spinner />;
            }
            if (data) {
              const {
                product: { gallery, name, prices },
              } = data;

              return (
                <>
                  <ProductDetailImages images={gallery} name={name} />
                  <ProductDescription
                    productInfo={data.product}
                    price={prices.filter(
                      (price) => price.currency.symbol === currency
                    )}
                  />
                </>
              );
            }
          }}
        </Query>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: selectCurrencySymbol(state),
});

export default withRouter(connect(mapStateToProps)(ProductDetails));
