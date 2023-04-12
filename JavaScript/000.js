const obj = {
  a : 1,
  b : {
    c: 9,
  },
}

const newObj = JSON.parse(JSON.stringify(obj));

newObj.b.c = 8;

console.log(obj); // {a, 1, b: {c: 9}}
console.log(newObj); // {a, 1, b: {c: 8}}
console.log(obj.b.c === newObj.b.c); // false
