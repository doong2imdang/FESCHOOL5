for (let i = 0; i < 10; i++) {
  console.log(10);
}

let arr = [10, 20, 30, 40, 50]
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// IE 에서도 사용 가능
let arr1 = [10, 20, 30, 40, 50]
let obj1 = {'one' : 10, 'two': 20}
// array 에서 for in문을 쓰지 않기를 권해드립니다. 
for (const i in arr1) {
  console.log(arr1[i]);  // index를 가져온다!?
}

for (const i in obj1) {
  console.log(obj1[i]);  // key를 가져온다!?
}

for (const i in 'hello world') {
  console.log(i)
}

let s = 0
for (const i in '.'.repeat(101)) {
  s += parseInt(i)
}
console.log(s)

// airbnb 컨벤션에서 권장
// IE 에서 사용 불가
// 개발자의 행복을 위해 익스플로러를 버리자 => 이렇게 해야만 사용할 수 있습니다. 
let arr2 = [10, 20, 30, 40, 50]
let obj2 = {'one' : 10, 'two': 20}

for (const item of arr2) {
  console.log(item)
}                          // 10 20 30 40 50 

let s = 0
for (const item of arr2) {
  s += item
} 
console.log(s)

for (const item of obj2) {     // of 뒤에 iterable한 값이 나와야 합니다. 
  console.log(item)
} 

for (const item of 'hello world') {  
  console.log(item)
} 

// why? for of와 for in문에서는 const가 가능한가요?
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst
for (const i = 0; i < 10; i++) {
  console.log(10);
} // error


let count = 0
for(const i = 100;;) {
  if (count>=10) {
    break
  }
  count += 1
  console.log(i)
}


for (const i in [1,2,3]) {
  console.log(i)
}

for (const i of [1,2,3]) {
  console.log(i)
}




// 문제 
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length; i++) {
  console.log(s[i], s[i+1])             // 마지막 값을 확인해보세요.(out of range)
  console.log(s[i+1] - s[i])            
}

//////아래 두개는 같은 코드
s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length-1; i++) {
  console.log(s[i], s[i+1])             // 마지막 값을 확인해보세요.(-1을 해준다)
}

s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 1; i < s.length; i++) {
  console.log(s[i-1], s[i])             // 마지막 값을 확인해보세요.(-1을 해준다)
  console.log(s[i] - s[i-1])  
}

// 위보다 깔끔한 코드가 나오진 않습니다. 
let s = [1, 3, 4, 8, 13, 17, 20]
for (const i in s) {
  console.log(parseInt(i))
  console.log(s[i], s[parseInt(i)+1])
}

// 문제 
// 다음 수학 점수의 반평균을 구하세요.
let 수학점수 = [10, 99, 89, 70]
// step1 
(수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3]) / 수학점수.length
// step2
let s = 0
for (let i = 0; i < 수학점수.length; i++) {
  s += 수학점수[i];
}
console.log(s / 수학점수.length)


// 문제
// 다음 user의 나이 평균을 구하세요.
let user = [
  {
      "_id": "642e3071c61a23c70ae6076b",
      "index": 0,
      "age": 31,
      "name": "Hicks Garza",
      "gender": "male",
  },
  {
      "_id": "642e3071ecd6f90a87d64731",
      "index": 1,
      "age": 32,
      "name": "Ayers Harrington",
      "gender": "male",
  },
  {
      "_id": "642e3071cef9ddc131f047fb",
      "index": 2,
      "age": 39,
      "name": "Lamb Adams",
      "gender": "male",
  }
]

// 견고한 코드란?
// 1. age가 문자였다면?
// 2. age가 입력되지 않았다면?
// 3. age 필드가 없다면?(MongoDB의 경우)

let s = 0;
for (let i = 0; i < user.length; i++) {
  console.log(user[i]['age'])
  s += user[i]['age'];
}
// console.log(Math(floor(s / user.length)))
console.log((s / user.length).toFixed(2));


/////

let s = 0
for (const i of user) {
  s += i.age
}
console.log((s / user.length).toFixed(2));

////

let s = 0
for (const i in user) {
  s += user[i].age
}
console.log((s / user.length).toFixed(2));

//// 심화 수업(기억하지 않으셔도 됩니다.) ////

let user = [
  {
      "_id": "642e3071c61a23c70ae6076b",
      "index": 0,
      "age": 31,
      "name": "Hicks Garza",
      "gender": "male",
  },
  {
      "_id": "642e3071ecd6f90a87d64731",
      "index": 1,
      "age": 32,
      "name": "Ayers Harrington",
      "gender": "male",
  },
  {
      "_id": "642e3071cef9ddc131f047fb",
      "index": 2,
      "age": 39,
      "name": "Lamb Adams",
      "gender": "male",
  },
  {
      "_id": "642e3071cef9ddc131f047fb",
      "index": 2,
      "name": "Lamb Adams",
      "gender": "male",
  }
]

let s = 0
for (const i of user) {
  console.log(i)
  console.log(i.age)   // 마지막에 undefined
  console.log(s)      // 마지막에 102
  console.log('----------')
  s += i.age   // 마지막에 undefined + 102
}
console.log((s / user.length).toFixed(2))

/////////

let s = 0
for (const i of user) {
  console.log(i)
  console.log(i.age)   // 마지막에 undefined
  console.log(s)      // 마지막에 102
  console.log('----------')
  s += i.age ?? 0     // ?? 0 를 넣어주면 결과 25.50
}
console.log((s / user.length).toFixed(2))


// step 1 
let s = 0
console.log(user[0])
console.log(user[0].age)
console.log(s)
console.log(s)
console.log('------------')
s += user[0].age ?? 0               // 31

// step2
console.log(user[1])
console.log(user[1].age)
console.log(s)
console.log(s)
console.log('------------')
s += user[0].age ?? 0               // 32

// step3
console.log(user[2])
console.log(user[2].age)
console.log(s)
console.log(s)
console.log('------------')
s += user[0].age ?? 0              // 39


/////
s = 0
for (const i of user.map((v, i) => v.age)) {
  if (!!i) {
    s += i
  }
}
console.log((s / user.length).toFixed(2))

/////
!true            // f
!false          // t
!!10            // t
!!1             // t
!!-1           // t
!!0            // f
!!''           // f
!!'hello'      // t
!!NaN          // f
!!undefined    // f
!!null         // f


////// 외우세요  //////

user.map(v => v.age) //[31, 31, 39, undefined]
user.map(v => v.age).filter(v => !!v) // [31, 32, 39]
user
    .map(v => v.age)
    .filter(v => !!v)
    .reduce((a, b) => a + b, 0) // 102


    // ```
    // user
    // .map(v => v.age)
    // .filter(v => !!v)
    // .reduce((a, b) => a+b, 0)``` // 코드블럭으로 
