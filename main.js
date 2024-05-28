#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "plz enter a non-empty value";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "select the course to enroll",
        choices: ["Ms office", "Html", "Javascript", "Typescript", "Python"]
    }
]);
const tutionFees = {
    "Ms office": 2000,
    "Html": 2500,
    "Javascript": 3000,
    "Typescript": 3500,
    "Python": 4000
};
console.log(`\nTutionFees:${tutionFees[answer.courses]}/-\n`);
console.log(`Balance:${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "select payment method",
        choices: ["easypaisa", "jazz cash", "bank transfer"]
    },
    {
        name: "amount",
        type: "input",
        message: "transfer money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            ;
            return "please enter a non empty value";
        }
    }
]);
console.log(`\nyou select payment method ${paymentType.payment}\n`);
const tutionFee = tutionFees[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFee === paymentAmount) {
    console.log(`Congratulations you are enroled in ${answer.courses}.\n`);
}
else {
    console.log("invalid amount due to course\n");
}
