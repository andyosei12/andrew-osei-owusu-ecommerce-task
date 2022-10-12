import { Component } from "react";
import styles from "../styles/TextAttributes.module.css";

class TextAttributes extends Component {
  constructor() {
    super();
  }

  render() {
    const { items, name } = this.props;
    return (
      <>
        <h1 className={styles["product--atribute-name"]}>{name}:</h1>
        <div className={styles.container}>
          {items.map((item) => (
            <button key={item.value} className={styles["product--attribute"]}>
              {item.value}
            </button>
          ))}
        </div>
      </>
    );
  }
}

export default TextAttributes;
