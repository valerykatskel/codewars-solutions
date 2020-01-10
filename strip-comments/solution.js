function solution(input, markers) {
  let result = []
  input.split("\n").forEach((e, i, a) => {
    e.split("").forEach((el, index, ar) => {
      if (markers.includes(el)) {
        ar.splice(index, ar.length - index)
        let str = i === 0? ar.join('').trim() : '\n'+ar.join('').trim()
        result.push(str)
        console.log(`"${str}"`)
      } 
      if (index === ar.length -1) {
        let str = '\n'+ar.join('').trim()
        result.push(str)
        console.log(`"${str}"`)
      }
    });
    
  });
  return result.join('')
}