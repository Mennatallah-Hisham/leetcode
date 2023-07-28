function circleIntersect(...nums){
    let x,y,r,a,b;
    [x,y,r,a,b]=nums;

return Math.pow(x-a,2)+Math.pow(y-b,2)<= Math.pow(r,2)

}
var countPoints = function(points, queries) {
   let ans=[];
    for(let i=0;i<queries.length;i++){
   ans[i]=0;
      points.map((point)=>{
     console.log(circleIntersect(...queries[i],...point))
          if(circleIntersect(...queries[i],...point)){
             return  ans[i]++;
             
          
          }
          })

}
   
  return ans;

 


};