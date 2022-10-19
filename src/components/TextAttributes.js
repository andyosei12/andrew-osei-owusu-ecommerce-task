import { Component } from "react";
import styles from "../styles/TextAttributes.module.css";

class TextAttributes extends Component {
  constructor() {
    super();
  }

  render() {
    const { value } = this.props;

    return <button className={styles["text--attribute"]}>{value}</button>;
  }
}
export default TextAttributes;
