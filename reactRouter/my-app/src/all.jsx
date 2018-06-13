import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const d = () => {
  return (
    <div>
      <span>我是英雄数据</span>
    </div>
  );
};
const a = props => {
  return (
    <div>
      <span>我是{JSON.stringify(props.location.name)}</span>
      <span>a接口</span>
    </div>
  );
};
const b = props => {
  return (
    <div>
      <span>{JSON.stringify(props.match.name)}</span>
      <span>b接口</span>
    </div>
  );
};
const c = props => {
  return (
    <div>
      <Router>
        <div>
          <p>
            <Link to="/c/one">点我</Link>
          </p>
          <p>
            <Link to="/c/two">你点我</Link>
          </p>

          <Switch>
            <Route
              path="/c/:position"
              component={props => {
                let date = +new Date();
                if (date % 2 == 0) {
                  return (
                    <div>
                      <p>{props.match.params.position}</p>
                      <span>52</span>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <p>{props.match.params.position}</p>
                      <span>521</span>
                    </div>
                  );
                }
              }}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
let contents = () => {
  return (
    <Router>
      <div>
        <p>
          <Link to="/">英雄数据</Link>
        </p>
        <p>
          <Link to={{ pathname: "/a", name: "红红火火" }}>红红火火</Link>
        </p>
        <p>
          <Link to="/b/b">策马奔腾</Link>
        </p>
        <p>
          <Link to={{ pathname: "/c", name: "草姓狍子" }}>草姓狍子</Link>
        </p>
        <Switch>
          <Route exact path="/" component={d} />
          <Route path="/a" component={a} />
          <Route path="/b/:name" component={b} />
          <Route path="/c" component={c} />
        </Switch>
      </div>
    </Router>
  );
};
export default contents;
