
function findIndex( sortedArr ,findKey){
   // sortedArr: sorted array of integer in ascending order
   // findKey: integer to be found in the sortedArray
   var ar  = sortedArr
       keys = [],
       indexs = [];
   if(ar instanceof Array){
      ar.map((item, index)=>{
         indexs.push(index)
      })
   }else{
      for (const key in ar) {
         if (object.hasOwnProperty(key)) {
            const element = object[key];
            keys.push(element)
         }
      }
   }
    
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