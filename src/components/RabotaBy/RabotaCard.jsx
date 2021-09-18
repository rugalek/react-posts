import React from "react";
import styles from "./RabotaCard.module.css";

export class RabotaCard extends React.Component {
  render() {
    const { job, company, city, text, followbtn, date } = this.props;
    return (
      <div className={styles.mainContainer}>
        <div className={styles.job}>{job}</div>
        <div className={styles.company}>{company}</div>
        <div className={styles.city}>{city}</div>
        <div className={styles.text}>{text}</div>
        <div className={styles.followbtn}>
          <div className={styles.followbtnText}>{followbtn}</div>
          <div className={styles.date}>{date}</div>
        </div>
      </div>
    );
  }
}
