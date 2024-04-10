export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // The task and task2 variables are not redeclared or modified here
  }

  return [task, task2];
}
