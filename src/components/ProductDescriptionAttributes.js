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
                        selectedAttributes &&
                        attribute.value === selectedAttributes[attr.name]
                      }
                    >
                      {" "}
                      <TextAttributes
                        value={attribute.value}
                        onClick={this.changeSelectedAttributeHandler.bind(
                          null,
                          { name: attr.name, attribute }
                        )}
                      />
                    </div>
                  )) ||
                  (attr.type === "swatch" && (
                    <div
                      key={attribute.value}
                      className={styles.swatchAttribute}
                      data-attribute={
                        selectedAttributes &&
                        attribute.value === selectedAttributes[attr.name]
                      }
                    >
                      {" "}
                      <SwatchAttributes
                        value={attribute.value}
                        onClick={this.changeSelectedAttributeHandler.bind(
                          null,
                          { name: attr.name, attribute }
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
