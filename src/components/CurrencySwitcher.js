import { Component } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrencySymbol } from "../store/selctors";
import { ReactComponent as ArrowDownIcon } from "../assets/arrowdown.svg";
import { ReactComponent as ArrowUpIcon } from "../assets/ArrowUp.svg";

import styles from "../styles/CurrencySwitcher.module.css";
import CurrencySwitchDropdown from "./CurrencySwitchDropdown";

class CurrencySwitcher extends Component {
  constructor() {
    super();
    this.state = {
      currencyDropdown: false,
    };
  }

  changeCurrencyHandler = () => {
    this.setState((state) => ({
      currencyDropdown: !state.currencyDropdown,
    }));
  };

  render() {
    const { currencyDropdown } = this.state;
    const { currencySymbol } = this.props;
    return (
      <div className={styles.container}>
        <button
          className={styles["currency-switch__btn"]}
          onClick={this.changeCurrencyHandler}
        >
          <h2>{currencySymbol}</h2>
          {!currencyDropdown ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </button>
        {currencyDropdown && <CurrencySwitchDropdown />}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currencySymbol: selectCurrencySymbol,
});

export default connect(mapStateToProps)(CurrencySwitcher);
