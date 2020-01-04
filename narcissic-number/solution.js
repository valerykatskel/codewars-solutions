// IN PROGRESS

function narcissistic(value) {
	const values = (''+value).split('')
	const exponent = values.length
	
	return value === values.reduce((sum, current) => sum + Math.pow(parseInt(current, 10),exponent), 0)
  }
  