


// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 



const searchInsert = function(nums, target) {
    let result= nums.indexOf(target);
    if(result===-1){
       if(target>nums.at(-1)){
           result =nums.length;
           return result;
       }
       if(target<nums[0]){
           result=0;
           return result;
       }
       for(let i=0;i<nums.length-1;i++){
       
           if(nums[i]<target && target<nums[i+1]){
             
               return i+1;
           }
       }
    }
     return result;
 };