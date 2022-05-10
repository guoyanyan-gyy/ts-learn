// interface IndexLanguage{
//   [index:number]:string
// }
// let p:IndexLanguage ={
//   1:'nihao',
//   2:'shi'
// }

type CalcFn1 = (num1: number, num2: number) => number;
// 函数类型
interface CalcFn {
  (n1: number, n2: number): number;
}
function calc(num1: number, num2: number, calcfn: CalcFn) {
  return calcfn(num1, num2);
}
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
const add: CalcFn = (num1, num2) => {
  return num1 + num2;
};
console.log(calc(1, 2, add));

export {};
