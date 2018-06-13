import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
let index = props => {
  return (
    <div>
      <span>{JSON.stringify(props.location.list)}</span>
      <span>我是首页</span>
    </div>
  );
};
let one = props => {
  return (
    <div>
      <span>{JSON.stringify(props.match.params.data)}</span>
      <span>我是oen</span>
    </div>
  );
};
let two = () => {
  return (
    <div>
      <p>
        <Link to="/b/bs">1.1</Link>
      </p>
      <p>
        <Link to="/b/bd">2.2</Link>
      </p>
      <Switch>
        <Route
          path="/b/:position"
          component={props => {
            let date = +new Date();
            if (date % 2 == 0) {
              return (
                <div>
                  <span>11</span>
                  <span>{props.match.params.position}</span>
                </div>
              );
            } else {
              return (
                <div>
                  <span>22</span>
                  <span>{props.match.params.position}</span>
                </div>
              );
            }
          }}
        />
      </Switch>
    </div>
  );
};
let Routers = () => {
  return (
    <Router>
      <div>
        <p>
          <Link to={{ pathname: "/", list: "嗷嗷嗷" }}>我是首页</Link>
        </p>
        <p>
          <Link to="/a/asd">红红火火</Link>
        </p>
        <p>
          <Link to="/b">草姓狍子</Link>
        </p>

        <Switch>
          <Route exact path="/" component={index} />
          <Route path="/a/:data" component={one} />
          <Route path="/b" component={two} />
        </Switch>
      </div>
    </Router>
  );
};
export default Routers;
