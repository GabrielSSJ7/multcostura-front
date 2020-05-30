import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import App from "./_app";
import Splash from '../src/components/web/Splash'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.setState({
      loading: false
    })
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          
        </Head>
        <body style={{ margin: 0, padding: 0}}>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    );
  }
}

export default MyDocument;
