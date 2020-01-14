function generateBC(url, separator) {
	const delimiter = separator.trim()
	let activeElementId = -1
	const notIncludeIndexPages = (el, index, ar) => { 
	  if (index === 0) {
		return `<a href="/">HOME</a>`  
	  } else {
		let prevParst = ar.filter((el,idx) => idx > 0 && idx !== ar.length-1)
		
		if (index !== ar.length-1) {
		  if (index > 1) {
			return `<a href="/${prevParst.slice(0,index).join('/')}/">${el.toUpperCase()}</a>`
		  } else {
			return `<a href="/${el}/">${el.toUpperCase()}</a>`
		  }
		} else {
		  if (el.split('.')[0] !== 'index') {
			return `<span class="active">${el.toUpperCase().split('.')[0]}</span>`
		  } else {
			activeElementId = index-1
		  }
		} 
	  }
	}
	
	const removeUndefined = el => el !== undefined
	
	const getActiveElement = (el,id) => {
	  if (id !== activeElementId) {
		return el
	  } else {
		const activeArr = ' class="active" '.split('')
		let elArr = el.split('')
		elArr.splice(2, 1, ...activeArr)
		return elArr.join('')
	  }
	}
	const addActiveClass = (el,id) => getActiveElement(el, id)
  
	return url
					.split('/')
					.map(notIncludeIndexPages)
					.map(addActiveClass)
					.filter(removeUndefined)
					.join(` ${delimiter} `)
	//console.log(parts)
  }