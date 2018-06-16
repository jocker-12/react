import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
let asd = () => {
  return (
    <div>
      <header>
        <Link>首页</Link>
        <Link>会员</Link>
        <Link>购物车</Link>
        <Link>我的</Link>
      </header>
      <section>
        <span>我是missfresh</span>
      </section>
      <footer>
        <Switch>
          <Route />
          <Route />
          <Route />
          <Route />
        </Switch>
      </footer>
    </div>
  );
};
