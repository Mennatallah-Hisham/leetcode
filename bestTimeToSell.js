// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = function(prices) {
    let minValue=Math.min(...prices);
    let minValueIndex=prices.indexOf(minValue);



if(minValueIndex===prices.length-1){
    return 0;
}
let result=[];
  for(let i=minValueIndex;i<prices.length-1;i++){
      result.push(prices[i]-minValue);
  }

  return Math.max(...result);
   
};

const price = maxProfit([7,1,5,3,6,4,])