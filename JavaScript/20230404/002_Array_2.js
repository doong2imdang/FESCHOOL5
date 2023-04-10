const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
arr.filter(function(el) {         // el: element
  return el % 2 === 0
});


// 홀수
arr.filter(function(el) {         
  return el % 2 === 1            
});

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
arr2.filter(function(el) {         
  return el % 2 !== 0            
});        

function solution(n) {
  return Array(n)
      .fill()
      .map((_, i) => i + 1)      // _ : item,element 값 (의미없는 값은 _로 사용하는게 관습)
      .filter((v) => v % 2 === 0)
      .reduce((a, c) => a + c, 0);     // reduce 에서 저 0은 초기값으로 무조건 넣어줘야한다.
}

// 모음 제거
Array.from('hello world').filter(v => !["a", "e", "i", "o", "u"].includes(v))     // ['h', 'l', 'l', ' ', 'w', 'r', 'l', 'd']

// reduce // 하나씩 축적해주는 
const arr1 = [1, 2, 3, 4, 5]
arr1.reduce((a, c) => a + c, 0)

// const arr1 = []
// arr1.reduce((a, c) => a + c)  // error

// const arr1 = [1]
// arr1.reduce((a, c) => a + c)


// 0을 항상 넣어주세요
// const arr1 = []
// arr1.reduce((a, c) => a + c, 0)

// min, max도 있는데 sum이 없다?


// includes
const arr3 = ['hello', 'world', 'hojun']
arr3.includes('world')   // true

const arr4 = ['hello', 'world', 'hojun']
arr4.includes('leehojun')   // false

const arr5 = ['hello', 'world', 'hojun']
arr5.includes('jun')   // false

// join
const arr6 = ['hello', 'world', 'hojun']
arr6.join('!')

const arr7 = ['010', '5044', '2903']
arr7.join('-')

// const arr7 = [010, 5044, 2903]
// arr7.join('-')     //'8-5044-2903' // 안되는거에여~

// 0b100 - 4             // b는 바이너리의 약자입니다. 
// 0o100 - 64           // o는 옥타의 첫글자 입니다. 
// 0x100 - 16진법(256)  // x는 헥사를 표현합니다. 
