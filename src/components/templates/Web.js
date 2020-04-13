import React from "react";
import axios from "axios";
import Head from "next/head";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "../web/Nav";
import Footer from '../web/Footer'

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

    @media(max-width: 1228px) {
      .media-1228px {      
        font-size: .7rem !important;
      }
    }

     @media(max-width: 950px) {
      .media-1228px {      
        font-size: .6rem!important;
      }

      .baixe-nosso-ap-responsivo {
        font-size: .7rem!important;
      }

      .arrow-responsive {
         border-width: 0 1px 1px 0;
      }
    }

    @media(max-width: 805px) {
      .media-1228px {      
        font-size: .5rem!important;
      }
    }
    
`;

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nick: ""
    };
  }

  componentDidMount() {
   //new Microsoft.Maps.Map(document.getElementById('map'), {})
   
  }

 

  render() {
    return (
      <div style={{ margin: 0, padding: 0 }}>
        <Head>
          <title>Multcostura</title>
          <script src={`http://www.bing.com/api/maps/mapcontrol?callback=loadMapScenario&key=${process.env.mapsKey}`} defer />
        </Head>
        <GlobalStyle />
        <Navbar />
        <div style={{ margin: 0, padding: 0, display: "flex", minHeight: '100vh' }}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Template;
