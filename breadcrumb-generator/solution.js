function generateBC(url, separator) {
	const delimiter = separator.trim()
	const notIncludeIndexPages = (el, index, ar) => { 
	  if (index === 0) {
		return `<a href="/">HOME</a>`  
	  } else {
		if (el.split('.')[0] !== 'index') {
		  let prevParst = []
		  if (index !== ar.length-1) {
			if (index > 1) {
			  prevParst = ar.filter((el,idx) => idx > 0 && idx !== ar.length-1)
			  return `<a href="/${prevParst.join('/')}">${el.toUpperCase()}</a>`
			} else {
			  return `<a href="/${el}">${el.toUpperCase()}</a>`
			}
		  } else {
			return `<span class="active">${el.toUpperCase().split('.')[0]}</span>`
		  }
		} 
	  }
	}
	const removeUndefined = el => el !== undefined
  
	const parts = url
					.split('/')
					.map(notIncludeIndexPages)
					.filter(removeUndefined)
					.join(` ${delimiter} `)
	//console.log(parts)
  }