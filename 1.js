// part 1
function solve(charArr) {
  return charArr.reduce((acc, val, index, arr) => {
    let next = index === arr.length - 1 ? arr[0] : arr[index + 1]
    if (val === next) {
      return acc + Number(val)
    } else {
      return acc
    }
  }, 0)
}

// part 2
function solve(charArr) {
  return charArr.split('').reduce((acc, val, index, arr) => {
    const mid = arr.length / 2
    let half = index < mid ? arr[index + mid] : arr[index + mid - arr.length]
    return val === half ? acc + Number(val) : acc
  }, 0)
}
