import { Component } from "react";
import CategoryMenu from "../components/CategoryMenu";

import { ReactComponent as AppIcon } from "../assets/a-logo.svg";
import styles from "../styles/Navigation.module.css";
import CurrencySwitcher from "../components/CurrencySwitcher";
import CartIcon from "../components/CartIcon";

class Navigation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className={styles["nav-container"]}>
        <CategoryMenu />
        <AppIcon />
        <div className="flex">
          <CurrencySwitcher />
          <CartIcon />
        </div>
      </header>
    );
  }
}

export default Navigation;
