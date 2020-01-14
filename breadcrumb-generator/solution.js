function generateBC(url, separator) {
	const delimiter = separator.trim();
	let activeElementId = -1;
	const makeHome = (el, index) => (index === 0 ? `<a href="/">HOME</a>` : el);
	const trimAncors = el => (el.split("#").length > 1 ? el.split("#")[0] : el);
	const makeLinks = (el, index, ar) => {
	  //console.log(`index=${index} >> ar.length-1=${ar.length - 1} | el=${el}`);
	  if (index > 0) {
		let prevParts = ar.filter((el, idx) => idx > 0);
		//console.log(prevParts);
		const path = `${prevParts.slice(0, index).join("/")}/`
		if (index !== ar.length - 1) {
		  //console.log(path)
		
		  if (index+1 <= ar.length-1 && ar[index+1].split(".")[0] === 'index') {
			return `<span class="active">${
			  el.toUpperCase().split(".")[0]
			}</span>`;
		  } else {
			return `<a href="/${path}">${el.toUpperCase()}</a>`;
		  }
		} else {
		  //console.log(`the last | ${ar[index-1]}`)
		  if (el.split(".")[0] !== 'index') {
			return `<span class="active">${el.toUpperCase().split('.')[0]}</span>`;
		  } else {
			activeElementId = index - 1;
		  }
		}
	  } else return el;
	};
  
	const removeUndefined = el => el !== undefined;
  
	const getActiveElement = (el, id) => {
	  if (id !== activeElementId) {
		return el;
	  } else {
		const activeArr = ' class="active" '.split("");
		let elArr = el.split("");
		elArr[1] === 'a'? elArr.splice(2, 1, ...activeArr): elArr.splice(5, 1, ...activeArr);
		
		return elArr.join("");
	  }
	};
	const addActiveClass = (el, id) => getActiveElement(el, id);
  
	return url
	  .split("/")
	  .map(makeHome)
	  .map(trimAncors)
	  .map(makeLinks)
	  //.map(addActiveClass)
	  .filter(removeUndefined)
	  .join(` ${delimiter} `);
	//console.log(parts)
  }