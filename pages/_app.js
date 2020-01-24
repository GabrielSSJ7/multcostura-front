import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { withRouter } from "next/router";
import reduxStore from "../store";

//import "../static/css/index.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRouter(MyApp);
