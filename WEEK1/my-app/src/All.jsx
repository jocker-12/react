import React from "react";
import Dialog from "./Dialog.jsx";
export default class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          type: "alert",
          id: 0,
          content: "操作成功",
          button: ["确定"]
        },
        {
          type: "confirm",
          id: 1,
          content: "确定执行操作",
          button: ["取消", "确定"]
        },
        {
          type: "prompt",
          id: 2,
          content: "",
          button: ["取消", "确定"]
        }
      ],
      process: []
    };
  }
  close(id) {
    let process = this.state.process;
    process = [];
    this.setState({
      process
    });
  }
  setData(index) {
    let process = this.state.process;
    process = this.state.data[index];
    let datas = [];
    datas.push(process);
    this.setState(
      {
        process: datas
      },
      () => {
        console.log(this.state.process);
      }
    );
  }
  render() {
    return (
      <div className="wrap">
        <ul className="list">
          {this.state.data.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  this.setData(index);
                }}
              >
                打开{item.type}提示框
              </li>
            );
          })}
        </ul>
        {this.state.process.length > 0 ? (
          <Dialog data={this.state.process} close={this.close.bind(this)} />
        ) : null}
      </div>
    );
  }
}
