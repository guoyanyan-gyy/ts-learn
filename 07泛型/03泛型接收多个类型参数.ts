// 接受多个参数的类型
// function foo<T, E, O>(arg1: T, arg2: E, arg3: O) {
//   console.log(arg1);
//   console.log(arg2);
//   console.log(arg3);
// }
// foo(1, "haha", true);

// 泛型接口的使用
// interface IPerson<T1=string, T2=number> {
//   name: T1;
//   age: T2;
// }
// const p: IPerson<number,number> = {
//   name: 111,
//   age: 12,
// };

// 泛型类的使用
class Point<T> {
  x: T;
  y: T;
  z: T;
  constructor(x: T, y: T, z: T) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
const p = new Point(1, 2, 3);
const p1 = new Point<number>(1, 2, 3);
const p2: Point<number> = new Point(1, 2, 3);

export {};
