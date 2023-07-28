// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


// function singleNumber(nums){
//     nums.forEach((num)=>{
//         if(nums.lastIndexOf(num)===nums.indexOf(num)){
//             console.log(num)
//             return num;
//         }
//     });
// }

// const result = singleNumber([2,2,1]);

console.log(this)
function init (){
    let name="menna";
    function display(){
        console.log(name);
     
    }
    name="sara";
  
    display();
}

init();
function createIncrement() {
    let count = 0;
    function increment() { 
        count++;
    }
    let message = `Count is ${count}`;

    function log() {
      console.log(message);
    }
    
    return [increment, log];
  }
  const [increment, log] = createIncrement();
  increment(); 
  increment(); 
  increment(); 
  log();



  console.log(fname);
  var fname="ghihi";

  console.log(2 * "2")

  function doSomething() {
    console.log(this);
  }
     
  doSomething();
  let x= {}, y = {name:"Ronny"},z = {name:"John"};
  x[y] = {name:"Vivek"};
  x[z] = {name:"Akki"};
  console.log(x[y]);

  var x1 = 23;

(function(){
  var x1 = 43;
  (function random(){
    x1++;
    console.log(x1);
    var x1 = 21;
  })();
})(); 


const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}