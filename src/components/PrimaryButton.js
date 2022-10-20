import { Component } from "react";

import styles from "../styles/PrimaryButton.module.css";

class PrimaryButton extends Component {
  constructor() {
    super();
  }

  render() {
    const { children, ...otherProps } = this.props;
    return (
      <button className={styles.button} {...otherProps}>
        {children}
      </button>
    );
  }
}

export default PrimaryButton;
