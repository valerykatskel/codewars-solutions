function sumStrings(a, b) {
	if (!isNaN(a) && !isNaN(b)) {
	  let int1 = a === "" ? [0] : a.split("")
	  let int2 = b === "" ? [0] : b.split("")
	  let part1 = [],
		part2 = [];
	  if (a.length > b.length) {
		part1 = int1
		part2 = int2
	  } else if (a.length < b.length) {
		part1 = int2
		part2 = int1
	  } else {
		part1 = int1
		part2 = int2
	  }
	  let result = ""
	  let add = 0
	  let len1 = part1.length - 1
	  let len2 = part2.length - 1
	  let cSumArr = []
	  for (let i = 0; i < part1.length; i++) {
		let val1 = parseInt(part1[len1 - i], 10)
		let val2 = len2 - i < 0 ? 0 : parseInt(part2[len2 - i], 10)
		if (val1 > 0 || val2 > 0 || add > 0 || i < part1.length) {
		  let valAdd = parseInt(add, 10)
		  let cSum = val1 + val2 + valAdd
		  if (cSum > 9) {
			cSumArr = (cSum + "").split("")
			let cSumVal = cSumArr[1]
			add = cSumArr[0]
			
			if (i === part1.length - 1) {
			  result += cSumArr[1] + cSumArr[0]
			} else {
			  result += cSumArr[1]
			}
		  } else {
			add = 0
			result += cSum
		  }
		}
	  }
  
	  return result
		.split("")
		.reverse()
		.filter((el, index, ar) => {
		  return (index === 0 && el > 0) || index > 0 
		})
		.join("")
	} else {
	  return ""
	}
  }