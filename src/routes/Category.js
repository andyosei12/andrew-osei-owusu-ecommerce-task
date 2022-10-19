import { Component } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import ProductCard from "../components/ProductCard";
import withRouter from "../wrappers/WithRouter";
import styles from "../styles/Category.module.css";

const GET_CATEGORY_PRODUCTS = gql`
  query GetProducts($input: CategoryInput) {
    category(input: $input) {
      products {
        id
        name
        brand
        gallery
        attributes {
          items {
            displayValue
            value
          }
          type
          name
        }
        prices {
          amount
          currency {
            symbol
          }
        }
        inStock
      }
    }
  }
`;

class Category extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      router: { params },
    } = this.props;

    return (
      <section>
        <h1 className="text-lg text-capitalize">
          Category: {params.categoryName}
        </h1>
        <div className={styles.container}>
          <Query
            query={GET_CATEGORY_PRODUCTS}
            variables={{ input: { title: params.categoryName } }}
          >
            {({ data }) => {
              return data?.category.products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ));
            }}
          </Query>
        </div>
      </section>
    );
  }
}

export default withRouter(Category);
