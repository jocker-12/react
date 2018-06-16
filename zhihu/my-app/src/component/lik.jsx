import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
export default class Lik extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section">
        <h1>我是关注</h1>
      </div>
    );
  }
}
