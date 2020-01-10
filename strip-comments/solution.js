function solution(input, markers) {
  let result = []
  input.split("\n").forEach((e, i, a) => {
    e.split("").forEach((el, index, ar) => {
      if (markers.includes(el)) {
        ar.splice(index, ar.length - index)
        result.push('\n'+ar.join('').trim())
      } 
      if (index === ar.length -1) {
        result.push('\n'+ar.join('').trim())
      }
    });
    
  });
  return result.join('')
}