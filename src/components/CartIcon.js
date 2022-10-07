import { Component } from "react";
import { ReactComponent as EmptyCartIcon } from "../assets/carticon.svg";

class CartIcon extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <EmptyCartIcon />
      </div>
    );
  }
}

export default CartIcon;
