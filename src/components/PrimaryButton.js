import { Component } from "react";

import styles from "../styles/PrimaryButton.module.css";

class PrimaryButton extends Component {
  constructor() {
    super();
  }

  render() {
    const { children } = this.props;
    return <button className={styles.button}>{children}</button>;
  }
}

export default PrimaryButton;
