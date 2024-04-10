export default function iterateThroughObject(reportWithIterator) {
  // Initialize an array to hold all the employee names
  const names = [];

  // Use a for...of loop to iterate through the iterator
  for (const name of reportWithIterator) {
    names.push(name);
  }

  // Join all the names with ' | ' as separator and return the result
  return names.join(' | ');
}
