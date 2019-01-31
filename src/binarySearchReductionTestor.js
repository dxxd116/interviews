var binarySearcher=require("./binarySearcher.js")
var binarySearchIndex=binarySearcher.binarySearchIndex;


var ct=20
var arr={}
for (var i=0; i < ct; i++){
    var ran=Math.random()
    if (ran >=0.9){
        arr[Math.round(ran * 20)]=1
    }else if (ran >= 0.2){
        arr[Math.round(ran * 80)]=1
    }else if (ran > 0){
        arr[ Math.round(ran * 200)]=1
    }
}
arr=Object.keys(arr).map((x) => parseInt(x))
arr.sort(function(a,b){
    return a-b
})
console.log(arr)


var findKey=arr[0]
// console.log(findKey)
var result=binarySearchIndex(arr,findKey,0,arr.length)
logResult(findKey,result, arr[result])

findKey=arr[4]
// console.log(findKey)
result=binarySearchIndex(arr,findKey,0,arr.length)
logResult(findKey,result, arr[result])

findKey=arr[9]
// console.log(findKey)
result=binarySearchIndex(arr,findKey,0,arr.length)
logResult(findKey,result, arr[result])

findKey=arr[0]-1
// console.log(findKey)
result=binarySearchIndex(arr,findKey,0,arr.length)
logResult(findKey,result, arr[result])


findKey=arr[arr.length-1]+1
// console.log(findKey)
result=binarySearchIndex(arr,findKey,0,arr.length)
logResult(findKey,result, arr[result])

findKey=Math.round((arr[arr.length-1] + arr[0]) / 3)
// console.log(findKey)
result=binarySearchIndex(arr,findKey,0,arr.length)
// console.log(findKey+"\tBinary search result - index:  " + result)
logResult(findKey,result, arr[result])


function logResult(findKey,findIndex,findVal){
    
    console.log(`${findKey} \t Binary Search Result: index - \t${findIndex}, \t value - \t ${findVal} `)
}