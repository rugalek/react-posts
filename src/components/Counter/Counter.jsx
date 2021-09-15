import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  onClickPlus = () => {
    this.setState({ count: ++this.state.count });
  };
  onClickMinus = () => {
    this.setState({ count: --this.state.count });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <button onClick={this.onClickMinus}>-</button>
        <p style={{ fontSize: 50 }}>{this.state.count}</p>
        <button onClick={this.onClickPlus}>+</button>
      </div>
    );
  }
}
