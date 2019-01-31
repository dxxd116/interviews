
function findIndex( sortedArr ,findKey){
   // sortedArr: sorted array of integer in ascending order
   // findKey: integer to be found in the sortedArray
    
   var low=0
   var high=sortedArr.length-1

   while (low <= high){
   var mid=Math.floor((high+low) / 2)

   if (findKey==sortedArr[mid]){
       return mid
   }
   else if(findKey < sortedArr[mid]){
       high=mid-1
   }else {
       low=mid+1
   }
   }
   return -1

}

function binarySearchIndex(sortedArr,findKey,start,end ){
   // sortedArr: sorted array of integer in ascending order
   // findKey: integer to be found in the sortedArray
   // start: index of sorted array where the search begin(inclusive)
   // end: index of sorted array where the search end(exclusive)

    return -1
}

exports.findIndex=findIndex
exports.binarySearchIndex=binarySearchIndex