import { Component } from "react";
import SwatchAttributes from "./SwatchAttributes";
import TextAttributes from "./TextAttributes";
import styles from "../styles/ProductDetails.module.css";

class ProductDescriptionAttributes extends Component {
  constructor() {
    super();
  }

  changeSelectedAttributeHandler = ({ name, attribute }) => {
    this.props.onChangeSelectAttribute(name, attribute);
  };

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
                        selectedAttributes &&
                        attribute.value ===
                          selectedAttributes[productAttribute.name]
                      }
                    >
                      {" "}
                      <TextAttributes
                        value={attribute.value}
                        onClick={this.changeSelectedAttributeHandler.bind(
                          null,
                          { name: productAttribute.name, attribute }
                        )}
                      />
                    </div>
                  )) ||
                  (productAttribute.type === "swatch" && (
                    <div
                      key={attribute.value}
                      className={styles.swatchAttribute}
                      data-attribute={
                        selectedAttributes &&
                        attribute.value ===
                          selectedAttributes[productAttribute.name]
                      }
                    >
                      {" "}
                      <SwatchAttributes
                        value={attribute.value}
                        onClick={this.changeSelectedAttributeHandler.bind(
                          null,
                          { name: productAttribute.name, attribute }
                        )}
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

export default ProductDescriptionAttributes;
