// part 1
function solve(n) {
  if(n === 1) return 0
  let vert =  Math.round(Math.sqrt(n) / 2)
  let closeEdge = Math.pow(getNthOddNumber(vert), 2)
  let centers = [closeEdge - vert,
                 closeEdge - vert * 3,
                 closeEdge - vert * 5,
                 closeEdge - vert * 7]
  return vert + Math.min( ...centers.map(i => Math.abs(n - i)))
}

function getNthOddNumber(n) {
  let arr = [1]
  for(var c = 1; c <= n; c++) {
    arr.push(arr[c-1] + 2)
  }
  return arr[n]
}

// part 2
function solve(n) {
  let num = new Number(1)
  while (num <= n ){
    num = addSpiral(num)
  }
  return num
}



function addSpiral(pane) {

  let { left, right, top, bot } = pane

  // is none add right 1
  if(!left && !right && !top && !bot) {
    console.log('!left && !right && !top && !bot : RIGHT', pane)
    let num = new Number(pane)
    num.left = pane
    return pane.right = num
  }

  // is one left add top 2
  if(left && !right && !top && !bot) {
    console.log('left && !right && !top && !bot : TOP', pane)
    let num = new Number(pane +
      pane.left +
      (pane.left.top || 0) +
      (pane.left.top && pane.left.top.top || 0))

    num.bot = pane
    num.left = pane.left.top
    return pane.top = num
  }

  // is one bottom add left 4 / 122
  if(!left && !right && !top && bot) {
    console.log('!left && !right && !top && bot : LEFT', pane)
    let num = new Number(pane +
      pane.bot +
      (pane.bot.left || 0) +
      (pane.bot.left && pane.bot.left.left || 0))
    num.right = pane
    num.bot = pane.bot.left
    return pane.left = num
  }

  // is right and is bottom add left 5 / 147 / 133
  if(!left && right && !top && bot) {
    console.log('!left && right && !top && bot : LEFT', pane)
    let num = new Number(pane +
      pane.bot +
      (pane.bot.left || 0) +
      (pane.bot.left && pane.bot.left.left || 0))

    num.right = pane
    num.bot = pane.bot.left
    return pane.left = num
  }

  // is one right add down 10 / 304
  if(!left && right && !top && !bot) {
    console.log('!left && right && !top && !bot : DOWN', pane)
    let num = new Number(pane +
      pane.right +
      (pane.right.bot || 0) +
      (pane.right.bot && pane.right.bot.bot || 0))

      num.top = pane
      num.right = pane.right.bot
      return pane.bot = num
  }

  // is right and top add down 11 / 330 / 351
  if(!left && right && top && !bot) {
    console.log('!left && right && top && !bot : DOWN', pane)
    let num = new Number(pane +
      pane.right +
      (pane.right.bot || 0) +
      (pane.right.bot && pane.right.bot.bot || 0))

      num.top = pane
      num.right = pane.right.bot
      return pane.bot = num
  }

  // is one top add right 23 / 747
  if (!left && !right && top && !bot) {
    console.log('!left && !right && top && !bot : RIGHT', pane)
    let num = new Number(pane +
    pane.top +
    pane.top.right +
    (pane.top.right && pane.top.right.right || 0))

    num.left = pane
    num.top = pane.top.right
    return pane.right = num
  }

  // is left and bottom add top 57 / 59
  if(left && !right && !top && bot) {
    console.log('left && !right && !top && bot : TOP', pane)
    let num = new Number(
      pane +
      pane.left +
      (pane.left.top || 0) +
      (pane.left.top && pane.left.top.top || 0))

      num.bot = pane
      num.left = pane.left.top
      return pane.top = num
  }

  // is left and top add right
  if (left && !right && top && !bot) {
    console.log('left && !right && top && !bot : RIGHT', pane)
    let num = new Number(pane +
      pane.top +
      (pane.top.right || 0) +
      (pane.top.right && pane.top.right.right || 0))

      num.left = pane
      num.top = pane.top.right
      return pane.right = num
  }

}
