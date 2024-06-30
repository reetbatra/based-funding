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

# EducationFunding Smart Contract

The BaseFunfing.sol smart contract is designed to facilitate funding for students’ education by allowing funders to contribute towards students’ educational expenses. The contract is implemented in Solidity and utilizes the OpenZeppelin library for security features such as reentrancy protection. The primary operations within this contract include student registration, funding contributions, and automatic fund disbursement after a specified deadline.

Key Components

	•	Student Struct: This struct holds the following information about each student:
	•	firstName: The first name of the student.
	•	lastName: The last name of the student.
	•	university: The university the student is attending.
	•	programme: The programme the student is enrolled in.
	•	educationLevel: The level of education (e.g., undergraduate, graduate).
	•	goalBudget: The funding goal in USDC.
	•	deadline: The funding deadline as a timestamp.
	•	region: The region of the student.
	•	description: A description of the student’s case.
	•	currentFunds: The current amount of funds raised.
	•	isFunded: A flag indicating if the funding goal has been reached.
	•	fundsWithdrawn: A flag indicating if the funds have been withdrawn.
	•	studentWallet: The wallet address of the student.
	•	Mappings:
	•	mapping(uint256 => Student) public students: A mapping that associates student IDs with their respective Student struct.
	•	Events:
	•	StudentRegistered: Emitted when a student registers.
	•	FundReceived: Emitted when a funder contributes to a student’s funding goal.
	•	FundsWithdrawn: Emitted when funds are withdrawn or automatically transferred to the student’s wallet after the deadline.

Functions

	•	Constructor: Initializes the contract with the USDC token contract address.
	•	registerStudent: Registers a new student with provided details such as name, university, programme, education level, funding goal, deadline, region, and description.
	•	Emits the StudentRegistered event.
	•	fundStudent: Allows funders to contribute to a student’s funding goal. The function checks that the funding period has not ended and that the funding goal is not exceeded. If the funding goal is reached, it updates the isFunded flag.
	•	Emits the FundReceived event.
	•	Uses the autoTransferFunds modifier to automatically transfer funds to the student’s wallet if the deadline has passed.
	•	autoTransferFunds (modifier): Automatically transfers funds to the student’s wallet if the deadline has passed and the funds have not yet been withdrawn.
	•	getStudentBasicDetails: Returns the basic details of a student such as first name, last name, university, programme, and education level.
	•	getStudentFundingDetails: Returns the funding details of a student such as goal budget, deadline, region, description, current funds, funding status, withdrawal status, and student wallet address.

Data Emitted and Usage

The contract captures and emits data related to student registrations, funding contributions, and fund disbursements. This data can be used to create real-time dashboards to monitor funding progress, analyze trends in student registrations, engage with funders by tracking their contributions, and ensure compliance by maintaining a transparent and auditable record of all transactions.

By leveraging these events, platform administrators can gain insights into user activity, funding dynamics, and overall platform performance, enabling data-driven decision-making and improvements.

[web](/web/README.md) folder contains all the frontend code
