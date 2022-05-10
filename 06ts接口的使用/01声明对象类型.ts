// 类型别名
type InfoType = {
  name: string;
  age: number;
};
let p: InfoType = {
  name: "huahua",
  age: 12,
};

// 接口定义类型
interface IInfoType1 {
  readonly name: string;
  age: number;
  size?: number;
}
let p1: IInfoType1 = {
  name: "huahua",
  age: 12,
};
