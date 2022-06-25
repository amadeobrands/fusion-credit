import React from "react"
import styles from "../styles/Home.module.css"
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

const connectors = {
    injected: new InjectedConnector({}),
    // Add other wallet connectors in the future
};

const EthAccount = ({ showNetwork=false, showAccount=false, showDisconnect=true }) => {
  const web3React = useWeb3React()

  if (web3React.active) {
      return <div>
        { showNetwork ? <span className={styles.wallet}>Network: {web3React.chainId} </span> : <></>}
        { showAccount ? <span className={styles.wallet}>Account: {web3React.account} </span> : <></>}
        { showDisconnect ? <span className={styles.button} onClick={web3React.deactivate}>Disconnect</span> : <></>}
      </div>
  }
  else {
    return <div className={styles.button} onClick={() => {
        web3React.activate(connectors.injected);
    }}>Connect Wallet</div>
  }
}

export default EthAccount