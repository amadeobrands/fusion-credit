import React from "react"
import styles from "../styles/Home.module.css"

const ScoreCard = ({ score }) => {

  return <div>
    <p>Your score is: <span className={styles.accounttgt}>{score.score}</span></p>
    <p>Created at: <span className={styles.accounttgt}>{(new Date(score.timestamp)).toLocaleString()}</span></p>
    <p>With Fusion Score <span className={styles.accounttgt}>Version {score.version}</span></p>
    <p className={styles.ethaddress}>Addresses: {score.address}</p>
  </div> 
}

export default ScoreCard