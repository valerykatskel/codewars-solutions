function solution(A) {
    let number = 0;
    let aSorted = A.sort((a,b) => a-b);
    let B = aSorted.filter(a => a > 0 && a > -1000000 && a < 1000000)
    
    if (B.length === 1) {
        if (B[0] > 1) number = 1
    } else if ((B.length > 1)) {
      B.forEach((el, index, arr) => {
        if (index > 0 && number === 0) {
          if (el - arr[index-1] > 1) {
            number = arr[index-1] + 1
          }
        }
      })
      return number === 0 ? B[B.length-1]+1 : number
    }
    
    return number === 0 ? 1 : number
  }