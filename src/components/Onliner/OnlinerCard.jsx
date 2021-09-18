import React from "react";
import styles from "./OnlinerCard.module.css";

export class OnlinerCard extends React.Component {
  render() {
    const { section, comments, text } = this.props;
    return (
      <div>
        <div className={styles.mainContainer}>
          <div className={styles.headerCard}>
            <div className={styles.sectionBg}>
              <div className={styles.sectionText}>{section}</div>
            </div>
            <div className={styles.commentsBg}>
              <div>{comments}</div>
            </div>
          </div>
          <div className={styles.cardText}>{text}</div>
        </div>
      </div>
    );
  }
}
