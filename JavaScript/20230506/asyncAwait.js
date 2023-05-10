// async function message() {
//   let hello = await new Promise((resolve) => {
//       setTimeout(() => {
//           resolve('hello');
//       }, 100)
//   })

//   let world = await new Promise((resolve) => {
//       setTimeout(() => {
//           resolve('world');
//       }, 100)
//   })

//   console.log(`${hello} ${world}`);
// }

// message();

// ------------------ 위 코드가 같은 코드 ----------------------- //
// Promise 직렬 처리
// function message() {
//   new Promise((resolve) => {
//       setTimeout(() => {
//           resolve('hello');
//       }, 100)
//   }).then((result) => {
//       return new Promise((resolve) => {   // return을 빼도 작동한다. 
//         setTimeout(() => {
//           resolve(result + ' world');
//       }, 100)
//     }).then((message) => {
//         console.log(message);
//     })
//   })
// }

// message();

// console.log('i am sync!!')

// ------------------ 위 코드가 같은 코드 ----------------------- //
// Promise 병렬 처리
// function message() {

//   Promise.all([   // static 메서드(객체의 인스턴스를 따로 만들지 않고 바로 실행하는 메서드)
//     new Promise((resolve) => {
//       setTimeout(() => {
//           resolve('hello');
//       }, 100)
//     }),
//     new Promise((resolve) => {   // return을 빼도 작동한다. 
//       setTimeout(() => {
//         resolve('world');
//     }, 100)
//   })
//   ]).then((resultArray) => {   // .then(([hello, world]) => {}) 이것도 가능
//     console.log(`${resultArray[0]} ${resultArray[1]}`)
//   })
// }

// message();

// ------------------ 위 코드가 같은 코드 ----------------------- //
// 위 Promise.all()을 async await로 
async function message() {
  const [hello, world] = await Promise.all([
      new Promise((resolve) => {
          setTimeout(() => {
              resolve('hello');
          }, 100)
      }),
      new Promise((resolve) => {
          setTimeout(() => {
              resolve('world');
          }, 100)
      })
  ]);

  console.log(`${hello} ${world}`);
}

message();