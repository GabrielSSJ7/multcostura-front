import React from "react";
import { Link } from "../routes";
import { connect } from "react-redux";

const IndexPage = () => {
  return (
    <>
      <Link route="/login">
        <a>Login</a>
      </Link>
    </>
  );
};

IndexPage.getInitialProps = ({ reduxStore }) => {
  return {};
};

export default connect(null, {})(IndexPage);
