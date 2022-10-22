import { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./routes/Navigation";
import Category from "./routes/Category";
import "./styles/App.css";
import ProductDetails from "./routes/ProductDetails";
import Cart from "./routes/Cart";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route
              index
              path="/category/:categoryName"
              element={<Category />}
            />

            {/* Redirecting the home page to a category page */}
            <Route path="/" element={<Navigate to="/category/all" replace />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<ProductDetails />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
