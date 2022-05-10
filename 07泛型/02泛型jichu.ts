// 在定义时候不定义类型，调用者来决定是什么类型
// 类型参数化
function sum<T>(num1: T): T {
  return num1;
}
// 明确类型
console.log(sum<number>(1));
// 或者类型推导
console.log(sum(1));
