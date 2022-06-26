import React from "react"
import styles from "../styles/Home.module.css"
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector"

const connectors = {
    injected: new InjectedConnector({}),
    walletConnect: new WalletConnectConnector({
      rpcUrl: "https://kovan.optimism.io",
      bridge: "https://bridge.walletconnect.org",
      qrcode: true,
     }),
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
    return <div>
      <div className={styles.buttonct} onClick={() => {web3React.activate(connectors.injected);}}><img src="/img/metamask-logo-png-transparent.png" width="48"></img><br></br>Use MetaMask</div>
      <div className={styles.buttonct} onClick={() => {web3React.activate(connectors.walletConnect);}}><img src="/img/wallet-connect.png" width="60"></img><br></br>Use Wallet Connect</div>
    </div>
  }
}

export default EthAccount