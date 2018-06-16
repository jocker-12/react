import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect
} from "react-router-dom";
import propTypes from "prop-types";
export default class Hot extends React.Component {
  constructor(props, context) {
    super(props);
    let data = context.router.route.location.data;
    if (data && data["title"]) {
      window.localStorage.setItem("item", JSON.stringify(data));
    } else {
      data = {};
    }

    this.state = {
      data: {}
    };
    console.log(this.state.data);
  }
  componentDidMount() {
    if (!this.state.data["title"]) {
      this.setState({ data: JSON.parse(window.localStorage.getItem("item")) });
    }
  }
  render() {
    if (!this.state.data) {
      return null;
    }
    return (
      <div className="infos">
        <h2>{this.state.data.title}</h2>
        <div>{this.state.data.text}</div>
      </div>
    );
  }
}
Hot.contextTypes = {
  router: propTypes.object.isRequired
};
