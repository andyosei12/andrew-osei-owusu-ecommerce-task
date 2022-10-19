import { Component } from "react";
import SwatchAttributes from "./SwatchAttributes";
import TextAttributes from "./TextAttributes";
import styles from "../styles/ProductDetails.module.css";

class ProductDescriptionAttributes extends Component {
  constructor() {
    super();
  }

  render() {
    const { attributes } = this.props;

    return (
      <div className="mt-2">
        {attributes.map((attr) => (
          <div key={attr.name}>
            <h1 className={styles.productAttributeName}>{attr.name}</h1>
            <div className={styles.productAttributesContainer}>
              {attr.items.map((attribute) => {
                return (
                  (attr.type === "text" && (
                    <div key={attribute.value}>
                      {" "}
                      <TextAttributes value={attribute.value} />
                    </div>
                  )) ||
                  (attr.type === "swatch" && (
                    <div key={attribute.value}>
                      {" "}
                      <SwatchAttributes value={attribute.value} />
                    </div>
                  ))
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductDescriptionAttributes;
