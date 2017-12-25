
function solveday6(str) {
  let banks = str.split('\t').map(Number)
  return recurseMe([banks.toString()], reallocate(banks))
}

function recurseMe(store, banks) {
  let str = banks.toString()

  if (store.includes(str)) {
    // console.log(str);
    return store.length - store.indexOf(str);
  } else {
    store.push(str)

    return recurseMe(store, reallocate(banks))
  }
}


function reallocate(banks) {
  let max = Math.max(...banks)
  let highestIndex = banks.findIndex(i => i === max)
  let each = Math.round(max / (banks.length - 1))
  // console.log('Max:', max, '\thighestIndex:', highestIndex, '\teach:', each);
  let result2 = []
  let c = (highestIndex + 1) % banks.length
  while (c !== highestIndex) {
    if (max - each >= 0) {
      max -= each
      result2[c] = banks[c] + each
    } else {
      result2[c] = banks[c]
    }
    c = (c + 1) % banks.length
  }
  result2[highestIndex] = max

  return result2
}

answer = solveday6(`14	0	15	12	11	11	3	5	1	6	8	4	9	1	8	4`)
console.log('answer:', answer);