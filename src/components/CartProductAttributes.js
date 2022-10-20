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
        {attributes.map((attr) => (
          <div key={attr.name}>
            <h1 className={styles.productAttributeName}>{attr.name}</h1>
            <div className={styles.productAttributesContainer}>
              {attr.items.map((attribute) => {
                return (
                  (attr.type === "text" && (
                    <div
                      key={attribute.value}
                      className={styles.textAttribute}
                      data-attribute={
                        attribute.value === selectedAttributes[attr.name]
                      }
                    >
                      {" "}
                      <TextAttributes value={attribute.value} />
                    </div>
                  )) ||
                  (attr.type === "swatch" && (
                    <div
                      key={attribute.value}
                      className={styles.swatchAttribute}
                      data-attribute={
                        attribute.value === selectedAttributes[attr.name]
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
