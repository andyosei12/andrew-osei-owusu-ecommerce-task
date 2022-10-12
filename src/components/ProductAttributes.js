import { Component } from "react";
import SwatchAttributes from "./SwatchAttributes";
import TextAttributes from "./TextAttributes";

class ProductAttributes extends Component {
  constructor() {
    super();
  }

  render() {
    const { attributes } = this.props;
    return (
      <div className="mt-2">
        {attributes.map((attribute) => {
          return (
            (attribute.type === "text" && (
              <TextAttributes
                key={attribute.name}
                items={attribute.items}
                name={attribute.name}
              />
            )) ||
            (attribute.type === "swatch" && (
              <SwatchAttributes
                key={attribute.name}
                items={attribute.items}
                name={attribute.name}
              />
            ))
          );
        })}
      </div>
    );
  }
}

export default ProductAttributes;
