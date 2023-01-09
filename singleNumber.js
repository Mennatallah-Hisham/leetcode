// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


function singleNumber(nums){
    nums.forEach((num)=>{
        if(nums.lastIndexOf(num)===nums.indexOf(num)){
            console.log(num)
            return num;
        }
    });
}

const result = singleNumber([2,2,1]);