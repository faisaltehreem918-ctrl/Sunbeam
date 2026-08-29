console.log("Want to find out your nutritiously perfect meal for a day?");

// In browser JavaScript, use prompt() to get input
let age = parseInt(prompt("Enter your age:"));

let gender = prompt("Enter gender (male/female):");

let height = parseFloat(prompt("Enter your height in cm:"));

let weight = parseFloat(prompt("Enter your weight in kg:"));


// Exercise levels
console.log("\nExercise levels");
console.log("1. heavy");
console.log("2. light");
console.log("3. moderate");
console.log("4. no exercise");

let exercise = parseInt(prompt("Choose between 1 to 4:"));


// Goals
console.log("\nGoals levels");
console.log("1. Loose weight");
console.log("2. Maintain weight");
console.log("3. Gain weight");

let goal = parseInt(prompt("Choose between 1 to 3:"));


// Calculate BMR
let bmr;

if (gender.toLowerCase() === "male") {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
} else {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
}


// Calculate calories according to exercise level
let calories;

if (exercise === 1) {
    calories = bmr * 1.2;
} 
else if (exercise === 2) {
    calories = bmr * 1.375;
} 
else if (exercise === 3) {
    calories = bmr * 1.55;
} 
else if (exercise === 4) {
    calories = bmr * 1.725;
} 
else {
    console.log("Invalid activity level.");
    calories = bmr;
}


// Adjust calories according to goal
if (goal === 1) {
    calories -= 300;
} 
else if (goal === 3) {
    calories += 300;
}


// Calculate protein, fat, carbohydrates and water
let protein = weight * 1.6;

let fat = (calories * 0.25) / 9;

let carbs = (calories - (protein * 4) - (fat * 9)) / 4;

let water = weight * 0.035;


// Output
console.log("\n===================================");
console.log("🍲 YOUR PERFECT DAY");
console.log("===================================");

console.log(`Estimated Calories: ${calories.toFixed(0)} kcal`);
console.log(`Protein: ${protein.toFixed(0)} g`);
console.log(`Carbohydrates: ${carbs.toFixed(0)} g`);
console.log(`Fat: ${fat.toFixed(0)} g`);
console.log(`Water: ${water.toFixed(1)} litres`);

console.log("\n✨ Remember: these are estimates, not medical advice.");