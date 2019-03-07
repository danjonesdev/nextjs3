import React from 'react'
import axios from 'axios'
import NotFound from './notfound'
import Layout from './layout'

export default class extends React.Component {

static async getInitialProps() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return {isLoaded: true, items: res.data}
  }

  renderBody() {
    const { error, isLoaded, items } = this.props;
    if (error) {
      return <div>Error: {error.message}</div>;
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

  render() {
    return this.renderBody()
  }
}
