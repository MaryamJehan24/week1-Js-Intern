// Logical Operators
// && (Logical AND)
// || (Logical OR)
// ! (Logical NOT)

const temperature = 28;
const isSunny = true;

// Logical AND
if (temperature > 20 && isSunny == true) {
    console.log("It is a good day for a picnic");
} else {
    console.log("It is not a good day for a picnic");
}

// Logical OR
if (temperature > 35 || isSunny == true) {
    console.log("You can enjoy outdoor activities");
} else {
    console.log("Stay indoors today");
}

// Logical NOT
if (!isSunny) {
    console.log("The weather is cloudy");
} else {
    console.log("The weather is sunny");
}