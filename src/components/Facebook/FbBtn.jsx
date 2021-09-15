import React from "react";
import styles from "./FbCard.module.css";

export class FbBtn extends React.Component {
  render() {
    const { btnTitle } = this.props;
    return <a className={styles.FbBtn}>{btnTitle}</a>;
  }
}
