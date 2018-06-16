import React from "react";
import Child from "./child.jsx";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: "one",
          isShow: false,
          lists: ["options1", "options2", "options3", "options4"]
        },
        {
          name: "two",
          isShow: false,
          lists: ["options5", "options6", "options7", "options8"]
        },
        {
          name: "three",
          isShow: false,
          lists: ["options9", "options10", "options11", "options12"]
        }
      ],
      child: []
    };
  }
  Slide(index) {
    console.log(index);
    let arr = this.state.child;
    let flag = this.state.list;
    flag.forEach((v, i) => {
      if (i == index) {
        v.isShow = !v.isShow;
      } else {
        v.isShow = false;
      }
    });
    arr = [];
    arr.push(this.state.list[index].lists);
    this.setState({
      child: arr,
      list: flag
    });
    console.log(this.state.child);
  }
  render() {
    return (
      <div>
        {this.state.list.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <span
                  onClick={e => {
                    this.Slide(index);
                  }}
                >
                  {item.name}
                </span>
              </div>
              <div>
                {this.state.child.length > 0 ? (
                  <Child
                    data={this.state.child}
                    isShow={this.state.list[index].isShow}
                  />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
