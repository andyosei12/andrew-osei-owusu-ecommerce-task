import { Component } from "react";
import styles from "../styles/SwatchAttributes.module.css";

class SwatchAttributes extends Component {
  constructor() {
    super();
  }
  render() {
    const { name, items } = this.props;
    return (
      <>
        <h1 className={styles["product--atribute-name"]}>{name}:</h1>
        <div className={styles.container}>
          {items.map((item) => (
            <button
              key={item.value}
              style={{ background: `${item.value}` }}
              className={styles["product--attribute"]}
            />
          ))}
        </div>
      </>
    );
  }
}

export default SwatchAttributes;
