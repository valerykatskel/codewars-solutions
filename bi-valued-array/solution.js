function solution(A) {
    let first = -1, second = -1, count = 0, maxLength = 0;
  
    A.forEach((el, index, ar) => {
      if (first === -1) {
        first = el
        count ++
      } else {
        if (second === -1) {
          second = el  
          count ++ 
        } else {
          if (el === first || el === second) {
            count ++
          } else {
            if (count > maxLength) maxLength = count
            count = 2
            first = second
            second = el
            
          }
        }
      }
    });
    if (count > maxLength) maxLength = count
    return maxLength
  }