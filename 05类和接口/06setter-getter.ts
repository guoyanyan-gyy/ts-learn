// 访问器 getter/setter
class person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  // setter访问器
  set name(name: string) {
    this._name = name;
  }
  // getter 访问器
  get name() {
    return this._name;
  }
}
let hh = new person("yy");
hh.name = "7788";
console.log(hh.name);
