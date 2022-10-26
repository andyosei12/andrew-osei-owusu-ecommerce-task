import { Component } from "react";
import { connect } from "react-redux";
import { changeCurrencyFormat } from "../store/currency-slice";
import client from "../client";
import styles from "../styles/CurrencySwitcher.module.css";
import { GET_CURRENCIES } from "../routes/Navigation";
import { toggleCurrencySwitchDropdown } from "../store/ui-slice";
import { selectCurrencySymbol } from "../store/selctors";

class CurrencySwitchDropdown extends Component {
  constructor() {
    super();
    this.state = {
      currencies: null,
    };
  }

  componentDidMount() {
    const { currencies } = client.readQuery({
      query: GET_CURRENCIES,
    });
    this.setState({
      currencies,
    });
  }

  changeCurrencyFormat = (currency) => {
    const { changeCurrency, toggleCurrencySwitchDropdown } = this.props;
    changeCurrency(currency);
    toggleCurrencySwitchDropdown();
  };

  render() {
    const { currencies } = this.state;
    const { activeCurrency } = this.props;

    return (
      <div className={styles["currency-dropdown"]}>
        <ul>
          {currencies?.map((currency) => (
            <li
              key={currency.symbol}
              className={styles["currency-dropdown__list"]}
              data-active--currency={currency.symbol === activeCurrency}
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

const mapStateToProps = (state) => ({
  activeCurrency: selectCurrencySymbol(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrency(currency) {
    dispatch(changeCurrencyFormat(currency));
  },
  toggleCurrencySwitchDropdown() {
    dispatch(toggleCurrencySwitchDropdown());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencySwitchDropdown);
