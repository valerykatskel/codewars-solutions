INPROGRESS

function solution(A) {
    let result = []
  
  
    A.forEach((el, index, ar) => {
      if (result.length === 0) {
          result.push({
              value: el, firstPos: index, lastPos: 0, count: 1
          })
      } else {
          let found = false
          // need check if there is current number el or not in array
          result.forEach(nmb => {
              if (nmb.value === el) {
                  nmb.count += 1
                  nmb.lastPos = index
                  found = true
              }
          })
          
          if (!found) {
             result.push({
                  value: el, firstPos: index, lastPos: 0, count: 1
              })
          }
      }        
    });
    //if (result.length === 2) return A.length
    //if (result.length === 1) return result[0].count
    return result
  }
  
  console.log(solution([0, 5, 4, 4, 5, 12]));