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
/*[
  1, 2, 2, 3,
  3, 4, 5, 6
]
*/

/// 재현님 풀이 ///
const myArr1 = [0, 2, 9, 10, 15];
const myArr2 = [0, 2, 8, 10, 20, 30];
function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) {
      return '병합을 할 배열이 없습니다.'
  }
  if (arr2.length === 0) {
      return '병합을 할 배열이 없습니다.'
  }
  const mergedArray = [];

  let arr1FirstEl = arr1[0];
  let arr2FirstEl = arr2[0];
  let i = 1;
  let j = 1;

  // arr1FirstEl, arr2FirstEl 두 값이 모두 falsy 를 반활할 때까지 반복합니다.
  while (arr1FirstEl !== undefined || arr2FirstEl !== undefined) {
      console.log(arr1FirstEl, arr2FirstEl);

      if (arr2FirstEl === undefined || arr1FirstEl < arr2FirstEl) {
          // mergedArray = [arr1FirstEl , arr2FirstEl]
          mergedArray.push(arr1FirstEl);
          arr1FirstEl = arr1[i];
          i++;
      } else {
          // mergedArray = [arr2FirstEl, arr1FirstEl]
          mergedArray.push(arr2FirstEl);
          arr2FirstEl = arr2[j];
          j++;
      }
  }
  return mergedArray
}

mergeSortedArrays(myArr1, myArr2);


