import React from "react";
export default class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="alertBox">
        {this.props.data.map((item, index) => {
          return (
            <div className="boxs" key={index}>
              <h1>{item.type}</h1>
              <div className="cont">
                {item.content.length > 0 ? item.content : <input type="text" />}
              </div>
              <div className="btns">
                {item.button.length == 1
                  ? item.button.map((items, ind) => {
                      return (
                        <span
                          key={ind}
                          onClick={() => {
                            this.props.close(item.id);
                          }}
                        >
                          {items}
                        </span>
                      );
                    })
                  : item.button.map((items, ind) => {
                      return (
                        <span
                          key={ind}
                          onClick={() => {
                            this.props.close(item.id);
                          }}
                        >
                          {items}
                        </span>
                      );
                    })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
