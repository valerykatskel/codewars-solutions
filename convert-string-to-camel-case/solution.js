function toCamelCase(str){
  const dividers = ['-','_'];
  const len = dividers.length;
  let strArr = [];
  let res = '';
  
  for (let i=0; i<len; i++) {
    strArr = str.split(dividers[i]);
    if (strArr.length > 1) {
      strArr.map((el,i) => {
        if (i === 0) {
          res += el;
        } else {
          res += el.charAt(0).toUpperCase() + el.slice(1);
        }
      })
    }
  }
  
  return res;
}