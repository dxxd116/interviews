var assert=require('assert')

var binarySearcher=require("./binarySearcher.js")
var findIndex=binarySearcher.findIndex;

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

// var searches=[0,1,3,29]
// searches.forEach((index)=>{
//     var findKey=arr[index]
//     console.log(findIndex(arr,findKey))
//     assert(findIndex(arr,findKey)==index, `Fail to find ${findKey} at ${index} position`)
// })


var findKey=arr[0]
// console.log(findKey)
var result=findIndex(arr,findKey)
console.log(findKey+"\tBinary search result - index:  " + result)

findKey=arr[4]
// console.log(findKey)
result=findIndex(arr,findKey)
console.log(findKey+"\tBinary search result - index:  " + result)

findKey=arr[9]
// console.log(findKey)
result=findIndex(arr,findKey)
console.log(findKey+"\tBinary search result - index:  " + result)

findKey=arr[0]-1
// console.log(findKey)
result=findIndex(arr,findKey)
console.log(findKey+"\tBinary search result - index:  " + result)


findKey=arr[arr.length-1]+1
// console.log(findKey)
result=findIndex(arr,findKey)
console.log(findKey+"\tBinary search result - index:  " + result)

findKey=Math.round((arr[arr.length-1] + arr[0]) / 3)
// console.log(findKey)
result=findIndex(arr,findKey)
console.log(findKey+"\tBinary search result - index:  " + result)