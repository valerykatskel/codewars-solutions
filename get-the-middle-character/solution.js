function getMiddle(s) {
  let start=0, end=0, length = s.length;
  if (length%2 === 0) {
    start = length/2 - 1;
    end = start + 2;
  } else {
    start = Math.round(s.length/2) - 1;
    end = start + 1;
  }
  return s.slice(start,end);
}