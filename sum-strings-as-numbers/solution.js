// IN PROGRESS

function sumStrings(a,b) { 
	if (!isNaN(a) && !isNaN(b) ) {
	  let int1 = a==='' ? [0] : a.split('')
	  let int2 = b==='' ? [0] : b.split('')
	  let part1 = [], part2 = []
	  if (a.length > b.length) {
		part1 = int1
		part2 = int2
	  } else {
		part1 = int2
		part2 = int1
	  }
	  let result = ''
	  let add = 0
	  let len1 = part1.length-1
	  let len2 = part2.length-1
	  let cSumArr = []
	  for (let i = 0; i < part1.length; i++) {
		let cSum = part1[len1-i] + part2[len2-i] + add
		
		if (cSum > 9) {
		  // for example 18
		  cSumArr = cSum.split('') // [1,8]
		  add = cSum[0] // 1
		  result += cSumArr[1] // 8
		} else {
		  // for example 9
		  result += cSum // 9
		  add = 0
		}
	  }
	  return result
	} else {
	  return ''
	}
  }