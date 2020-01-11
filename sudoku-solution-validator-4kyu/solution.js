function validSolution(board){
    const etalon = [1,2,3,4,5,6,7,8,9]
    const sortLine = (a,b) => a-b
    const checkValidLine = (el,index) => el === etalon[index]
    const isFalseInLine = el => !el
    const checkArray = ar => !(ar.sort(sortLine).map(checkValidLine).filter(isFalseInLine).length)
    
    for (let i=0; i < 9; i++) {
      let row = []
      let column = []
      for (let j=0; j < 9; j++) {
        row.push(board[i][j])
        column.push(board[j][i])  
      }
      
      if (!checkArray(row) || !checkArray(column)) return false
    }
  
    
    for (let mi=0; mi < 3; mi++) { 
      for (let mj=0; mj < 3; mj++) { 
        let block = []
        
        for (let i=0+3*mi; i < 3*(mi+1); i++) {
          for (let j=0+3*mj; j < 3*(mj+1); j++) {
            block.push(board[i][j])  
          }
        }
        if (!checkArray(block)) return false
      }
    }
  
    return true
  }