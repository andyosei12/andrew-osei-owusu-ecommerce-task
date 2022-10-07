import { Component } from "react";
import styles from "../styles/CategoryMenu.module.css";

class CategoryMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav>
        <ul className={styles["nav-wrapper"]}>
          <li>Women</li>
          <li>tech</li>
          <li>all</li>
        </ul>
      </nav>
    );
  }
}

export default CategoryMenu;
