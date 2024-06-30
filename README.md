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

The EducationFunding smart contract emits three key events that capture critical data during its operation. The StudentRegistered event records detailed information about students when they register, including their name, university, programme, educational level, funding goal, deadline, region, and case description. The FundReceived event logs contributions from funders, specifying the student ID, funder address, and the amount of USDC contributed. Finally, the FundsWithdrawn event indicates when funds are automatically transferred to the student’s wallet after the deadline, detailing the student ID and the withdrawn amount.

[web](/web/README.md) folder contains all the frontend code
