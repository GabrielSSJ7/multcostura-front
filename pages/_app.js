import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { withRouter } from "next/router";
import reduxStore from "../store";
import Splash from '../src/components/web/Splash'

//import "../static/css/index.css";

class MyApp extends App {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }
  componentDidMount(){ 
    this.setState({ loading: false })
  }
  render() {
    const { Component, pageProps } = this.props;
    return this.state.loading ? <Splash /> : (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRouter(MyApp);
