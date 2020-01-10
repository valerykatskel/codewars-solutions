function moveZeros(arr) {
    arr.forEach((el, index, ar) => {
      if (el === 0) {
        let zero = arr.splice(index, 1)[0]
        arr.push(zero)
      }
    })
    return arr
  }