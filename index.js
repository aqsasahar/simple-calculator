#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstnumber" },
    { message: "Enter Second Number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operators to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// condiotional statement
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please  select valid operator");
}
