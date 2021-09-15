import React from "react";

export class TweetBtn extends React.Component {
  render() {
    const { hoverColor, count, description } = this.props;
    return (
      <div style={{ display: "flex", backgroundColor: hoverColor }}>
        <p>{description}:</p>
        <p>{count}</p>
      </div>
    );
  }
}
