import { Component } from "react";
import styles from "../styles/TextAttributes.module.css";

class TextAttributes extends Component {
  constructor() {
    super();
  }

  render() {
    const { value, ...otherProps } = this.props;

    return (
      <button className={styles.textAttribute} {...otherProps}>
        {value}
      </button>
    );
  }
}
export default TextAttributes;
