import React from 'react'
import NotFound from './notfound'
import Layout from './layout'

export default class extends React.Component {
  static async getInitialProps({ req, query }) {
    try {
      return query
    } catch(error) {
      return { error: true }
    }
  }

  renderBody() {
    return (
      <Layout title="{this.props.blogpost.data.meta_title}" description="{this.props.blogpost.data.meta_description}" layout="{this.props.layout}">
        <article className="blog-post-article">
          blog post: {this.props.uid}
        </article>
      </Layout>
    )
  }

  render() {
    if(this.props.error) return <Layout layout="{this.props.layout}"><NotFound msg="this article doesn't exists." /></Layout>
    else return this.renderBody()
  }
}
