import { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { changeCurrencyFormat } from "../store/currency-slice";
import { selectCurrencies } from "../store/selctors";
import styles from "../styles/CurrencySwitcher.module.css";

class CurrencySwitchDropdown extends Component {
  constructor() {
    super();
  }

  changeCurrencyFormat = (currency) => {
    const { changeCurrency } = this.props;
    changeCurrency(currency);
  };

  render() {
    const {
      currencies: { currencies },
    } = this.props;

    return (
      <div className={styles["currency-dropdown"]}>
        <ul>
          {currencies.map((currency) => (
            <li
              key={currency.symbol}
              className={styles["currency-dropdown__list"]}
            >
              <button
                onClick={this.changeCurrencyFormat.bind(null, currency.symbol)}
              >
                {currency.symbol} {currency.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currencies: selectCurrencies,
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrency(currency) {
    dispatch(changeCurrencyFormat(currency));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencySwitchDropdown);
