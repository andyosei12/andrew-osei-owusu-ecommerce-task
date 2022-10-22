import { Component } from "react";

import styles from "../styles/SecondaryButton.module.css";

class SecondaryButton extends Component {
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

export default SecondaryButton;
