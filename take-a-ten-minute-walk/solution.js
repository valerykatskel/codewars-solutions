function isValidWalk(walk) {
  let distance = walk.length;
  if (distance != 10) return false;
  
  let n=s=w=e=0;
  let point = 0;
  let dr={};
  if (walk[0] === 'n') {
    dr.n=1;
    dr.s=-1;
    dr.w=-1;
    dr.e=1;
  }
  if (walk[0] === 's') {
    dr.n=-1;
    dr.s=1;
    dr.w=-1;
    dr.e=1;
  }
  if (walk[0] === 'w') {
    dr.n=1;
    dr.s=-1;
    dr.w=1;
    dr.e=-1;
  }
  if (walk[0] === 'e') {
    dr.n=1;
    dr.s=-1;
    dr.w=-1;
    dr.e=1;
  }
  
  walk.map(direction => {
    point += dr[direction];
    //console.log(`direction=${direction} and point=${point}`)
  })
  
  if (point === 0) return true;
  return false;
}