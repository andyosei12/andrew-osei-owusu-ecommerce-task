import { Component } from "react";
import styles from "../styles/SwatchAttributes.module.css";

class SwatchAttributes extends Component {
  constructor() {
    super();
  }
  render() {
    const { value, height, width, ...otherProps } = this.props;

    return (
      <>
        <button
          key={value}
          className={styles.swatchAttribute}
          style={{
            background: `${value}`,
            height: `${height}`,
            width: `${width}`,
          }}
          {...otherProps}
        />
      </>
    );
  }
}

export default SwatchAttributes;
