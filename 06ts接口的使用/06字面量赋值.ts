interface Info {
  name: string;
  age: number;
}
let info = {
  name: "huhu",
  age: 18,
  address: "er",
};
const p: Info = info;
// const p:Info = {
//   name:'huhu',
//   age:18,
//   address:'er'
// }
console.log(p);
