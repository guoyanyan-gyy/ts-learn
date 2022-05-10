type Lianhe = number | string;
// 交叉类型
type Jiaocha = number & string;

interface Iswim {
  swimming: () => void;
}
interface Ifly {
  flying: () => void;
}
type MType = Ifly | Iswim;
type MType1 = Ifly & Iswim;
let p: MType = {
  swimming() {},
};
let s: MType1 = {
  swimming() {},
  flying() {},
};
export {};
