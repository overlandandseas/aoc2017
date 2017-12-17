
function solveday5(str) {
  let instructions = str.split('\n').map(Number)
  console.log(instructions.length);
  return recurseArray(instructions, 0, 0)
}

function solvenonrec(str) {
  let index = 0
  let iterations = 0
  let instructions = str.split('\n').map(Number)
  while( index < instructions.length && index > -1 ) {
    let next = instructions[index] + index;
    instructions[index] ++;
    index = next;
    iterations ++;
  }
  return iterations
}


function solvenonrecpart2(str) {
  let index = 0
  let iterations = 0
  let instructions = str.split('\n').map(Number)
  while( index < instructions.length && index > -1 ) {
    let next = instructions[index] + index;
    if (instructions[index] >= 3) instructions[index]--
    else instructions[index]++

    index = next;
    iterations ++;
  }
  return iterations
}


function recurseArray(arr, index, step) {
  let next = arr[index]
  if (next < arr.length || next > 0) {
    arr[index] = next + 1
    step++
    return recurseArray(arr, next + index, step)
  } else {
    return step
  }
}
