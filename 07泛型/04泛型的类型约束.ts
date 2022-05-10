// 类型约束
interface Ilength {
  length: number;
}
function getLength<T extends Ilength>(len: T) {
  console.log(len.length);
}
getLength("123");
getLength([1, 2, 3]);
getLength({ length: 5 });
