//https://ko.javascript.info/nullish-coalescing-operator
//스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필(최신문법을 구식브라우저에서도 사용할 수 있도록 해주는 것)이 필요합니다.

let firstName = null;
let lastName = null;
let nickName =  '둥이';

console.log(firstName ?? nickName)
console.log(firstName ?? lastName ?? nickName)
console.log(firstName ?? lastName ?? nickName ?? '익명사용자') // 값이 다 null일떄 익명사용자라고 나온다.

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c) // 10 (null인 것을 판단해서 null인경우 넘어간다.)

// 단락회로평가와 nullish 연산자 차이점
let height = 0;
console.log(height || 100) // 100
console.log(height ?? 100) // 0 height가 null이야? 라고 물어보는 것: null이 아니기 때문에 0이 나온다.

let height2;
console.log(height2 || 100) // 100
console.log(height2 ?? 100) // 100

let height3 = '';
console.log(height3 || 'hello')  // hello
console.log(height3 ?? 'world')  // 빈문자열

// 제가 지금 주석으로 다는 내용은 지금 여기서는 모르셔도 괜찮습니다. 
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined
