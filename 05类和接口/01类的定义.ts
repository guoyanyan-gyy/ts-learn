class Person {
  name: string = "";
  age: number = 0;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getMsg() {
    console.log(this.age);
  }
}
let yy = new Person("yanyan", 12);
yy.getMsg();
