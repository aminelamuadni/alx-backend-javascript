export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // Modify the existing 'task'
    task2 = false; // Modify the existing 'task2'
  }

  return [task, task2];
}
