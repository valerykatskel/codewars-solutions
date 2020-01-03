function pickPeaks(arr){
	let result = {pos:[], peaks:[]}

	arr.forEach((el, index, a) => {
	  if (a[index-1] != undefined && a[index+1] != undefined) {
		let prev = a[index-1]
		let next = a[index+1]
		if (el === next) {
		  let i = 1
		  let nextTemp = a[index+1+i]
		  while (el === nextTemp) {
			i++
			nextTemp = a[index+1+i]
		  }
		  next = nextTemp
		} 
		if (el > prev && el > next) {
		  result.pos.push(index)
		  result.peaks.push(el)
		}
	  }
	})
	
	return result
  }