import React from "react";
import axios from "axios";
import NotFound from "./notfound";
import Layout from "./layout";

import sanityHandle from "../actions/sanityHandle";

export default class extends React.Component {
  static async getInitialProps() {
    return sanityHandle("https://jsonplaceholder.typicode.com/posts");
  }

  render() {
    const { error, isLoaded, items } = this.props;

    if (error) {
      return <div>Error: {error}</div>;
    } else if (!isLoaded) {
      return <div>Loading</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.title}>
              {item.title} {item.title}
            </li>
          ))}
        </ul>
      );
    }
  }
}
