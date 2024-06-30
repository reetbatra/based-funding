# 🤝 basedfunding

Students often times have to pause their semester if they don't have enough money to pay for their tuition fees which means delaying their graduation. on the other hand, there are people out there that want to invest in a someone's education that they personally feel aligned with. there's a disconnect.
We want to close this gap by removing all barriers to funding a student's education and utilize the true power of crypto and decentralization by creating an open platform for students to seek funding.

# Video demo

[Video demo link](https://drive.google.com/file/d/17OHcmB2-SfFc0Mc--5TxYuHS3IAXkAao/view?usp=sharing)

# Builders

- Cheri I.
- Reet 
- Yulia 
- Khawla 
- Samar

# Tech Stack

- FE: Next.js, TailwindCSS, OnchainKit </br>
- BE: PostgresSQL, Prisma ORM, Fleek </br>
- Web3: Coinbase Smart Wallet, Base Sepolia, Foundry, Solidity, OpenZeppelin, Infura </br>

# Fleek functions

You can find the fleek function `recommend-fn.js` implementation in `app/api/cases/recommend-fn.js`. The deployed link is `https://screeching-rocket-melodic.functions.on-fleek.app`.

The function is being invoked by the `recommend` API in `api/cases/recommend/[balance]`. to use this, you should call the API and pass the balance of the user. the expected outcome is cases where `remainingAmount <= balance`.

Example:
`http://localhost:3001/api/cases/recommend/500.5`

## To deploy the function:

```
cd web
cd app/apis/cases
fleek functions deploy --name recommend-fn --path ./recommend-fn.js
```

## Case recommendation using Fleek

We've leveraged fleek's functions capabilities to set up a **recommendation system** that allows the **donor to discover student cases**.

It checks your current USDC balance and returns the cases where you can instantly donate to with the amount that you have and help a student reach their target.

The way that it works is that we read the user's balance and trigger an API which then calls the deployed fleek function while passing the balance and the active cases. Fleek function then filters those cases and performs calculations to figure out which case has a remaining amount that is less or equal to your balance.

Source: https://fleek.xyz/docs/cli/functions/

# Smart Contract

Our smart contract EducationFunding is deployed at `0x396F44b7bCe96ce44A7967Ac11Fe3712c2B03281` on Base Sepolia Testnet. It captures and emits data related to student registrations, funding contributions, and fund disbursements. It records detailed student information such as name, university, programme, educational level, funding goal, deadline, region, and case description when students register. It logs contributions from funders, including the student ID, funder address, and the amount of USDC contributed. Additionally, it locks funds and releases it to students’ wallets after the deadline, specifying the student ID and the withdrawn amount.

This data can be used to create real-time dashboards to monitor funding progress, analyze trends in student registrations, engage with funders by tracking their contributions, and ensure compliance by maintaining a transparent and auditable record of all transactions.

Contract -> \src/BaseFunding.sol

# How to start this locally?

```
cd web
```
Entering the client, after making sure about all the env variables.

```
yarn install
```

after installing all the dependencies, simply run the project

```
yarn dev
```

# Build Onchain Apps Template

This project has two main folders:

```bash
.
├── contracts
│   ├── src
│   ├── broadcast
│   ├── script
│   └── test
└── web
    ├── app
    └── src
```

[contracts](/contracts/README.md) folder contains all the solidity code

[web](/web/README.md) folder contains all the frontend code
