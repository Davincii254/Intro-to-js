// //  Say hello   world
// function sayHello() {
//     console.log("Hello, World!");
// }

// sayHello();


// // Adding numbers
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// const sum = addNumbers(5, 3);
// console.log("Sum:", sum);


// // Conditional Statements
// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// const result = checkEvenOrOdd(7);
// console.log("Number is:", result);


// // String manupilation
// function manipulateString(inputString) {
//     const length = inputString.length;
//     const uppercase = inputString.toUpperCase();
//     return { length, uppercase };
// }

// const stringInfo = manipulateString("JavaScript is fun!");
// console.log("String Length:", stringInfo.length);
// console.log("Uppercase:", stringInfo.uppercase);


// // Arrays and Loops
// function calculateArraySum(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }

// const numbers = [1, 2, 3, 4, 5];
// const arraySum = calculateArraySum(numbers);
// console.log("Array Sum:", arraySum);

// // User INteraction
// function greetUser() {
//     const userName = prompt("Enter your name:");
//     if (userName) {
//         console.log("Hello, " + userName + "!");
//     } else {
//         console.log("Hello, World!");
//     }
// }

// greetUser();

// // Logical AND
// const isUserLoggedIn = true;
// const isAdmin = true;
// const canAccessAdminPanel = isUserLoggedIn && isAdmin;
// console.log(canAccessAdminPanel); // Output: true


// // Logical OR
// // const hasSilverMembership = false;
// // const hasGoldMembership = true;
// // const canAccessPremiumContent = hasSilverMembership || hasGoldMembership;
// // console.log(canAccessPremiumContent); // Output: true


// // Logical NOT
// // const hasSilverMembership = false;
// // const hasGoldMembership = true;
// // const canAccessPremiumContent = hasSilverMembership || hasGoldMembership;
// // console.log(canAccessPremiumContent); // Output: true

// Function to calculate the factorial of a number


let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById("display").value = displayValue;
    } catch (error) {
        displayValue = "Error";
        document.getElementById("display").value = displayValue;
    }
}