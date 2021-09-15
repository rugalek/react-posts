import React from "react";
import { FbBtn } from "./FbBtn";
import styles from "./FbCard.module.css";

export class FbCard extends React.Component {
  render() {
    const { avatarUrl, name, edu, text, online } = this.props;
    return (
      <div className={styles.mainContainer}>
        <img className={styles.fbAvatar} src={avatarUrl} />
        <div className={styles.fbContainer}>
          <div className={styles.fbBody}>
            <p className={styles.fbTitle}>{name}</p>
            <p className={styles.fbDot}></p>
            <p className={styles.fbGrayText}>{edu}</p>
          </div>
          <p className={styles.fbText}>{text}</p>
          <div className={styles.fbFooter}>
            <FbBtn btnTitle="Like" />
            <p className={styles.fbDot}></p>
            <FbBtn btnTitle="Reply" />
            <p className={styles.fbDot}></p>
            <p className={styles.fbGrayText}>{online}</p>
          </div>
        </div>
      </div>
    );
  }
}
