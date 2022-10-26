import { Component } from "react";
import { NavLink } from "react-router-dom";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import styles from "../styles/CategoryMenu.module.css";

const GET_ALL_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;
class CategoryMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav>
        <ul className={styles.navWrapper}>
          <Query query={GET_ALL_CATEGORIES}>
            {({ data }) => {
              return data?.categories.map((category) => (
                <li key={category.name}>
                  <NavLink
                    to={`/${category.name}`}
                    style={({ isActive }) => {
                      return {
                        textDecoration: "none",
                        color: isActive ? "#5ece7b" : "#1d1f22",
                        paddingBottom: isActive ? "1.5rem" : "",
                        borderBottom: isActive ? "1px solid #5ece7b" : "",
                      };
                    }}
                  >
                    {category.name}
                  </NavLink>
                </li>
              ));
            }}
          </Query>
        </ul>
      </nav>
    );
  }
}

export default CategoryMenu;
