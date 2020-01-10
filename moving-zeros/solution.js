var moveZeros = function (arr) {
    let result = []
    let zeros = []
    result = arr.map((el, index, ar) => {
      if (el === 0) {
        zeros.push(el)
      } else return el
    }).filter(el => el !== undefined) 
    return [...result, ...zeros]
}