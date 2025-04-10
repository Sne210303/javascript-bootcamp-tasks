function bonAppetit(bill, k, b) {

    const totalWithoutItem = bill.reduce((sum, item, index) => {
      return index !== k ? sum + item : sum;
    }, 0);
  
    const annaShare = totalWithoutItem / 2;
  
    if (b === annaShare) {
      console.log("Bon Appetit");
    } else {
      console.log(b - annaShare);
    }
  }
  
  
  bonAppetit([3, 10, 2, 9], 1, 12); 
  bonAppetit([3, 10, 2, 9], 1, 7);  
  