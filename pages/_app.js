import App, {Container} from 'next/app'
import React from 'react'
import "../assets/stylesheets/main.scss"

export default class extends App {
  static async getInitialProps ({ Component, router, ctx, req }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>

        <Component {...Object.assign(pageProps)} />
      </Container>
    )
  }
}
