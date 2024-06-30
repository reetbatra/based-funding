# Smart Contract 
Our smart contract EducationFunding is deployed at 0x396F44b7bCe96ce44A7967Ac11Fe3712c2B03281 on Base Sepolia Testnet. It captures and emits data related to student registrations, funding contributions, and fund disbursements. It records detailed student information such as name, university, programme, educational level, funding goal, deadline, region, and case description when students register. It logs contributions from funders, including the student ID, funder address, and the amount of USDC contributed. Additionally, it locks funds and releases it to students’ wallets after the deadline, specifying the student ID and the withdrawn amount.

This data can be used to create real-time dashboards to monitor funding progress, analyze trends in student registrations, engage with funders by tracking their contributions, and ensure compliance by maintaining a transparent and auditable record of all transactions.

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
