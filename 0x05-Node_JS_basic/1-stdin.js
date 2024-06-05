// Write the initial prompt to the user
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set the encoding for the input stream to read strings instead of Buffer objects
process.stdin.setEncoding('utf8');

// Handle incoming data when the stream becomes readable
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) { // Check if there is data to process
    // Output the name, trimming any extra newline character that might be included
    process.stdout.write(`Your name is: ${input}`);
  }
});

// Handle the end of input (e.g., user presses Ctrl+D)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
