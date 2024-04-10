export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // This block should not alter the original values of task and task2
    const task = true; // This is a new 'task', scoped only within the if block
    const task2 = false; // This is a new 'task2', scoped only within the if block
  }

  return [task, task2];
}
