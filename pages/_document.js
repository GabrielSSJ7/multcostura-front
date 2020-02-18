import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import App from "./_app";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

 

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <script src={`http://www.bing.com/api/maps/mapcontrol?callback=loadMapScenario&key=${process.env.mapsKey}`} />
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
