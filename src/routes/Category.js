import { Component } from "react";
import withRouter from "../components/WithRouter";

class Category extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      router: { params },
    } = this.props;

    return <h1>Category page: {params.categoryName}</h1>;
  }
}

export default withRouter(Category);
