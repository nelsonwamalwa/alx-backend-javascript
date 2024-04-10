export default function taskBlock(trueOrFalse) {
  let task = false; // Changed var to let
  let task2 = true; // Changed var to let

  if (trueOrFalse) {
    let task = true; // Changed var to let
    let task2 = false; // Changed var to let
  }

  return [task, task2];
}

