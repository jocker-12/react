import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Likes from "./home/likes.jsx";
import Pushs from "./home/push.jsx";
import Hot from "./home/hot.jsx";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["关注", "推荐", "热门"],
      ind: 0
    };
  }
  btnClick(ind) {
    console.log(ind);
    this.setState({
      ind
    });
  }
  render() {
    return (
      <div className="section">
        <div className="titBox">
          {this.state.list.map((item, index) => {
            return (
              <span
                key={index}
                onClick={() => {
                  this.btnClick(index);
                }}
              >
                {item}
              </span>
            );
          })}
        </div>
        {this.state.ind == 0 ? (
          <Likes />
        ) : this.state.ind == 1 ? (
          <Pushs />
        ) : (
          <Hot />
        )}
      </div>
    );
  }
}
