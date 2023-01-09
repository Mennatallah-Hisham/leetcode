




// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.


const plusOne = function(digits) {
    let number=BigInt(digits.join(""));
  number++;
  
  return Array.from(String(number), Number);
      
  };

  const result = plusOne([6,9,4,1,2,2,2,1,4,77,8,9,4]);