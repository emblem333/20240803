function fn () {
  //関数が予備素出された時の処理
}

const fn  = function(){
  //関数が呼び出された時の処理
}//無名関数

const aroowFn = () => {
  //関数が呼び出された時の処理
}

//引数の括弧を省略（引数が１つだけの場合できる）
const doubleFn = (num) => {
  return num * 2;
}
console.log(doubleFn(1));

//引数の括弧と波括弧とreturnを省略（引数が１つだけの場合できる）
const doubleFn = (num) => num * 2;
console.log(doubleFn(1));

//コールバック関数
function sayHello() {
  console.log('Hello');
}//sayHello関数 = コールバック関数
function greet(callback) {
  Callback(); //console.log('Hello');
}

greet(sayHello);

//無名関数でのコールバック
function greet(callback) {
  callback();
}
greet(function() {
  console.log('Hello'); //Helloが返ってくる
})

//アロー関数でのコールバック関数
greet(() => {
 console.log('Hello');
});

//forEach
const numbers = [1,2,3];
numbers.forEach((num) => {
  console.log(num);
})
//省略形
numbers.forEach(num => console.log(num));

//map
const numbers = [1,2,3];
const newNumbers = numbers.map((num) => {
  return num * 2;
})
//省略形
const numbers = [1,2,3];
const newNumbers = numbers.map(num => num * 2);
console.log(newNumbers)

//filter
const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0
});
//省略形
const evenNumbers = numbers.filter(num => num % 2 === 0)

console.log(evenNumbers);
