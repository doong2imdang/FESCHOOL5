// 이 문제는 실제로 입사문제로 사용되던 알고리즘 문제입니다.
// 배열이 하나 주어졌을 때 [3, 2, 4, 5, 2, 1, 0, 3];
// 함수를 만듭니다. 가장 먼저 반복되는 원소의 값을 반환합니다.
// 반복되는  원소가 없으면 undefined를 반환합니다.

/// 재현님 /// 
// 1. 이중 for문 // 안된다!!!!
function test(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
}

// 2. hash 이용
function test2(arr) {
  const useHash = {};
  // useHash[3]
  for(let i = 0; i < arr.length; i++) {
    if(useHash[arr[i]]) {
      return arr[i];
    } else {
      // 해쉬테이블의 키로 arr의 원소를 차례로 등록
      // {3:0, 2:1, 4:2, 5:3} 3은 첫번째 값 => for문 반복 
      useHash[arr[i]] = i; // key 값으로 등록
    }
  }
}

let arr = [3, 2, 4, 5, 2, 1, 0, 3];
console.log(test(arr));

// 3. set이용


/// GPT 추천 /// 
/*
function solution(arr) {
  let answer = '';
  const visited = [];

  for (let i = 0; i < arr.length; i++) {
    if (visited[arr[i]]) {
      answer = arr[i];
      break;
    } else {
      visited[arr[i]] = true;
    }
  }

  return answer;
}

function solution(arr) {
  let answer = '';

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (isDuplicate) {
      answer = arr[i];
      break;
    }
  }

  return answer;
}

let arr1 = [3, 2, 4, 5, 2, 1, 0, 3];
console.log(solution(arr1));
*/