import React from "react";
import { Spin } from "antd";
import "antd/lib/spin/style/css";
export default WrapComponent => {
  // 非侵入式组件
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      let a = <Spin size="large" />;
      return (
        <div>
          {a}
          <WrapComponent />
        </div>
      );
    }
  };
};
