// 정렬된 두 개의 배열을 병합하기
// [] + []

function mergeArray(arr1, arr2) {
  let mergedArray = [
    ...arr1,
    ...arr2
  ].sort((a, b) => a - b);
  return mergedArray; 
}

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5, 6];
console.log(mergeArray(arr1, arr2));