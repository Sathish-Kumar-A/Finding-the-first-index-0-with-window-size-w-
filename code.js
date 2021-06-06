

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput=[];

inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close",()=>{
    data1=userInput[0].split(" ");
    data2=userInput[1].split(" ");
    var n=parseInt(data1[0]);
    var w=parseInt(data1[1]);
    const result=[];
    var count;
    var count1;
    for (var i=0;i<((n-w)+1);i++){
        count=0;
        count1=0;
        for(var j=i;j<(i+w);j++){
            if(parseInt(data2[j])===0){
                count+=1;
                if(count>0){
                    result.push(j+1);
                    break;
                }
                
            }
            else if(parseInt(data2[j])!==0){
                count1+=1;
                if (count1>1){
                    result.push(-1);
                }
            }
            
            }
    }
    console.log(...result);
});