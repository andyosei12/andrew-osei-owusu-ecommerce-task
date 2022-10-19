import { Component } from "react";
import styles from "../styles/SwatchAttributes.module.css";

class SwatchAttributes extends Component {
  constructor() {
    super();
  }
  render() {
    const { value, height, width } = this.props;

    return (
      <>
        <button
          key={value}
          className={styles["swatch--attribute"]}
          style={{
            background: `${value}`,
            height: `${height}`,
            width: `${width}`,
          }}
        />
      </>
    );
  }
}

export default SwatchAttributes;
