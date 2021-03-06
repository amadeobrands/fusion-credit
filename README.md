<img src="img/fusion-credit-wb.png" width="300">

# Fusion Credit
Fusion Credit creates a FusionScore that will represent a universal reputation score with privacy in mind for the #DeFi markets.

Fusion Credit creates a credit score called the “FusionScore” based on multiple addresses and chains while keeping the account information private. Digital signatures are used to ensure account ownership, and zero knowledge proofs are used to hide the account information and ensure the credit score calculation is done correctly. 

~~~
Frontend: Next.js, Web3-React, SnarkJS, circom
Backend: Solidity, Hardhat, SnartJS Verifier
~~~
<img src="img/fusion-score.jpg" width="500">

The high level FusionScore is rule based and can be made up with the following logical components. Machine learning can be used to create individual component scores.<br>
Longevity – Amount of time since the account was created<br>
Activity – Transactions volume, frequency, type, etc.<br>
Equity – Assets and properties owned, such as account balance, tokens, NFT’s<br>
Diversity – Interactions with different types of service<br>
Specialty – Depth of experience in a particular type of service<br>
Propriety – Having good behavior and not associated with criminals<br>
Ubiquity – Using multiple accounts and L1/L2 networks, or even off chain data<br>

In our slide deck we have a more in-depth representation of how it works and what technology is used. After this hackathon and validation of the concept, we plan to expand the logical components that we use and harden out algorithms.

## Setup
Requirements:
  - NPM
  - Hardhat
```
$ npm install
$ npm run dev
```

## Contracts
<a href="https://github.com/amadeobrands/fusion-credit/blob/main/contracts/FusionCredit.sol">FusionCredit.sol</a><br>
<a href="https://github.com/amadeobrands/fusion-credit/blob/main/contracts/FusionScoreV1Verifier.sol">FusionScoreV1Verifier.sol</a>

## Resources
<a href="https://fusion-credit-blrc4sy5e-amadeobrands.vercel.app/">Live Demo!</a><br>
<a href="https://www.loom.com/share/02b0862eba4b44a58e4c60c23e9074b7">Demo Video</a><br>
<a href="https://github.com/amadeobrands/fusion-credit/blob/main/presentation/Fusion%20Credit%20Intro%20-%20Brainstorm%20ideas.pdf">Fusion Credit brainstorm paper</a><br>
<a href="https://github.com/amadeobrands/fusion-credit/blob/main/presentation/Fusion%20Credit%20-%20FusionScore%20V1.pdf">Slide deck Fusion Credit</a>





