/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from "react";
import { connect } from "react-redux";
import {
  selectCurrencyDropdownOpen,
  selectCurrencySymbol,
} from "../store/selctors";
import { ReactComponent as ArrowDownIcon } from "../assets/arrowdown.svg";
import { ReactComponent as ArrowUpIcon } from "../assets/ArrowUp.svg";

import CurrencySwitchDropdown from "./CurrencySwitchDropdown";
import { toggleCurrencySwitchDropdown } from "../store/ui-slice";
import styles from "../styles/CurrencySwitcher.module.css";

class CurrencySwitcher extends Component {
  constructor() {
    super();
  }

  changeCurrencyHandler = () => {
    const { toggleCurrencySwitchDropdown } = this.props;
    toggleCurrencySwitchDropdown();
  };

  render() {
    const { currencySymbol, currencyDropdownOpen } = this.props;
    return (
      <>
        {currencyDropdownOpen && (
          <div
            className={styles.currencyDropdownWrapper}
            onClick={currencyDropdownOpen && this.changeCurrencyHandler}
          />
        )}
        <div className={styles.container}>
          <button
            className={styles["currency-switch__btn"]}
            onClick={this.changeCurrencyHandler}
          >
            <h2>{currencySymbol}</h2>
            {!currencyDropdownOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </button>
          {currencyDropdownOpen && <CurrencySwitchDropdown />}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencySymbol: selectCurrencySymbol(state),
  currencyDropdownOpen: selectCurrencyDropdownOpen(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCurrencySwitchDropdown() {
    dispatch(toggleCurrencySwitchDropdown());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);
