import React from "react"
import styles from "../styles/Home.module.css"

const NetworkAddress = ({ account, onDelete }) => {
  return <div className={styles.card}>
    <p>Network: {account.network}</p>
    <p>Address: {account.address}</p>
  </div>
}

export default NetworkAddress