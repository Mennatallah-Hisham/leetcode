

function sum (nums){

    let result =nums.map(num=>Number(num)).reduce((acc,num)=>num+acc);
    console.log(result);
}

/// 2+3+9+1
function extractNum1(data){
data=[...data];

let result=data.filter((char)=>!isNaN(char));

console.log(result);
sum(result);
};




///23+9+1

function extractNum2 (data){
    const nums=[];
  data=[...data]; 

for(let i=0;i<data.length;i++){


    if(!isNaN(data[i]) && !isNaN(data[i+1])){
nums.push(data[i]+data[i+1]);
i++;
    }
    else if  (!isNaN(data[i])){
            nums.push(data[i]);
        }
    }

    console.log(nums);
    sum(nums);

}


extractNum1("df23d9fsdf1");
extractNum2("df23d9fsdf1");




function countChar (string){
    let count ={};
   [...string].forEach(element => {

    if(!count[element]){
        count[element]=1;
    }else{
   count[element]++;
    }
     
        
    });
    console.log(count);
    return count;
}

countChar("dddaadd");


/////////////////////

function getMaxDeletions (s){

let deletions =0;
let directions={
    'l':0,
    'r':0,
    'u':0,
    'd':0

};

[...s].forEach(element => {

    directions[element]++;

});



   
   const stepsTaken =Math.abs(directions?.u-directions?.d)+ Math.abs(
    directions?.l-directions.r
   );


   
   deletions = s.length - stepsTaken;

console.log(deletions);

}

getMaxDeletions('urdrul');
