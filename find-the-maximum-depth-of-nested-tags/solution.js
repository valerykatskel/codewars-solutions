function solution() {
    let maxDepth = 0;
    let depthCount = 0;
  
    document.querySelectorAll("ul,ol").forEach(item => {
      let node = item;
      depthCount = 1;
      while (node.nodeName !== "BODY") {
        node = node.parentNode;
        if (node.nodeName === "UL" || node.nodeName === "OL") {
          depthCount += 1;
        }
      }
      if (depthCount > maxDepth) maxDepth = depthCount;
    });
    return maxDepth;
  }
  
  console.log(solution());
  