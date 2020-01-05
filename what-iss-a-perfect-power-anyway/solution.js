var isPP = function(n){
    let exp = Math.floor(n/2)
    let result = []
    
    for (let i=2; i<=exp; i++) {
      for (let j=2; j<=n; j++) {
        if (Math.pow(i,j) === n) {
          return [i,j]
        } else if (Math.pow(i,j) > n) {
          break
        }
      }
    }
    
    return null
  }