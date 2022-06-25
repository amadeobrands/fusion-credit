import Head from "next/head"
import React from "react"
import { useWeb3React } from "@web3-react/core"
import styles from "../styles/Home.module.css"
import EthAccount from "../components/EthAccount"

export default function Score() {
  const web3React = useWeb3React()
  const [score, setScore] = React.useState({score: null, version: null, timestamp: null})

  console.log(score)

  async function getScore() {
    // Get score from blockchain
    
    setScore({score: 600, version: 1, timestamp: 1656167800})
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Fusion Credit Score</title>
        <meta name="description" content="Retrieve Fusion Credit Score" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Retrieve Fusion Credit Score
        </h1>

        <p className={styles.description}>
          Retrieve Fusion Credit Score by entering an address
        </p>

        <EthAccount showDisconnect={false}/>

        {web3React.active && <>

          { score.score > 0 && <div><p>Your score is {score.score}</p></div> }

          { score.score === 0 && <p>You don't have a score</p> }

          { score.score === null && 
            <form className={styles.formctn} onSubmit={getScore}>
              <div>
                Address: <input className={styles.formfield} placeholder="Enter Address" />
              </div>
              <div className={styles.formbuttonctn}>
                <input className={styles.button} type="submit" value="Get Fusion Score" />
              </div> 
            </form>
          }

        </>}
      </main>
    </div>
  )
}