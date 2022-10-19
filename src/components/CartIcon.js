import { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as EmptyCartIcon } from "../assets/carticon.svg";
import { selectCartOpen } from "../store/selctors";
import { toggleMiniCartOpen } from "../store/ui-slice";
import MiniCart from "./MiniCart";
class CartIcon extends Component {
  constructor() {
    super();
  }

  toggleCartOpenHandler = () => {
    const { toggleCartOpen } = this.props;
    toggleCartOpen();
  };

  render() {
    const { cartOpen } = this.props;
    return (
      <>
        <button className="btn" onClick={this.toggleCartOpenHandler}>
          <EmptyCartIcon />
        </button>
        {cartOpen && <MiniCart />}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartOpen() {
    dispatch(toggleMiniCartOpen());
  },
});

const mapStateToProps = createStructuredSelector({
  cartOpen: selectCartOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
