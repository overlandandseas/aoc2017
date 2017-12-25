// part 2
const fs = require('fs')

function solve(str) {

  // populate everything
  let programs = {}
  let programArray = str.split('\n').map((val, index, arr) => {
    let program = {}
    let [nameWeight, subTowers] = val.split(' -> ')

    if (subTowers) {
      program.subTowers = subTowers.split(', ')
    }

    let [name, weight] = nameWeight.split(' ')
    program.programName = name
    program.weight = eval(weight) // i know..

    return programs[name] = program

  })

  // attach references
  programArray.forEach((val, index, arr) => {
    if (Array.isArray(val.subTowers)) {
      val.subTowers = val.subTowers.map(i => programs[i])
    }
  })


  let result = programArray.map((val, index, arr) => {
    return {
      name: val.programName,
      holding: getDepth(val, 0),
      // weight: getWeight(val, val.weight)
    }
  }).sort((a, b) => b.holding - a.holding)

  return result[0].name
}

// part 2
function solve2(str) {

  // populate everything
  let programs = {}
  let programArray = str.split('\n').map((val, index, arr) => {
    let program = {}
    let [nameWeight, subTowers] = val.split(' -> ')

    if (subTowers) {
      program.subTowers = subTowers.split(', ')
    }

    let [name, weight] = nameWeight.split(' ')
    program.programName = name
    program.weight = eval(weight) // i know..

    return programs[name] = program

  })

  // attach references
  programArray.forEach((val, index, arr) => {
    if (Array.isArray(val.subTowers)) {
      val.subTowers = val.subTowers.map(i => programs[i])
    }
  })
  
  
  return programArray.map(val => {
    val.holding = getDepth(val, 0)
    return val
  })
  .sort((a, b) => {
    return a.holding - b.holding
  })
  .map(val => {
    val.totalWeight = getWeight(val)
    return val
  })
  
  
  // return programArray
  
}

function getDepth(program, depth) {
  if(Array.isArray(program.subTowers)) {
    return Math.max(...program.subTowers.map(i => getDepth(i, depth + 1)))
  } else {
    return depth
  }
}

function getWeight(program) {
  return program.subTowers.reduce((acc, val, index, arr) => acc + val.weight, program.weight || '')
}
function allEqual(arr) {
  let equal = true
  let peak
  arr.forEach(val => {
    if (!equal) return
    if(!peak) peak = val
    if(peak === val) return
    equal = false
  })
}

function checkDifference(program) {
  if (Array.isArray(program.subTowers)) {
    
    let yoo = Math.max(...program.weights) - Math.min(...program.weights)
    let taggedIndex = program.weights.findIndex((val, index, arr) => {
      return !(arr.filter((v, i) => i !== index).includes(val))
    })
    
    if (yoo) {
      console.log(program.weight, yoo, taggedIndex);
      console.log('answer:', Math.abs(program.subTowers[taggedIndex].weight - yoo));
    }
    return yoo
  } else {
    return false
  }
}



let answer = solve2(fs.readFileSync('./day7input', 'utf-8'))
answer.filter(i => Array.isArray(i.subTowers)).forEach(i => console.log(i.programName, i.weight))
