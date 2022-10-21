import { Component } from "react";

import styles from "../styles/SecondaryButton.module.css";

class SecondaryButton extends Component {
  constructor() {
    super();
  }

  render() {
    const { children, py, px, fontSize, ...otherProps } = this.props;
    return (
      <button
        className={styles.button}
        style={{ padding: `${py} ${px}`, fontSize }}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
}

export default SecondaryButton;
