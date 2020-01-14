function generateBC(url, separator) {
	const delimiter = separator.trim();
	const ignoredWords = [
	  "the",
	  "of",
	  "in",
	  "from",
	  "by",
	  "with",
	  "and",
	  "or",
	  "for",
	  "to",
	  "at",
	  "a"
	];
	const removeIgnored = el =>
	  ignoredWords.filter(elem => elem === el).length > 0 ? false : true;
  
	const trimAncors = el => (el.split("#").length > 1 ? el.split("#")[0] : el);
	const trimParams = el => (el.split("?").length > 1 ? el.split("?")[0] : el);
	const shortMe = el => el.slice(0, 1).toUpperCase();
	const prettyUrlName = el =>
	  el.length > 30
		? el
			.split("-")
			.filter(removeIgnored)
			.map(shortMe)
			.join("")
		: el
			.split("-")
			.map(elem => elem.toUpperCase())
			.join(" ");
	const getAllItemsWithowtHome = (el, idx, ar) =>
	  ar.filter((el, idx) => idx > 0);
  
	const makeLinks = (el, index, ar) => {
	  let prevParts = getAllItemsWithowtHome(el, index, ar);
	  const path = `${prevParts.slice(0, index).join("/")}/`;
	  if (index !== ar.length - 1) {
		if (
		  index + 1 <= ar.length - 1 &&
		  ar[index + 1].split(".")[0] === "index"
		) {
		  if (index === 0) {
			return `<span class="active">HOME</span>`;
		  } else {
			return `<span class="active">${prettyUrlName(
			  el.split(".")[0]
			)}</span>`;
		  }
		} else {
		  if (index === 0) {
			return `<a href="/">HOME</a>`;
		  } else {
			return `<a href="/${path}">${prettyUrlName(el)}</a>`;
		  }
		}
	  } else {
		if (el.split(".")[0] !== "index") {
		  if (index === 0) {
			return `<span class="active">HOME</span>`;
		  } else {
			return `<span class="active">${prettyUrlName(
			  el.split(".")[0]
			)}</span>`;
		  }
		}
	  }
	};
  
	const removeUndefined = el => el !== undefined;
	return url
	  .replace(/http(s)?:\/\//, "")
	  .replace(/\/$/, "")
	  .split("/")
	  .map(trimAncors)
	  .map(trimParams)
	  .map(makeLinks)
	  .filter(removeUndefined)
	  .join(` ${delimiter} `);
  }
  