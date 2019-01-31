
function findIndex( sortedArr ,findKey){
   
    return -1
}

function binarySearchIndex(arr,findKey,start,end ){
    
    if (start > end ) return -1;
    var mid= Math.floor((start + end) / 2)
    if (findKey ==arr[mid]){
        return mid;
    }else if (findKey < arr[mid]){
        return binarySearch(arr, findKey, start, mid-1)
    }else{
        return binarySearch(arr, findKey, mid+1, end)
    }

}

exports.findIndex=findIndex
exports.binarySearchIndex=binarySearchIndex