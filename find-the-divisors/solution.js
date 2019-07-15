function divisors(integer) {
  let divisors = [];
  for (i=2; i<integer; i++) {
    if (integer%i === 0) {
      divisors.push(i);
    }
  }
  if (divisors.length > 0) {
    return divisors;
  } else {
    return `${integer} is prime`;
  }
};