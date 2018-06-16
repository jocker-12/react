import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "../component/home";
import Lik from "../component/lik";
import My from "../component/my";
import Vip from "../component/vip";
import Aplation from "./aplation.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="wrap">
          <Route
            exact
            path="/"
            component={() => {
              return <Redirect to="/tab" />;
            }}
          />
          <div className="cont">
            <Switch>
              <Route path="/tab/index" exact component={Home} />
              <Route path="/tab/vip" component={Vip} />
              <Route path="/tab/my" component={My} />
              <Route path="/tab/lik" component={Lik} />
            </Switch>
          </div>
          <div className="footer">
            <NavLink to="/tab/index">首页</NavLink>
            <NavLink to="/tab/my">我的</NavLink>
            <NavLink to="/tab/vip">会员</NavLink>
            <NavLink to="/tab/lik">关注</NavLink>
          </div>
          <Route path="/Aplation" component={Aplation} />
        </div>
      </Router>
    );
  }
}
