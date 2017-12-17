// day 7 question 1
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


function getDepth(program, depth) {
  if(Array.isArray(program.subTowers)) {
    return Math.max(...program.subTowers.map(i => getDepth(i, depth + 1)))
  } else {
    return depth
  }
}

let answer = solve(`pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`)
console.log("answer:", answer);
