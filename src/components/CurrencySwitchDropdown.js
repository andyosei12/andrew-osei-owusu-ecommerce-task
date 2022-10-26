import { Component } from "react";
import { connect } from "react-redux";
import client from "../client";
import { GET_CURRENCIES } from "../routes/Navigation";
import { changeCurrencyFormat } from "../store/currency-slice";
import { toggleCurrencySwitchDropdown } from "../store/ui-slice";
import { selectCurrencySymbol } from "../store/selctors";
import styles from "../styles/CurrencySwitcher.module.css";

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
    const { changeCurrency, toggleCurrencyDropdown } = this.props;
    changeCurrency(currency);
    toggleCurrencyDropdown();
  };

  render() {
    const { currencies } = this.state;
    const { activeCurrency } = this.props;

    return (
      <div className={styles.currencyDropdown}>
        <ul>
          {currencies?.map((currency) => (
            <li
              key={currency.symbol}
              className={styles.currencyDropdownList}
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
  toggleCurrencyDropdown() {
    dispatch(toggleCurrencySwitchDropdown());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencySwitchDropdown);
