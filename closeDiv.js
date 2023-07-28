// outside in
function closeDivs2 (txt){
    const txtArr = txt.split(" ");
    let i=0;
    let j = txtArr.length -1;
 
    while(i<j){
        if(txtArr[i] ==="<div>"){
             
            
              if(txtArr[i]==="<div>" & txtArr[j]==="<div>"){
           txtArr[j]="</div>" ;
                i++;
                j--
                }else{
                    j--;
                }
        }else if(txtArr[j]=== "<div>"){
            
               if(txtArr[i]==="<div>" & txtArr[j]==="<div>"){
           txtArr[j]="</div>";
                i++;
                j--
                }else{
                    i++;
                }
        }else{
            i++;
            j--;
        }
   
       
    }
    
    console.log(txtArr.join("  "));
    return txtArr.join(" ");
}

closeDivs2("<div> this is a paragraph <div> his is how we feel");

closeDivs2("<div>");
closeDivs2("<div> <div>");
closeDivs2("<div> this ishd hello <div> this is div2 <div> this is div 3 <div> <div> <div>");


//  close the second div
// <div> hello <div> bye <div> ==> <div> hello <div> bye </div>
// <div> hello <div> bye <div> ==> <div> hello </div> bye <div>

// <div><div><div> => <div></div><div>
// <div><div><div> => <div><div></div>

function closeSecondDiv (txt){
    const txtArr = txt.split(" ");
    let i=0;
    let j =1;

    while(i<j && j<txtArr.length){
        if(txtArr[i] ==="<div>"){
         
            
              if(txtArr[i]==="<div>" && txtArr[j]==="<div>"){
                
           txtArr[j]="</div>" ;
                i=j+1;
                j=i+1;
                }else{
                  i++;
                }
        }else{
            i++;
            j++;
        }
   
       
    }
    
    console.log(txtArr.join("  "));
    return txtArr.join(" ");
}

 closeSecondDiv("<div>");
 closeSecondDiv("<div> <div>");
closeSecondDiv("<div> <div> <div>");
closeSecondDiv("<div> <div> <p> hello </p> <div> <div>");