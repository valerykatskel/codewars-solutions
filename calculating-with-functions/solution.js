function zero() {
    return parseNumber(0,arguments[0])
  }
  function one() {
    return parseNumber(1,arguments[0])
  }
  function two() {
    return parseNumber(2,arguments[0])
  }
  function three() {
    return parseNumber(3,arguments[0])
  }
  function four() {
    return parseNumber(4,arguments[0])
  }
  function five() {
    return parseNumber(5,arguments[0])
  }
  function six() {
    return parseNumber(6,arguments[0])
  }
  function seven() {
    return parseNumber(7,arguments[0])
  }
  function eight() {
    return parseNumber(8,arguments[0])
  }
  function nine() {
    return parseNumber(9,arguments[0])
  }
  
  function plus() {
    if (arguments[0] !== undefined) {
      return ['+', arguments[0]]
    }
  }
  function minus() {
    if (arguments[0] !== undefined) {
      return ['-', arguments[0]]
    }
  }
  function times() {
    if (arguments[0] !== undefined) {
      return ['*', arguments[0]]
    }
  }
  function dividedBy() {
    if (arguments[0] !== undefined) {
      return ['/', arguments[0]]
    }
  }
  
  function parseNumber(number,args) {
    if (args !== undefined) {
      if (args[0] === '*') return number * args[1]
      if (args[0] === '+') return number + args[1]
      if (args[0] === '-') return number - args[1]
      if (args[0] === '/') return Math.floor(number / args[1])
    } else return number
  }