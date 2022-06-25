import Head from "next/head"
import React from "react"
import { useWeb3React } from "@web3-react/core"
import styles from "../styles/Home.module.css"
import EthAccount from "../components/EthAccount"
import NetworkAddress from "../components/NetworkAddress"

export default function Home() {
  const web3React = useWeb3React()
  const [accounts, setAccounts] = React.useState([])
  const [chains, setChains] = React.useState([])
  const currAccountIndex = findAccount()
  const currChainIndex = findChain(web3React.chainId)
  const currChainName = (currChainIndex == -1) ? "Unsupported! Please select another Chain" : chains[currChainIndex].label

  React.useEffect(() => {
    fetch('/api/chain')
      .then(res => res.json())
      .then(data => setChains(data))    
  }, [])

  function findAccount() {
    if (!web3React.active || !web3React.account) 
      return null
    for (const [i, account] of accounts.entries()) {
      if (account.chainId === web3React.chainId &&
          account.address === web3React.account) {
        return i
      }
    }
    return -1
  }

  function findChain(chainId) {
    for (const [i, chain] of chains.entries()) {
      if (chain.chain_id == chainId) {
        return i
      }
    }
    return -1
  }

  async function addAccount() {
    if (currAccountIndex != -1)
      return
    const chainIndex = findChain(web3React.chainId)
    if (chainIndex == -1)
      return

    const newAccount = {
      chainId: web3React.chainId,
      address: web3React.account,
      network: chains[chainIndex].label,
      logo: chains[chainIndex].logo_url,
      isTest: chains[chainIndex].is_testnet,
    }

    // const res = await fetch('/api/hello', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     chainId: web3React.chainId,
    //     address: web3React.account,
    //     network: web3React.networkName,
    //   })
    // })
    // const data = await res.json()

    setAccounts(accounts.concat(newAccount))
  }

  async function makeFusion() {

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Fusion Credit Home</title>
        <meta name="description" content="Create your Fusion Credit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Fusion Credit!
        </h1>

        <p className={styles.description}>
          Add all the accounts you have access to create a more accurate Fusion Score.<br/>
          Fusion Credit uses Zero Knowledge Proof so added accounts are not made public.
        </p>

        <EthAccount showDisconnect={false}/>

        {web3React.active && <>

          <p>{accounts.length} Account(s) Added. To add more, select a new account with your wallet</p>
          {accounts.map(account =>  
            <NetworkAddress account={account} />
          )}

          {currAccountIndex != -1 ?
            <div className={styles.button} onClick={makeFusion}>Create Fusion Score</div> :
            accounts.length > 0 ?
            <p>To create Fusion Score, select one of the added accounts or add current account<br/><br/></p> :
            <p></p>
          }

          {currAccountIndex == -1 && 
            <>
              <div>
                <p>Current Account: {currChainName}</p>
                <p>Address: {web3React.account}</p>
              </div>
              <div>
                {currChainIndex != -1 &&
                  <button className={styles.button} onClick={addAccount}>Add This Account</button>
                }
              </div>
            </>
          }
        </>}
      </main>
    </div>
  )
}
