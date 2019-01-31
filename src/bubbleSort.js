var ct=20
var arr=[]
for (var i=0; i < ct; i++){
    var ran=Math.random()
    if (ran >=0.9){
        arr.push(Math.round(ran * 20))
    }else if (ran >= 0.2){
        arr.push( Math.round(ran * 80))
    }else if (ran > 0){
        arr.push( Math.round(ran * 200))
    }
}

var sortedArr=bubbleSort(arr)
console.log(sortedArr)

var flag=false;
var max;
function bubbleSort(arr){
    for(var i=0;i<arr.length;i++){
        // flag=true;
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                max=arr[i];
                arr[i]=arr[j];
                arr[j]=max;
            }
        }
    }
    return arr
}