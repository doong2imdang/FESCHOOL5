const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

let text = "";

`
<section>
<h2>BMW</h2>
</section>
<section>
<h2>Volvo</h2>
</section>
...
`
text += '<section><h2>' + cars[0] + '</h2></section>'
text += '<section><h2>' + cars[1] + '</h2></section>'
text += '<section><h2>' + cars[2] + '</h2></section>'
text += '<section><h2>' + cars[3] + '</h2></section>'
text += '<section><h2>' + cars[4] + '</h2></section>'

console.log(text)

// <section><h2>BMW</h2></section><section><h2>Volvo</h2></section><section><h2>Saab</h2></section><section><h2>Ford</h2></section><section><h2>Flat</h2></section>

document.body.innerHTML = text 
document.write(text)

///////////////
const cars2 = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
let text2 = ''
for (let i = 0; i < cars2.length; i++) {
  text2 += '<section><h2>' + cars2[i] + '</h2></section>'
}
text2

// <section><h2>BMW</h2></section><section><h2>Volvo</h2></section><section><h2>Saab</h2></section><section><h2>Ford</h2></section><section><h2>Flat</h2></section><section><h2>Audi</h2></section>

//////////
for (let i = 0; i < 10; i++) {
  console.log(i)     // 0 1 2 3 4 5 6 7 8 9
}
// console,log(i)  // i는 반복문이 끝난 다음 호출할 수 없다. 블록레벨이라
for (let i = 0; i < 10; ++i) {   // 위 구문과 차이가 없습니다. 
  console.log(i)     // 0 1 2 3 4 5 6 7 8 9
}

for (let i = 0; i < 10; i += 2) {
  console.log(i)    // 0 2 3 6 8
}

for (i = 0; i < 10; i += 2) {    // let을 생략하시면 안됩니다. i가 전역으로 되버립니다. 
  console.log(i)    
}

//for (;;) {       
  // 무한반복 코드입니다.  
  // 이런 코드는 작성도 하지마세요.
  // 의도한 무한반복은 매우 위험합니다. 
  // 무한반복은 메모리를 많이 잡아먹기 때문에 시스템 전체에 영향이 갑니다. 
  // 1. 반복의 시간을 가능하면 정해주세요.
  // 2. 탈출 조건을 명확히 해주세요. 
//  console.log('실행하지 마세요.')    
//}

for (let i = 0; i < 10;) {
  console.log('실행하지 마세요.')
  i += 1
}

for (let i = 0;;) {
  console.log('실행하지 마세요.')
  i += 1
  if (i >= 10) {
      break
  }
}

for (;;) { //무한반복입니다.
  let i = 0
  console.log('실행하지 마세요.')
  i += 1
  if (i >= 10) {
      break
  }
}

let i = 0
for (;;) {
  console.log('실행하지 마세요.')
  i += 1
  if (i >= 10) {
      break
  }
}


