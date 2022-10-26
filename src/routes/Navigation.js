import { Component } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { ReactComponent as AppIcon } from "../assets/a-logo.svg";
import { Outlet } from "react-router-dom";

import CategoryMenu from "../components/CategoryMenu";
import CurrencySwitcher from "../components/CurrencySwitcher";
import CartIcon from "../components/CartIcon";

import styles from "../styles/Navigation.module.css";
export const GET_CURRENCIES = gql`
  query GetCurrencies {
    currencies {
      label
      symbol
    }
  }
`;
class Navigation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wrapper">
        <header className={styles.navContainer}>
          <CategoryMenu />
          <AppIcon />
          <div className="flex align-center">
            <Query query={GET_CURRENCIES}>{() => <CurrencySwitcher />}</Query>
            <CartIcon />
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    );
  }
}

export default Navigation;
