function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;
// 实现体
function add(num1: any, num2: any): any {
  if (typeof num1 === "string") {
    return num1.length + num2.length;
  } else {
    return num1 + num2;
  }
}
console.log(add(1, 2));
console.log(add("abc", "cba"));
