// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// write a function that accepts a strong as an argument
// the function should capitalize only every othere letter in the string
// the function should then return the converted string

function capitalize(string){
    if(string.length===0){
        return "";
    }
    
const newString = [...string].map((char,i)=>{
    if(i%2 ===0){
        return char.toUpperCase();
    }else{
        return char.toLowerCase();
    }
}).join("");
return newString;


}

//HELLO => HeLlO;
//hello =>HeLlO;

console.log(capitalize("hello"));
console.log(capitalize("HELLO"));
console.log(capitalize(" "));
console.log(capitalize("yo eli"));
console.log(capitalize("hello???"));

function capitalizeReduce (string){
    const newString =[...string].reduce((acc,char,i)=>{
        if(i%2===0){
           acc+= char.toUpperCase();
          
        }else{
           acc+= char.toLowerCase();
             
        }
        return acc;
    },"");
    
    return newString;
}

console.log("+++++++++++++++++")
console.log(capitalizeReduce("hello"));
 console.log(capitalizeReduce("HELLO"));
console.log(capitalizeReduce(" "));
 console.log(capitalizeReduce("yo eli"));
 console.log(capitalizeReduce("hello???"));