// Importing the readline module for handling input
const readline = require('readline');

// Creating an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Initial prompt to the user
console.log('Welcome to Holberton School, what is your name?');

// Event listener for line input
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  rl.close(); // Close the readline interface after getting input
});

// Event listener for closing the readline interface
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0); // Properly exit the script
});
