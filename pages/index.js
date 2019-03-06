import React from 'react'
import NotFound from './notfound'
import Layout from './layout'

export default class extends React.Component {

  static async getInitialProps({ req }) {
    try {
      return true
    } catch(error) {
      return { error: true }
    }
  }

  renderBody() {
    return (
      <Layout title="{this.props.home.data.meta_title}" description="{this.props.home.data.meta_description}" layout="{this.props.layout}">
        <div className="homepage-slices-wrapper">
          hello
        </div>
      </Layout>
    )
  }

  render() {
    if(this.props.error) return <Layout layout="{this.props.layout}"><NotFound /></Layout>
    else return this.renderBody()
  }
}
