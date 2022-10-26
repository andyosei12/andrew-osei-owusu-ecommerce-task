import { Component } from "react";
import styles from "../styles/CartProductAttribute.module.css";
import SwatchAttributes from "./SwatchAttributes";
import TextAttributes from "./TextAttributes";

class CartProductAttributes extends Component {
  constructor() {
    super();
  }

  render() {
    const { attributes, selectedAttributes } = this.props;

    return (
      <div className="mt-2">
        {attributes.map((productAttribute) => (
          <div key={productAttribute.name}>
            <h1 className={styles.productAttributeName}>
              {productAttribute.name}
            </h1>
            <div className={styles.productAttributesContainer}>
              {productAttribute.items.map((attribute) => {
                return (
                  (productAttribute.type === "text" && (
                    <div
                      key={attribute.value}
                      className={styles.textAttribute}
                      data-attribute={
                        attribute.value ===
                        selectedAttributes[productAttribute.name]
                      }
                    >
                      {" "}
                      <TextAttributes value={attribute.value} />
                    </div>
                  )) ||
                  (productAttribute.type === "swatch" && (
                    <div
                      key={attribute.value}
                      className={styles.swatchAttribute}
                      data-attribute={
                        attribute.value ===
                        selectedAttributes[productAttribute.name]
                      }
                    >
                      {" "}
                      <SwatchAttributes
                        value={attribute.value}
                        height="1.5rem"
                        width="1.5rem"
                      />
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

export default CartProductAttributes;
