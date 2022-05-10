class Person {
  name: String = "";
  age: number = 1;
  getName() {
    console.log(this.name);
  }
  getAge() {
    console.log(this.age);
  }
}
class stu extends Person {
  grade: string = "1班";
  getGrade() {
    console.log(this.grade);
  }
}
let yy = new stu();
yy.age = 122;
console.log(yy.age);

export {};
