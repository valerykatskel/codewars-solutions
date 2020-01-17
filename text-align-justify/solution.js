// IN PROGRESS
function justify(str, len) {
	let strAr = str.split(" ");
	const getGaps = num => [...Array(num).keys()].map(elem => " ").join("");
	const gapsWords = ar => {
	  const totalLength = ar.reduce((sum, current) => sum + current.length, 0);
	  let gapsLength = len - totalLength; //5
	  const addGaps = (el, index, ar) => {
		const cnt = ar.length - index
		const currentGapSize = Math.round(gapsLength / cnt)
		gapsLength -= currentGapSize
		return (index < ar.length - 1) ? `${el}${getGaps(currentGapSize)}` : `${el}`
	  };
	  return ar.map(addGaps).join("");
	};
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
  
  console.log(
	justify(
	  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quam ante, ultricies at eleifend interdum, bibendum id velit. Praesent sodales dolor eu aliquet pharetra. Fusce id tellus arcu. Suspendisse at ornare magna, nec interdum augue. Nullam eu cursus dui. Aliquam tincidunt in nibh eu bibendum. Phasellus scelerisque placerat quam at consectetur. Mauris cursus ipsum nec risus gravida volutpat. Mauris sapien dolor, lacinia id vehicula sit amet, gravida a enim. Ut congue nunc nec mattis pellentesque. Curabitur venenatis commodo nibh eget molestie.",
	  30
	)
  );
  