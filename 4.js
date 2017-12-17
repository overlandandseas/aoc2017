// part 1
function solve(str) {
  return str.split('\n').reduce((acc, val, index, arr) => {
    let words = val.split(' ')
    let set = new Set(words)
    return acc + (words.length === set.size ? 1 : 0)
  }, 0)
}

 // part 2
function solve2(str) {
  return str.split('\n').reduce((acc, val, index, arr) => {
    let words = val.split(' ').map(i => i.split('').sort().join(''))
    let set = new Set(words)
    return acc + (words.length === set.size ? 1 : 0)
  }, 0)
}
