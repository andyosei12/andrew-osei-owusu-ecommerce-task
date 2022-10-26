import { Component } from "react";
import { connect } from "react-redux";
import {
  selectCurrencyDropdownOpen,
  selectCurrencySymbol,
} from "../store/selctors";
import { ReactComponent as ArrowDownIcon } from "../assets/arrowdown.svg";
import { ReactComponent as ArrowUpIcon } from "../assets/ArrowUp.svg";

import styles from "../styles/CurrencySwitcher.module.css";
import CurrencySwitchDropdown from "./CurrencySwitchDropdown";
import { toggleCurrencySwitchDropdown } from "../store/ui-slice";

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
