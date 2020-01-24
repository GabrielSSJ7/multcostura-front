import React from "react";
import axios from "axios";
import Head from "next/head";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import Sidebar from "../admin/Sidebar";

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: LithosPro
      src: url(${require("../../static/fonts/lithos-pro/LithosPro-Light.otf")})
    }    

    @font-face {
      font-family: Myriad
      src: url(${require("../../static/fonts/myriad-pro/MyriadPro-Bold.otf")})
    }

    .main-title {
      font-family: LithosPro !important;
      
    }
    * {
      font-family: Myriad
    }

    body {
      margin: 0;
      padding: 0;
    }
		.carousel div {
			max-height: 350px
    }
    
    .form-control {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
`;

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: ""
    };

    axios.defaults.baseURL = "http://localhost:4000";
  }

  componentDidMount() {
    if (localStorage.getItem("nick")) {
      nick = localStorage.getItem("nick");
      Axios.post(`${actionTypes.URL}validateToken`, {
        token: localStorage.getItem("authToken")
      })
        .then(res => {
          if (!res.data) {
            localStorage.removeItem("authToken");
            Axios.defaults.headers.common.Authorization = "";
          } else {
            this.props.temApelido();
          }
        })
        .catch(erro => {});
    }
  }

  render() {
    return (
      <div style={{ margin: 0, padding: 0 }}>
        <Head>
          <title>Multcostura</title>
          <style>{`
            
          `}</style>
        </Head>
        <GlobalStyle />

        <div style={{ margin: 0, padding: 0, display: "flex" }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Template;
