// 집합, 합집합, 교집합, 차집합
// 실무에서는 많이 사용이 안되지만
// 알고리즘 문제에서는 거의 필수로 사용되는 자료형입니다. 

let s = new Set('aabbbccccdd');  // {'a', 'b', 'c', 'd'}  // 중복을 제거하는 구나 
s.size;   // 4

회사게시판 = ['이호준','이호준','이호준','이호준','이호준','이호준','이호준','김연하','김연하','최흥석','이나영'];
let 게시자 = new Set(회사게시판);   // {'이호준', '김연하', '최흥석', '이나영'}

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야 합니다.)  
게시자.size

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?   // 객체는 순회를 돌지 못한다. 
for (const i of 게시자) {
  console.log(i, 회사게시판.filter(e => e === i).length)    // filter는 array의 메소드
}
// 이호준 7
// 김연하 2
// 최흥석 1
// 이나영 1

// 이 풀이는 매우 어렵습니다. 초급자 분들에게 권장하지 않습니다. 
let map = new Map()
for (const i of 회사게시판) {
  map.set(i, (map.get(i)  || 0) + 1)       // {'이호준' => 7, '김연하' => 2, '최흥석' => 1, '이나영' => 1}
}

// 1번째 순회 1에 '이호준'
map.set(i, (map.get(i) || 0) + 1)

let map = new Map()
map.get('이호준')  // undefined

map.set('이호준', 1)  // 최종

// 2번째 순회 i에 '이호준'
map.set(i, (mep.get(i) || 0) + 1)

map.set('이호준', 2)  // 최종


/// set 연습 ///

let s = new Set('aabbbccccdd');
s.size;  // 4
s.has('a');    // true
s.has('f');    // false
s.add('z');   // {'a', 'b', 'c', 'd', 'z'}
s

for (const i of s) {
  console.log(i)        // a b c d z
}

let s = new Set('aabbbccccdd'.split(''))  // 이것도 배열
let s = new Set(['a', 'a', 'b', 'b', 'b', 'c', 'c', 'c', 'c', 'd', 'd'])

s.forEach((value, value, set) => {})  // array와 다르게 value가 2번 반복
// IE10은 미지원

s.forEach((a, b, set) => {
  console.log(a, b, set)
})


회사게시판 = ['이호준','이호준', NaN, NaN, NaN];
let test = new Set(회사게시판)     
test      // {'이호준', NaN}    // 원래는 NaN !== NaN이지만 Set에서는 NaN === NaN이다. 


// 교집합
let a = new Set('abc')
let b = new Set('cde')
let cro = [...a].filter(e => b.has(e));

// 합집합
let a = new Set('abc')
let b = new Set('cde')
let union = new Set([...a].concat(...b))
let union = new Set([...a, ...b])


// 차집합
let a = new Set('abc')
let b = new Set('cde')
let dif = [...a].filter(e => !b.has(e))






// set, map, object, array, string가 이터러블 객체인지? 순서는 보장하는지?
// 이터러블한 객체란? 순회가 가능한 객체다.
// set, map, array, string

// object는 순회를 보장 하지 않는다. 
// 순서를 보장하나요?  넣은 순서대로 순회할 수 있느냐? (object는 순서를 보장하지 않습니다.)
// set, map, array, string이 순서를 보장 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://myung-ho.tistory.com/90



// https://school.programmers.co.kr/learn/courses/30/lessons/120903
// 교집합의 갯수 구하는 문제
function solution(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

function solution(s1, s2) {
  s1 = new Set(s1)
  s2 = new Set(s2)
  let cro = [...s1].filter(e => s2.has(e))
  return cro.length;
}


// https://school.programmers.co.kr/learn/courses/30/lessons/120891
function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order) // '29423' 
      .split("") // ['2', '9', '4', '2', '3']
      .filter((num) => mySet.has(parseInt(num))).length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120852
function solution(n) {
  let answer = [];

  let i = 2;
  while (i <= n) {
      if (n % i === 0) {
          answer.push(i);
          n = n / i;
      } else {
          i++;
      }
  }

  return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}



