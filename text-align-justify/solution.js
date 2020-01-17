// IN PROGRESS
function justify(str, len) {
	let strAr = str.split(" ");
  
	const getGaps = num => [...Array(num).keys()].map(elem => " ").join("");
	//console.log(getGaps(4));
	const gapsWords = ar => {
	  //console.log("---------");
	  const wordsCount = ar.length;
	  const totalLength = ar.reduce((sum, current) => sum + current.length, 0);
	  let gapsLength = len - totalLength; //5
	  const gapLength = Math.round(gapsLength / (wordsCount - 1));
	  //console.log(gapLength);
	  let sumGaps = 0;
	  const addGaps = (el, index, ar) => {
		const cnt = ar.length - index // 3
		const currentGapSize = Math.round(gapsLength / cnt) // 3/3
		gapsLength -= currentGapSize // 3-1=3
		if (index < ar.length - 1) {
		  //cost currentGap = gapsLength -
		  return `${el}${getGaps(currentGapSize)}`;
		} else {
		  return `${el}`;
		}
	  };
	  //const gapsLengthArr = Array(wordsForGap)
	  //return gapsLengthArr.map(e => 0)
	  //return Math.round(gapsLength / wordsCount)
	  return ar.map(addGaps).join("");
	};
	//return gapsWords(["Lorem", "ipsum", "dolor"]);
	let tStr = "";
	let result = [];
	
	strAr.forEach((el, idx) => {
	  if (len - tStr.length >= 0) {
		if (len - tStr.length - 1 - el.length >= 0) {
		  idx === 0 ? (tStr += `${el}`) : (tStr += ` ${el}`);
		} else {
		  result.push(tStr);
		  tStr = el;
		}
	  }
	});
	return result.map(el => gapsWords(el.split(" "))).join("\n");
  }
  