import React from "react";
export default class Child extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log(this.props.data);
  }
  render() {
    return this.props.isShow ? (
      <div>
        {this.props.data.map((item, index) => {
          return (
            <p key={index}>
              <span>{item}</span>
            </p>
          );
        })}
      </div>
    ) : null;
  }
}
