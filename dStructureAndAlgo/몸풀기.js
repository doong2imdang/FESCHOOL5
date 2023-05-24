// 값 switching 하기

let a = 'hello';
let b = 'lions';
let c;
c = a;
a = b;
b = c;

a = [a, b];
b = a[0];
a = a[1];
// console.log(a);
// console.log(b);

// 1. 구조분해할당
let a1 = 10;
let b1 = 30;
[a1, b1] = [b1, a1];

// 2. 숫자의 특성 활용하기
a1 = a1 + b1; // a1 : 40
b1 = a1 - b1; // b1 : 10
a1 = a1 - b1; // a1 : 30

// 3.
a1 = a1 * 3;
b1 = b1 / 3;
// console.log(a1);
// console.log(b1);

