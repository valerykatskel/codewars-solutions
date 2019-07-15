function iqTest(numbers){
  const numArray = numbers.split(' ');
  let oddCount = 0;
  let evenCount = 0;
  let index = 0;
  
  numArray.map(el => el%2 === 0? evenCount+=1 : oddCount+=1);  
  
  if (evenCount > oddCount) {
    numArray.map((el,i) => {
      if(el%2 > 0) index = i;
    })
  } else {
    numArray.map((el,i) => {
      if(el%2 === 0) index = i;
    })
  }
  return ++index;
}