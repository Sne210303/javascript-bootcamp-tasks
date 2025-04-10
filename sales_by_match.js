function sockMerchant(n, ar) {
    const colorCount = {};
    let pairs = 0;
  
    for (let sock of ar) {
      colorCount[sock] = (colorCount[sock] || 0) + 1;
    }
  
    for (let color in colorCount) {
      pairs += Math.floor(colorCount[color] / 2);
    }
  
    return pairs;
  }
  
  
  console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); 
  console.log(sockMerchant(5, [1, 2, 1, 2, 1]));                      
  