import { Component } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import withRouter from "../wrappers/WithRouter";

import styles from "../styles/ProductDetails.module.css";
import ProductDetailImages from "../components/ProductDetailImages";
import ProductDescription from "../components/ProductDescription";
import { createStructuredSelector } from "reselect";
import { selectCurrencySymbol } from "../store/selctors";
import { connect } from "react-redux";

const GET_PRODUCT_DETAILS = gql`
  query GetProductDetailById($productId: String!) {
    product(id: $productId) {
      id
      name
      gallery
      brand
      description
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
      <section className={styles["product-details"]}>
        <Query query={GET_PRODUCT_DETAILS} variables={{ productId: params.id }}>
          {({ data }) => {
            if (data) {
              const {
                product: {
                  gallery,
                  name,
                  brand,
                  attributes,
                  prices,
                  description,
                },
              } = data;

              return (
                <>
                  <ProductDetailImages images={gallery} name={name} />
                  <ProductDescription
                    name={name}
                    brand={brand}
                    attributes={attributes}
                    description={description}
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

const mapStateToProps = createStructuredSelector({
  currency: selectCurrencySymbol,
});

export default withRouter(connect(mapStateToProps)(ProductDetails));
