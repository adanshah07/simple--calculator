#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select One Of The Operators To Perform The Action",
        type: "list",
        name: "Operater",
        choices: ["Addition", "Substraction", "Multipilication", "Divison"],
    },
]);
// conditional operater
if (answer.Operater === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operater === "Substraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operater === "Multipilication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operater === "Divison") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Enter valid number");
}
//comment
