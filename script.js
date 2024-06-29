// Exercise 1: maxOfTwoNumbers
const maxOfTwoNumbers = (x, y) => {
  return x >= y ? x : y;
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

// Exercise 2: isAdult
const isAdult = (age) => {
  return age >= 18 ? 'Adult' : 'Minor';
}

console.log('Exercise 2 Result:', isAdult(21));

// Exercise 3: isCharAVowel
const isCharAVowel = (char) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char.toLowerCase());
}

console.log('Exercise 3 Result:', isCharAVowel("a"));

// Exercise 4: generateEmail
const generateEmail = (name, domain) => {
  return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// Exercise 5: greetUser
const greetUser = (name, timeOfDay) => {
  return `Good ${timeOfDay}, ${name}!`;
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

// Exercise 6: maxOfThree
const maxOfThree = (x, y, z) => {
  return Math.max(x, y, z);
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

// Exercise 7: calculateTip
const calculateTip = (billAmount, tipPercentage) => {
  return billAmount * (tipPercentage / 100);
}

console.log('Exercise 7 Result:', calculateTip(50, 20));

// Exercise 8: convertTemperature
const convertTemperature = (temp, scale) => {
  if (scale === 'C') {
    return (temp * 9/5) + 32;
  } else if (scale === 'F') {
    return (temp - 32) * 5/9;
  } else {
    throw new Error('Unknown scale');
  }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

// Exercise 9: basicCalculator
const basicCalculator = (a, b, operation) => {
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      throw new Error('Unknown operation');
  }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

// Exercise 10: calculateGrade
const calculateGrade = (score) => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

console.log('Exercise 10 Result:', calculateGrade(85));

// Exercise 11: createUsername
const createUsername = (firstName, lastName) => {
  const firstPart = firstName.substring(0, 3);
  const lastPart = lastName.substring(0, 3);
  const totalLength = firstName.length + lastName.length;
  return `${firstPart}${lastPart}${totalLength}`;
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

// Exercise 12: numArgs
const numArgs = (...args) => {
  return args.length;
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));