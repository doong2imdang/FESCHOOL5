const value = 'two'

switch (value) {
  case 'one':
    console.log('hello one')
    break;
  case 'two':
    console.log('hello two')
    break;
  case 'three':
    console.log('hello three')
    break;
  default: 
    console.log('hello default')
    break;                                   // hello two
}


///
const value2 = 'four'

switch (value2) {
  case 'one':
    console.log('hello one')
    break;
  case 'two':
    console.log('hello two')
    break;
  case 'three':
    console.log('hello three')
    break;
  default: 
    console.log('hello default')
    break;
}                                         // hello default

////
const value3 = 'one'

switch (value3) {
  case 'one':
    console.log('hello one')
  case 'two':
    console.log('hello two')
  case 'three':
    console.log('hello three')
  default: 
    console.log('hello default')
}                                         // hello one hello two  hello three hello default

///
switch (new Date().getDay()) {
  case 0: 
    console.log('일요일');
    break;
  case 1:
    console.log('월요일');
    break;
  case 2:
    console.log('화요일');
    break;
  case 3:
    console.log('수요일');
    break;
  case 4:
    console.log('목요일');
    break;
  case 5:
    console.log('금요일');
    break;
  case 6:
    console.log('토요일');
    break;
    // default값은 필수는 아니지만 견고한 코딩을 위해선 써주는게 편이 좋다.
}

// 여러줄 복사하고 싶을 때에 Alt + Shift + 위아래
// 같은 단어 찾고 싶을 때 Ctrl + D
// 같은 모든 단어 Ctrl + Shift + l 입니다. 
// 자동정렬 Ctrl + a, Ctrl k + Ctrl + f(Ctrl누른 상태여야 합니다.)
// 전체 줄 선택 Ctril + L 
// 커서 위치 행 삭제: Ctrl + Shift + K

// 다른 언어에서 switch문 어떻게 사용할까요? python은 switch문 없느데?
const 요일 = new Date().getDay()
const 요일객체 = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일'
}

console.log(요일객체[요일])
// default는 어떻게 처리?

const 요일2 = 10
const 요일객체2 = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일'
}

// nullish 연산자 사용
console.log(요일객체2[요일2] ?? 'hello')   // hello   // 요일객체2[요일2]가 undefined라 hello 출력
//단락평가 사용
console.log(요일객체[요일] || 'hello')     // 목요일(당일 요일)


// terminal
// cd 폴더명 : 파일위치 이동 (cd 폴더명/폴더명 하면 두단계 이동 가능)
// cd .. : 전 상위 폴더 이동
// mkdir 폴더명 : 폴더 생성
// touch 파일명 파일명 : 파일 생성
// ls : 현재 폴더 파일 목록

