// part 1
function solve(str) {
  return str.split('\n').reduce((acc, val, index, arr) => {
    let innerArr = val.split('\t').map(Number)
    return acc + Math.max(...innerArr) - Math.min(...innerArr)
  }, 0)
}


// part 2
function solve(str) {
  return str.split('\n').reduce((acc, val, index, arr) => {
    let innerArr = val.split('\t').map(Number)
    return acc + findDivision(innerArr)
  }, 0)
}

function findDivision(arr) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] % arr[j] === 0) {
          return arr[i] / arr[j]
        }
      }
    }
  }
}
