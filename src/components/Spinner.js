import { Component } from "react";
import styles from "../styles/Spinner.module.css";

class Spinner extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={styles.spinnerOverlay}>
        <div className={styles.spinnerContainer} />
      </div>
    );
  }
}

export default Spinner;
