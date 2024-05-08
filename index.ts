#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

const answer = await inquirer.prompt([
  { message: "Enter Your First Number", type: "number", name: "FirstNumber" },
  { message: "Enter Your Second Number", type: "number", name: "SecondNumber" },
  {
    message: "Select One Of The Operators To Perform The Action",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
// conditional operator
if (answer.Operator === "Addition") {
  console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.Operator === "Subtraction") {
  console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.Operator === "Multiplication") {
  console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.Operator === "Division") {
  console.log(answer.FirstNumber / answer.SecondNumber);
} else {
  console.log("Enter valid number");
}
//comment