import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect
} from "react-router-dom";
import Willroute from "../../willroute/willroute.jsx";
class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoading: false
    };
  }
  componentWillMount() {
    fetch(
      "https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/zhihu/attention",
      {}
    ).then(res => {
      res.json().then(data => {
        console.log(data);
        this.setState({
          list: data.data
        });
      });
    });
  }
  AddScroll(e) {
    if (this.state.isLoading) {
      return;
    }
    let position = e.target.getBoundingClientRect();
    let childPos = e.target.children[0].getBoundingClientRect();
    console.log(e.target.scrollTop, childPos.height, position.height);

    if (e.target.scrollTop > childPos.height - position.height - 10) {
      this.setState(
        {
          isLoading: true
        },
        () => {
          fetch(
            "https://www.easy-mock.com/mock/5af6599acf64741ceacf1c57/es6/zhihu/attention",
            {}
          ).then(res => {
            res.json().then(datas => {
              //concat不改变原数组

              this.setState({
                list: this.state.list.concat(datas.data),
                isLoading: false
              });
            });
          });
        }
      );
      console.log("夹在下一页");
    }
  }
  render() {
    return (
      <div
        className="contBox"
        onScroll={e => {
          this.AddScroll(e);
        }}
      >
        <div className="main">
          {this.state.list.length > 0
            ? this.state.list.map((item, index) => {
                return (
                  <div className="listBox" key={index}>
                    <Link
                      to={{
                        pathname: "/Aplation",
                        data: {
                          title: item.action_text,
                          text: item.target.excerpt
                        }
                      }}
                    >
                      <div className="title">
                        <img src={item.actors[0].avatar_url} />
                        <span>{item.action_text}</span>
                        <span>· 七分钟前</span>
                      </div>
                      <h1>{item.target.question.title}</h1>
                      <p
                        className="texts"
                        style={{ WebkitBoxOrient: "vertical" }}
                      >
                        {item.target.excerpt}
                      </p>
                      <div className="person">798赞同·88评论</div>
                    </Link>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
export default Likes;
