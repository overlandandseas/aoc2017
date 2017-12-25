//day 8

const sampleInput = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`

let registers = {}

function inc(register, amount) {
  registers[register] += amount
  return registers[register]
}

function dec(register, amount) {
  registers[register] -= amount
  return registers[register]
}
function solve(inputStr) {
  
  let result = inputStr.split('\n').forEach((str, index) => {
    let [reg, func, amount, ifCond, regCond, opCond, amCond] = str.split(' ')
    
    if(!registers[reg]) registers[reg] = 0
    if(!registers[regCond]) registers[regCond] = 0
    
    if (eval(`registers[regCond] ${opCond} ${amCond}`)) {
      // console.log('Performing:', `${func}("${reg}", ${amount})`)
      eval(`${func}("${reg}", ${amount})`)
      
    }
    
  })
  
  // Object.keys(registers).forEach(i => {
  //   console.log(i, registers[i])
  // })
  
  return registers[Object.keys(registers).sort((a, b) => {
    return registers[b] - registers[a]
  })[0]]
}

// let answer = solve(require('fs').readFileSync('day8input', 'utf-8'))
// console.log('answer:', answer);

// part 2
function solve2(inputStr) {
  let arr = []
  let result = inputStr.split('\n').forEach((str, index) => {
    let [reg, func, amount, ifCond, regCond, opCond, amCond] = str.split(' ')
    
    if(!registers[reg]) registers[reg] = 0
    if(!registers[regCond]) registers[regCond] = 0
    
    if (eval(`registers[regCond] ${opCond} ${amCond}`)) {
      let mixer = eval(`${func}("${reg}", ${amount})`)
      arr.push(mixer)
      
    }
    
  })
  
  // Object.keys(registers).forEach(i => {
  //   console.log(i, registers[i])
  // })
  
  return Math.max(...arr)
}

let answer = solve2(require('fs').readFileSync('day8input', 'utf-8'))
console.log('answer:', answer);