// arr(*****)
const arr = [10, 20, 30]
arr[0] = 100 // const는 값의 변화가 안된다고 하지 않았나?  // 변경가능, mutable
// arr = 100
// arr = [10, 20, 30]
console.log(arr)
console.dir(arr) // 프러퍼티와 메서를 볼 수 있습니다.

// (문자열))string // 도 순서가 있다. 숫자와 마찬가지로
const s = 'hello world'
console.log(s[0])   // h
s[0] = 'i' // 불변, immutable


// arr.1 // error
// 숫자로 들어간 값은 대괄호로 호출할 수 있고
// length는 문자입니다. 문자로 입력된 값은 .을찍어서 호출할 수 있습니다.
arr[1]
arr.length
arr['length']

// 두개가 같은 얘기입니다.
arr.length = 10
arr[0] = 100

// 프로퍼티를 추가하는 것도 가능합니다.
arr['leehojun'] = 100
arr.hojun = 1000

// 배열의 특징
// let arr = [];
// let arr = [1, 2, 3];
// let arr2 = new Array(4, 5, 6);
// let arr2 = new Array(3);
// Array(100).fill(0)

// 1. 배열은 순서가 있습니다. 배열의 순서를 index, 이 순서로 호출하는 것을 indexing이라고 합니다. 배열 안에 값을 원소(elements)라고 합니다.
const arr = [10, 20, 30]
arr[0] = 100

// 2. 배열에 다른 원시타입과 객체타입을 포함할 수 있습니다.
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

arr[0]
// [1, 2, 3]
arr[1]
// [4, 5, 6]
arr[2]
// [7, 8, 9]
arr[1][2]
// 6

// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10 // 스칼라
const b = [10, 20, 30] // 벡터
const c = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] // 메트릭스
const d = [
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]]
] // 텐서(3차원 이상의 다차원)

// 그렇기에 인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행렬의 연산입니다. 

// push  // 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
const arr = [1, 2, 3];
arr.push(4)

// push 실무 예제
// let tableBodyData = []  // 이곳에 하나의 row가 들어간다. 
// for (const iterator of data) {
//     tableBodyData.push(`          
//         <tr>
//             <td>${iterator['a']}</td>      //리터럴로 묶여있다. 
//             <td>${iterator['b']}</td>
//             <td>${iterator['c']}</td>
//             <td>${iterator['d']}</td>
//             <td>${iterator['e']}</td>
//             <td>${iterator['f']}</td>
//         </tr>
//     `)
// }
// document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('') // 합쳐준다.
const arr = [1, 2, 3, 4, 5]
arr.pop()
// 1. 마지막에서 값을 꺼내고 
// 2. 꺼낸 값을 반환(return) 합니다.
// 5
arr
// (4) [1, 2, 3, 4]

// pop  // 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
const arr = [1, 2, 3, 4, 5]
let lastValue = arr.pop()
arr

// unshift  // 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이", "배");
console.log(myArray1);        //['오이', '배', '사과', '바나나', '수박']

// shift  //배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.
// 1. 앞에서 값을 꺼내고 
// 2. 꺼낸 값을 반환(return) 합니다.
const myArray2 = ["사과", "바나나", "수박"];
myArray2.shift();
console.log(myArray2);       

let firstValue = myArray2.shift();
firstValue
// 사과

// 문제(*****)
// ||답변||으로 답해주세요.
// pop, shift, unshift, push에 대해 설명해주세요.

// push - 배열의 뒤에 값을 추가한다
// pop - 뒤에서 값을 꺼내고 반환
// unshift - 배열의 앞에 값을 추가한다
// shift - 앞에서 값을 꺼내고 반환

// arr.splice(start, deleteCount, items)
const arr = [1, 2, 3];
arr.splice(1, 0, 4); // arr에 1번째에, 아무것도 삭제하지 않고, 4를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, [10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, [10, 20, 30]를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, ...[10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, 10, 20, 30); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.

// 문제
// ||를 사용해서 답변해주세요.
const arr = [10, 20, 30, 40, 50]
const x = [1, 2, 3]
// 만들고 싶은 값 == [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]
// splice만 사용하여 위처럼 만들어주세요.
arr.splice(1, 0, ...x);
arr.splice(7, 0, ...x);

const arr = [10, 20, 30, 40, 50]
arr.splice(2, 1, 5); // arr에 2번째에, 1개를 삭제하고, 5를 넣는다.
console.log(arr); // [10, 20, 5, 40, 50]
// arr.splice().splice() // 메서드 체이닝이 의도한 대로 안되는 이유는 splice는 arr가 아니라 삭제된 값을 반환합니다.

const arr = [10, 20, 30, 40, 50]
arr.splice(2, 2); // 2번째 인덱스에서 값 2개를 삭제합니다. 삽입되는 값은 없습니다.

const arr = [10, 20, 30, 40, 50];
arr.splice(1)
arr                      // [10]

const arr = [10, 20, 30, 40, 50];
arr.splice(2)     
arr                     // [10, 20]

// const arr = [10, 20, 30, 40, 50];
// arr.spliace(,3)     //안된다.
// arr


// arr.slice(start, end)    
// 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
// splice는 원본을 건들인다. 
const myArray = ["apple", "banana", "cherry", "durian", "elderberry"]
console.log(myArray.slice(1, 4))   // ['banana', 'cherry', 'durian']
console.log(myArray)  // 원본은 살아있다.
myArray.slice(1)        //  ['banana', 'cherry', 'durian', 'elderberry']
myArray.slice(0, 100)    // ['apple', 'banana', 'cherry', 'durian', 'elderberry']


//////////////////////////////

const arr = [10, 20, 30, 40, 50]
//arr.forEach(함수)
// 함수 (callbackfn) : (value: numver, index: number, array: number[])
// callback function  나중에 부르는 함수 

arr.forEach(function(item, index){
  console.log(index, item)
})

arr.forEach(function(item, index){
  console.log(index, item)
  console.log('hello')
  console.log('world')
})

arr.forEach(function(item, index, arr){  // array 까지 같이 쓰일일은 거의 없다. array까지 같이 반영
  console.log(index, item, arr)
  console.log('hello')
  console.log('world')
})

// 실무에서 사용하는 코드는 아닙니다.
const arr = Array(100).fill(0)
const arr2 = []

arr.forEach(function(item, index){
  arr2.push(index)
})

// 같은 코드 1
// const arr = Array(100).fill(0)
// const arr2 = []
// arr.forEach(function(item, index){
//     arr2.push(index+1)
// })

// 같은 코드 2
// const arr = Array(100).fill(0)
// const arr2 = []
// arr.forEach((item, index) => {
//     arr2.push(index+1)
// })

// 같은 코드 3(주로 이렇게 실무에서 사용합니다.)
// const arr = Array(100).fill(0)
// const arr2 = []
// arr.forEach((item, index) => arr2.push(index+1))

// 같은 코드 4(이렇게는 사용하지 않습니다.)
// const arr = Array(100).fill(0)
// const arr2 = []

// function hojun(item, index){
//     arr2.push(index+1)
// }

// arr.forEach(hojun)

// 어제 진행했었던 코드
fetch('http://test.api.weniv.co.kr/mall')
    .then(data => data.json())
    .then(data => {
        data.forEach(item => {
            console.log(item.thumbnailImg)
            console.log(item.productName)
            console.log(item.price)
        })
    })

// https://caniuse.com/?search=forEach
// nodeList에서 forEach와 Array에서 forEach는 다릅니다.
// nodeList에서 forEach는 익스플로러를 지원하지 않습니다.


const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];

const newAvengers = [];
avengers.forEach(function (item) {
    newAvengers.push('💖' + item + '💖');
});

console.log(newAvengers)

// map (면접 질문에서도 많이 나옵니다. 데이터를 뽑으려고 많이 사용합니다.)
// map은 forEach와 다르게 새로운 배열을 생성합니다. 

const arr = [1, 2, 3] 
arr.map(function(item, index){    // 이름 없는 함수
  return item ** 2
})

const arr = [1, 2, 3]
arr.map(function(x){
  return x ** 2
})

arr.map(x => x ** 2)


const arr = Array(100).fill(0)
// 같은 코드 1
const arr = Array(100).fill(0)
arr.map((v, i) => i)

// 같은 코드 2
const arr = Array(100).fill(0)
arr.map(function(v, i){
  return i
})

// 같은 코드 3
const arr = Array(100).fill(0)
function hojun(v, i){
  return i
}
arr.map(hojun)

// 같은 코드 4
const arr = Array(100).fill(0)
arr.map((v, i) => {
    return i
})




// 실무 팁(***)
let tip1 = [1, 2, 3, 4, 5]
// console.log(tip1[tip1.length-1])
// 원본 수정 없이 [1, 2, 3, 4] 값과 [5]라는 값을 얻어내고 싶을 때
console.log([...tip1].pop())
let tip2 = [...tip1]
console.log(tip2.pop())
console.log(tip2)

let tip3 = [1, 2, 3, 4, 5]
let tip4 = [10, 20, 30, 40, 50]

console.log([...tip3, 1000, ...tip4])

const tip5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// 다차원 배열에서 최솟값, 최댓값 찾기
Math.max(...tip5.flat())      // flat 메서드는 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성합니다.

const tip6 = [
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]]
]

tip6.flat()
tip6.flat(1)
tip6.flat(2)
tip6.flat(Infinity) // 다 펼쳐지면 스톱

const tip7 = new Array(10).fill(0) // Array(10).fill(0)도 됩니다.
const tip8 = Array.from('hello world')
// Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.
// console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]
// console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]


console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]

// '.'.repeat(100).split('.') // 권하진 않습니다.

let tip9 = [1, 2, 3, 4, 5]

console.log([tip9.slice(0, 2), 1000, tip9.slice(2, 5)])
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)]) // ...은 전개구문(괄호를 없애는 것것)


let tip10 = [1, 2, 3, 4, 5]
tip10.splice(2, 0, 1000)
tip10

// map하고 다시 오겠습니다. //암기
const tip11 = Array(100).fill(0).map((v, i) => i + 1)
// (100) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]


const tip12 = [
    {
      "_id": "642ba3980785cecff3f39a8d",
      "index": 0,
      "age": 28,
      "eyeColor": "green",
      "name": "Annette Middleton",
      "gender": "female",
      "company": "KINETICA"
    },
    {
      "_id": "642ba398d0fed6e17f2f50c9",
      "index": 1,
      "age": 37,
      "eyeColor": "green",
      "name": "Kidd Roman",
      "gender": "male",
      "company": "AUSTECH"
    },
    {
      "_id": "642ba39827d809511d00dd8d",
      "index": 2,
      "age": 39,
      "eyeColor": "brown",
      "name": "Best Ratliff",
      "gender": "male",
      "company": "PRISMATIC"
    }
  ]

  const ages = tip12.map((item) => item.age);
  const ages2 = tip12.map((item) => {
    return item.age
  });    // 같은 결과  // map은 데이터 추출하는 것!!!

  console.log(ages);

  //[28, 37, 39]

  // askup(kakao chatGPT)


