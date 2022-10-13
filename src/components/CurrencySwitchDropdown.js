import { Component } from "react";
import { connect } from "react-redux";
import { changeCurrencyFormat } from "../store/currency-slice";
import client from "../client";
import styles from "../styles/CurrencySwitcher.module.css";
import { GET_CURRENCIES } from "../routes/Navigation";

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
    const { changeCurrency } = this.props;
    changeCurrency(currency);
  };

  render() {
    const { currencies } = this.state;

    return (
      <div className={styles["currency-dropdown"]}>
        <ul>
          {currencies?.map((currency) => (
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

const mapDispatchToProps = (dispatch) => ({
  changeCurrency(currency) {
    dispatch(changeCurrencyFormat(currency));
  },
});

export default connect(null, mapDispatchToProps)(CurrencySwitchDropdown);
