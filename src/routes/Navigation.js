import { Component } from "react";
import CategoryMenu from "../components/CategoryMenu";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import { ReactComponent as AppIcon } from "../assets/a-logo.svg";
import styles from "../styles/Navigation.module.css";
import CurrencySwitcher from "../components/CurrencySwitcher";
import CartIcon from "../components/CartIcon";
import { Outlet } from "react-router-dom";
import { getCurrencies } from "../store/currency-slice";

const GET_CURRENCIES = gql`
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

  dispatchGetCurrencies = (data) => {
    const { getCurrencies } = this.props;
    getCurrencies(data);
  };

  render() {
    return (
      <>
        <header className={styles["nav-container"]}>
          <CategoryMenu />
          <AppIcon />
          <div className="flex align-center">
            <Query
              query={GET_CURRENCIES}
              onCompleted={this.dispatchGetCurrencies}
            >
              {() => <CurrencySwitcher />}
            </Query>
            <CartIcon />
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies(item) {
    dispatch(getCurrencies(item));
  },
});

export default connect(null, mapDispatchToProps)(Navigation);
