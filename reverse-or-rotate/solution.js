function revrot(str, sz) {
    if (str.length === 0 || sz === 0 || sz > str.length) return ''
    
    let subArray = []
    let newArray = []
    let result = ''
    
    str.split('').forEach((el, index, ar) => {
      subArray.push(el)
      if (subArray.length === sz) {
        newArray.push(subArray)
        subArray = []
      } 
    })
    
    newArray.forEach((el, index, ar) => {
      let sumOfCubs = el.reduce((sum, el) => sum + Math.pow(el, 3),0)
      if ( sumOfCubs % 2 > 0 ) {
        el.push(el.shift())
        result += el.join('')
      } else {
        result += el.reverse().join('')
      }  
    })
    return result
}