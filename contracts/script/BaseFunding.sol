// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract EducationFunding is ReentrancyGuard {
    struct Student {
        string firstName;
        string lastName;
        string university;
        string programme;
        string educationLevel;
        uint256 goalBudget;
        uint256 deadline;
        string region;
        string description;
        uint256 currentFunds;
        bool isFunded;
        bool fundsWithdrawn;
        address payable studentWallet;
    }

    mapping(uint256 => Student) public students;
    uint256 public studentCount;
    IERC20 public usdcToken;

    event StudentRegistered(
        uint256 indexed studentId,
        string firstName,
        string lastName,
        string university,
        string programme,
        string educationLevel,
        uint256 goalBudget,
        uint256 deadline,
        string region,
        string description
    );

    event FundReceived(
        uint256 indexed studentId,
        address indexed funder,
        uint256 amount
    );

    event FundsWithdrawn(
        uint256 indexed studentId,
        uint256 amount
    );

    // Constructor to initialize the USDC token contract address
    constructor(IERC20 _usdcToken) {
        usdcToken = _usdcToken;
    }

    // Modifier to automatically transfer funds to students after the deadline
    modifier autoTransferFunds(uint256 studentId) {
        Student storage student = students[studentId];
        if (block.timestamp >= student.deadline && !student.fundsWithdrawn && student.currentFunds > 0) {
            uint256 amount = student.currentFunds;
            student.currentFunds = 0;
            student.fundsWithdrawn = true;
            usdcToken.transfer(student.studentWallet, amount);
            emit FundsWithdrawn(studentId, amount);
        }
        _;
    }

    // Function for students to register themselves
    function registerStudent(
        string memory firstName,
        string memory lastName,
        string memory university,
        string memory programme,
        string memory educationLevel,
        uint256 goalBudget,
        uint256 deadline,
        string memory region,
        string memory description
    ) public {
        require(goalBudget > 0, "Budget must be greater than 0");
        require(deadline > block.timestamp, "Deadline must be in the future");

        studentCount++;
        students[studentCount] = Student({
            firstName: firstName,
            lastName: lastName,
            university: university,
            programme: programme,
            educationLevel: educationLevel,
            goalBudget: goalBudget,
            deadline: deadline,
            region: region,
            description: description,
            currentFunds: 0,
            isFunded: false,
            fundsWithdrawn: false,
            studentWallet: payable(msg.sender)
        });

        emit StudentRegistered(
            studentCount,
            firstName,
            lastName,
            university,
            programme,
            educationLevel,
            goalBudget,
            deadline,
            region,
            description
        );
    }

    // Function for funders to contribute to a student's goal budget
    function fundStudent(uint256 studentId, uint256 amount) public nonReentrant autoTransferFunds(studentId) {
        Student storage student = students[studentId];
        require(block.timestamp < student.deadline, "Funding period has ended");
        require(student.currentFunds + amount <= student.goalBudget, "Funding exceeds needed budget");
        require(!student.isFunded, "Student is already fully funded");

        usdcToken.transferFrom(msg.sender, address(this), amount);
        student.currentFunds += amount;

        if (student.currentFunds >= student.goalBudget) {
            student.isFunded = true;
        }

        emit FundReceived(studentId, msg.sender, amount);
    }

    // Function to get the details of a student
    function getStudentDetails(uint256 studentId) public view autoTransferFunds(studentId) returns (
        string memory firstName,
        string memory lastName,
        string memory university,
        string memory programme,
        string memory educationLevel,
        uint256 goalBudget,
        uint256 deadline,
        string memory region,
        string memory description,
        uint256 currentFunds,
        bool isFunded,
        bool fundsWithdrawn,
        address studentWallet
    ) {
        Student storage student = students[studentId];
        return (
            student.firstName,
            student.lastName,
            student.university,
            student.programme,
            student.educationLevel,
            student.goalBudget,
            student.deadline,
            student.region,
            student.description,
            student.currentFunds,
            student.isFunded,
            student.fundsWithdrawn,
            student.studentWallet
        );
    }
}